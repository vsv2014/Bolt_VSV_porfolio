// Deterministically rasterize the checked-in SVG with Chromium.
// This avoids hand-edited connector lines and keeps web/GitHub previews consistent.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { chromium } from 'playwright-core';

const source = 'public/assets/social-preview.svg';
const destination = 'public/assets/social-preview.png';
const markup = readFileSync(source, 'utf8');
const executablePath = ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser'].find(existsSync);
const browser = await chromium.launch({
  ...(executablePath ? { executablePath } : {}),
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
try {
  const page = await browser.newPage({
    viewport: { width: 1280, height: 640 },
    deviceScaleFactor: 1,
    reducedMotion: 'reduce',
  });
  const svg = Buffer.from(markup, 'utf8').toString('base64');
  await page.setContent(`<!doctype html><html><head><meta charset="utf-8"></head><body style="margin:0;background:#030916;overflow:hidden"><img alt="Santhosh Vishal engineering portfolio" width="1280" height="640" src="data:image/svg+xml;base64,${svg}" style="display:block;width:1280px;height:640px"></body></html>`, { waitUntil: 'load' });
  await page.waitForFunction(() => {
    const img = document.querySelector('img');
    return img && img.complete && img.naturalWidth === 1280 && img.naturalHeight === 640;
  });
  mkdirSync('public/assets', { recursive: true });
  const png = await page.screenshot({ type: 'png', animations: 'disabled' });
  writeFileSync(destination, png);
  if (png.length > 1_000_000) throw new Error(`Social preview too large for GitHub: ${png.length} bytes`);
  console.log(`Rendered ${destination}: 1280 × 640, ${png.length} bytes`);
} finally {
  await browser.close();
}
