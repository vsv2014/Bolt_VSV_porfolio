import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { chromium } from 'playwright-core';

const executablePath = ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser']
  .find((path) => existsSync(path));
const browser = await chromium.launch({
  ...(executablePath ? { executablePath } : {}),
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
const root = 'http://127.0.0.1:4173/';
const failures = [];

async function audit(width, height) {
  const page = await browser.newPage({ viewport: { width, height }, reducedMotion: 'reduce' });
  const pageErrors = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));
  try {
    await page.goto(root, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('#craft', { timeout: 15_000 });
    await page.evaluate(() => document.getElementById('craft')?.scrollIntoView({ block: 'start' }));
    const canvas = page.getByTestId('flow-canvas');
    await canvas.waitFor({ state: 'visible' });
    await page.waitForTimeout(250);
    const data = await canvas.evaluate((element) => {
      const outer = element.getBoundingClientRect();
      const nodes = [...element.querySelectorAll('[role="group"][aria-label*=" node, keyboard arrows"]')]
        .map((node) => node.getBoundingClientRect());
      return {
        width: outer.width, height: outer.height,
        nodes: nodes.map((node) => ({
          left: node.left - outer.left, top: node.top - outer.top,
          right: node.right - outer.left, bottom: node.bottom - outer.top,
        })),
      };
    });
    assert.ok(data.height >= 350, `canvas collapsed at ${width}px: ${data.height}`);
    assert.equal(data.nodes.length, 5, 'seed nodes not rendered');
    for (const node of data.nodes) {
      assert.ok(node.left >= -1 && node.top >= -1, `node outside canvas start at ${width}px`);
      assert.ok(node.right <= data.width + 1 && node.bottom <= data.height + 1,
        `node clipped at ${width}px: ${JSON.stringify(node)} vs ${data.width}x${data.height}`);
    }

    const first = canvas.locator('[role="group"]').first();
    const before = await first.evaluate((element) => parseFloat(getComputedStyle(element).left));
    await first.focus();
    await page.keyboard.press('ArrowRight');
    const after = await first.evaluate((element) => parseFloat(getComputedStyle(element).left));
    assert.ok(after > before, 'keyboard arrow did not move graph node');

    const removeEdge = canvas.locator('svg [role="button"]').first();
    assert.equal(await canvas.locator('svg [role="button"]').count(), 4);
    await removeEdge.focus();
    await page.keyboard.press('Enter');
    assert.equal(await canvas.locator('svg [role="button"]').count(), 3, 'keyboard edge removal failed');
    await page.getByRole('button', { name: /reset/i }).first().click();
    assert.equal(await canvas.locator('svg [role="button"]').count(), 4, 'reset did not restore edges');

    const viewport = page.getByTestId('virtual-viewport');
    const dimensions = await viewport.evaluate((element) => ({
      height: element.clientHeight, rendered: element.querySelectorAll('[role="listitem"]').length,
    }));
    assert.ok(dimensions.height >= 240 && dimensions.height <= 330,
      `virtual viewport stretched/collapsed: ${dimensions.height}`);
    assert.ok(dimensions.rendered < 35, `too many rows in DOM: ${dimensions.rendered}`);
    await viewport.evaluate((element) => { element.scrollTop = element.scrollHeight; });
    await page.waitForFunction(() =>
      document.querySelector('[data-testid="virtual-viewport"]')?.textContent?.includes('tenant-10000'),
      { timeout: 5000 });
    assert.ok((await viewport.locator('[role="listitem"]').count()) < 35);

    // Open-source-inspired work presentation: accessible stories and a compact archive.
    const stories = page.getByTestId('featured-stories');
    await stories.waitFor({ state: 'visible' });
    assert.equal(await stories.locator('article').count(), 3, 'expected three editorial stories');
    const firstBreakdown = stories.locator('details').first();
    assert.equal(await firstBreakdown.getAttribute('open'), null, 'case studies should start collapsed');
    await firstBreakdown.locator('summary').click();
    assert.ok(await firstBreakdown.getByText('The problem').isVisible(), 'breakdown did not expand');

    const archiveToggle = page.getByTestId('project-archive-toggle');
    const archive = page.getByTestId('project-archive-content');
    assert.equal(await archive.isVisible(), false, 'full archive should start collapsed');
    await archiveToggle.click();
    assert.equal(await archive.isVisible(), true, 'full archive cannot be opened');
    const allProjectCount = await archive.locator('[data-project-title]').count();
    assert.ok(allProjectCount >= 20, `archive lost projects: ${allProjectCount}`);
    await archive.getByRole('button', { name: /Solo builds/i }).click();
    const soloCount = await archive.locator('[data-project-title]').count();
    assert.ok(soloCount > 0 && soloCount < allProjectCount, 'category filtering failed');

    // Return to the feature preview for the visual CI artifact.
    await archiveToggle.click();
    await firstBreakdown.locator('summary').click();
    await stories.scrollIntoViewIfNeeded();
    await page.screenshot({ path: `/tmp/portfolio-stories-${width}.png`, fullPage: false });
    const overflow = await page.evaluate(() => ({ page: document.documentElement.scrollWidth, viewport: window.innerWidth }));
    assert.ok(overflow.page <= overflow.viewport + 2,
      `horizontal overflow at ${width}px: ${overflow.page} > ${overflow.viewport}`);

    assert.deepEqual(pageErrors, [], `page errors at ${width}px`);
    console.log(`PASS ${width}x${height}: canvas ${Math.round(data.width)}x${Math.round(data.height)}, 5 nodes, edge reset, keyboard nudge, 10k-row scroll`);
    await page.screenshot({ path: `/tmp/portfolio-craft-${width}.png`, fullPage: false });
  } catch (error) {
    failures.push(`${width}x${height}: ${error.stack || error}`);
  } finally {
    await page.close();
  }
}

try {
  await audit(1253, 960);
  await audit(390, 844);
} finally {
  await browser.close();
}
if (failures.length) {
  console.error(failures.join('\n\n'));
  process.exitCode = 1;
}
