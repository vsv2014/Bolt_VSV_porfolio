import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { chromium } from 'playwright-core';

const require = createRequire(import.meta.url);
const axePath = require.resolve('axe-core/axe.min.js');
const browserPath = ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser'].find(existsSync);
const browser = await chromium.launch({
  ...(browserPath ? { executablePath: browserPath } : {}),
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});

const failures = [];
try {
  for (const [width, height] of [[390, 844], [1253, 960]]) {
    const page = await browser.newPage({
      viewport: { width, height },
      reducedMotion: 'reduce',
    });
    try {
      await page.goto('http://127.0.0.1:4173/', { waitUntil: 'domcontentloaded' });
      await page.getByRole('heading', { level: 1 }).waitFor({ state: 'visible' });
      await page.addScriptTag({ path: axePath });

      const scan = async (mode) => {
        const report = await page.evaluate(async () => {
          return window.axe.run(document, {
            runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] },
          });
        });
        const serious = report.violations.filter((v) => ['critical', 'serious'].includes(v.impact));
        console.log(`Axe ${width}x${height} ${mode}: ${report.violations.length} violation groups; ${serious.length} serious/critical`);
        for (const violation of serious) {
          console.error(`  ${violation.impact}: ${violation.id} — ${violation.nodes.slice(0, 3).map(n => n.target.join(',')).join(' | ')}`);
        }
        return serious.map(v => ({
          rule: v.id,
          impact: v.impact,
          selectors: v.nodes.slice(0, 10).map(n => n.target.join(',')).join(' | '),
        }));
      };

      const dark = await scan('dark');
      const toggle = page.getByRole('button', { name: /switch to light theme/i });
      await toggle.first().click();
      await page.waitForTimeout(150);
      const light = await scan('light');
      assert.deepEqual({ dark, light }, { dark: [], light: [] },
        `Serious accessibility issues at ${width}x${height}`);
    } catch (error) {
      failures.push(`${width}x${height}: ${error.stack ?? error}`);
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}

if (failures.length) {
  console.error(failures.join('\n\n'));
  process.exitCode = 1;
}
