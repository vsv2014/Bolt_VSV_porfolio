import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { chromium, webkit } from 'playwright-core';

const engineName = process.env.PLAYWRIGHT_BROWSER === 'webkit' ? 'webkit' : 'chromium';
const engine = engineName === 'webkit' ? webkit : chromium;
const chromiumPath = ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser']
  .find((path) => existsSync(path));
const browser = await engine.launch({
  headless: true,
  ...(engineName === 'chromium'
    ? { ...(chromiumPath ? { executablePath: chromiumPath } : {}), args: ['--no-sandbox', '--disable-dev-shm-usage'] }
    : {}),
});
const root = 'http://127.0.0.1:4173/';
const failures = [];

// Confirm iPhone-sized visitors can read a real first-screen without waiting
// for Motion (or an embedded browser's frame scheduling).
async function checkInteractive(width, height) {
  const page = await browser.newPage({
    viewport: { width, height },
    isMobile: true,
    hasTouch: true,
    reducedMotion: 'no-preference',
  });
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  try {
    await page.goto(root, { waitUntil: 'domcontentloaded' });
    const heading = page.getByTestId('hero-heading');
    await heading.waitFor({ state: 'visible', timeout: 20_000 });
    const avatar = page.getByTestId('hero-mobile-portrait');
    await avatar.waitFor({ state: 'visible' });
    await page.getByRole('link', { name: /Explore selected work/i }).waitFor({ state: 'visible' });

    const state = await page.evaluate(() => {
      const hero = document.querySelector('[data-testid="hero-content"]');
      const heading = document.querySelector('[data-testid="hero-heading"]');
      const portrait = document.querySelector('[data-testid="hero-mobile-portrait"]');
      const action = document.querySelector('a[href="#projects"]');
      const bounds = (el) => {
        const r = el.getBoundingClientRect();
        return { top: r.top, bottom: r.bottom, left: r.left, right: r.right, width: r.width };
      };
      let opacity = 1;
      let element = hero;
      while (element && element !== document.body) {
        opacity *= Number(getComputedStyle(element).opacity);
        element = element.parentElement;
      }
      return {
        viewport: innerWidth,
        viewportHeight: innerHeight,
        bodyWidth: document.documentElement.scrollWidth,
        hero: bounds(hero),
        heading: bounds(heading),
        portrait: bounds(portrait),
        action: bounds(action),
        opacity,
        fallbackVisible: Boolean(document.querySelector('.static-entry')),
        introVisible: Boolean(document.querySelector('[aria-hidden="true"].fixed.z-\\[90\\]')),
      };
    });
    assert.equal(state.fallbackVisible, false, 'static loading fallback was not replaced');
    assert.ok(state.opacity >= 0.99, `Hero remains transparent: ${JSON.stringify(state)}`);
    assert.ok(state.heading.top >= 0 && state.heading.top < height * 0.65,
      `Hero name not visible early in viewport: ${JSON.stringify(state)}`);
    assert.ok(state.heading.bottom < height, 'Hero name extends below fold');
    assert.ok(state.portrait.bottom < height, 'Mobile portrait is not on first screen');
    assert.ok(state.action.top < height, 'Primary action is below first screen');
    assert.ok(state.bodyWidth <= state.viewport + 2, `Mobile horizontal overflow: ${JSON.stringify(state)}`);
    assert.deepEqual(errors, [], 'browser errors');
    await page.screenshot({ path: `/tmp/portfolio-mobile-${engineName}-${width}.png`, fullPage: false });
    console.log(`PASS interactive ${engineName} ${width}x${height}: visible name, portrait and CTA, no overflow`);
  } catch (error) {
    failures.push(`${engineName} interactive ${width}x${height}: ${error.stack || error}`);
  } finally {
    await page.close();
  }
}

// If JavaScript is blocked by an in-app browser or takes too long to load,
// visitors should see an intentional, compact introduction instead of a wall of text.
async function checkStaticFallback(width, height) {
  const page = await browser.newPage({
    viewport: { width, height },
    isMobile: true,
    hasTouch: true,
    javaScriptEnabled: false,
  });
  try {
    await page.goto(root, { waitUntil: 'domcontentloaded' });
    const headline = page.locator('.static-entry h1');
    assert.ok(await headline.isVisible(), 'No readable fallback headline without JavaScript');
    const result = await page.evaluate(() => {
      const heading = document.querySelector('.static-entry h1').getBoundingClientRect();
      const cta = document.querySelector('.static-action-primary').getBoundingClientRect();
      return {
        headingTop: heading.top, headingBottom: heading.bottom, ctaTop: cta.top,
        viewport: innerWidth, pageWidth: document.documentElement.scrollWidth,
      };
    });
    assert.ok(result.headingTop < height / 2 && result.headingBottom < height,
      `Fallback headline too low: ${JSON.stringify(result)}`);
    assert.ok(result.ctaTop < height,
      `Fallback call-to-action below fold: ${JSON.stringify(result)}`);
    assert.ok(result.pageWidth <= result.viewport + 2,
      `Fallback horizontal overflow: ${JSON.stringify(result)}`);
    assert.ok(await page.getByRole('link', { name: /Explore engineering notes/i }).isVisible());
    await page.screenshot({ path: `/tmp/portfolio-mobile-${engineName}-nojs-${width}.png`, fullPage: false });
    console.log(`PASS fallback ${engineName} ${width}x${height}: compact no-JS first screen`);
  } catch (error) {
    failures.push(`${engineName} fallback ${width}x${height}: ${error.stack || error}`);
  } finally {
    await page.close();
  }
}

try {
  for (const [width, height] of [[375, 812], [390, 844], [430, 932]]) {
    await checkInteractive(width, height);
  }
  await checkStaticFallback(390, 844);
} finally {
  await browser.close();
}
if (failures.length) {
  console.error(failures.join('\n\n'));
  process.exitCode = 1;
}
