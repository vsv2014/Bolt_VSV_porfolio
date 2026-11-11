import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(path, 'utf8');
const names = ['react-flow-editor', 'virtualized-10000-rows', 'honest-ai-console'];

test('the first homepage HTML response contains an accessible engineering overview', () => {
  const index = read('index.html');
  const firstResponse = index.slice(index.indexOf('<main class="static-entry">'), index.indexOf('</main>') + 7);
  assert.match(firstResponse, /<h1>Santhosh Vishal<\/h1>/);
  assert.match(firstResponse, /Software Engineer · Frontend/);
  assert.match(firstResponse, /React, TypeScript and Node\.js/);
  assert.match(firstResponse, /Phone and WhatsApp contact are shared only after review/);
  assert.equal((firstResponse.match(/<h1>/g) || []).length, 1);
  for (const name of names) {
    assert.ok(firstResponse.includes(`href="/notes/${name}.html"`), `missing crawlable HTML link: ${name}`);
  }
  // Short, actionable fallback copy is intentional: avoid a wall of text on phones.
  assert.ok(firstResponse.replace(/<[^>]+>/g, ' ').split(/\s+/).length >= 65);
});

test('article titles fit snippet guidance while article headlines remain descriptive', () => {
  for (const name of names) {
    const html = read(`public/notes/${name}.html`);
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    assert.ok(title && title.length >= 30 && title.length <= 60, `bad title length for ${name}: ${title}`);
    assert.ok(html.includes('<h1>'), `missing descriptive headline: ${name}`);
  }
});

test('the social preview is a 2:1 editorial graphic with three real directional connectors', () => {
  const svg = read('public/assets/social-preview.svg');
  assert.match(svg, /width="1280" height="640"/);
  assert.match(svg, /Santhosh Vishal/);
  assert.match(svg, /santhoshvishal.vercel.app/);
  assert.match(svg, /M885 260H964/); // input to retrieve
  assert.match(svg, /M1084 320V364/); // retrieve to tool
  assert.match(svg, /M965 422H884/); // tool to review
  assert.match(read('scripts/render-social-preview.mjs'), /public\/assets\/social-preview.png/);
});

test('homepage search snippets are concise and every share preview uses the checked-in PNG', () => {
  const homepage = read('index.html');
  const title = homepage.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = homepage.match(/<meta name="description" content="([^"]+)"/)?.[1];
  assert.ok(title && title.length <= 60, `homepage title is too long: ${title?.length}`);
  assert.ok(description && description.length <= 160, `description too long: ${description?.length}`);
  for (const path of ['index.html', ...names.map(name => `public/notes/${name}.html`)]) {
    const html = read(path);
    assert.match(html, /og:image" content="https:\/\/santhoshvishal\.vercel\.app\/assets\/social-preview\.png"/);
    assert.match(html, /og:image:width" content="1280"/);
    assert.match(html, /og:image:height" content="640"/);
    assert.match(html, /twitter:image" content="https:\/\/santhoshvishal\.vercel\.app\/assets\/social-preview\.png"/);
  }
});
