import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { gzipSync } from 'node:zlib';

const directory = 'dist/assets';
const names = readdirSync(directory);
const entry = names.find((name) => /^index-[^-].*\.js$/.test(name));
const css = names.find((name) => /^index-.*\.css$/.test(name));
assert.ok(entry, 'Missing entry JS bundle');
assert.ok(css, 'Missing CSS bundle');

function size(path) {
  const bytes = readFileSync(path);
  return { raw: bytes.length, gzip: gzipSync(bytes, { level: 9 }).length };
}

const entrySize = size(join(directory, entry));
const cssSize = size(join(directory, css));
const portrait = names.find((name) => /^VSV-portfolio-pp-.*\.jpeg$/.test(name));
assert.ok(portrait, 'Missing primary portrait image');
const portraitSize = statSync(join(directory, portrait)).size;
const html = statSync('dist/index.html').size;

const budgets = {
  entryJavaScriptGzip: 195 * 1024,
  stylesGzip: 22 * 1024,
  heroPortrait: 250 * 1024,
  html: 16 * 1024,
};

console.log(JSON.stringify({
  entryJavaScript: { file: entry, ...entrySize },
  styles: { file: css, ...cssSize },
  heroPortraitBytes: portraitSize,
  htmlBytes: html,
  budgetBytes: budgets,
}, null, 2));

assert.ok(entrySize.gzip <= budgets.entryJavaScriptGzip, 'Entry JavaScript exceeds 195 KiB gzip regression budget');
assert.ok(cssSize.gzip <= budgets.stylesGzip, 'CSS exceeds 22 KiB gzip regression budget');
assert.ok(portraitSize <= budgets.heroPortrait, 'Hero image exceeds 250 KiB regression budget');
assert.ok(html <= budgets.html, 'Initial HTML exceeds 16 KiB regression budget');
