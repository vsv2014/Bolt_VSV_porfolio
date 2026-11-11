import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const file = (path) => readFileSync(path, 'utf8');
const domain = 'https://santhoshvishal.vercel.app/';
const notes = [
  'react-flow-editor',
  'virtualized-10000-rows',
  'honest-ai-console',
];

test('official domain is canonical and has honest public metadata', () => {
  const html = file('index.html');
  assert.match(html, /<link rel="canonical" href="https:\/\/santhoshvishal\.vercel\.app\/"/);
  assert.match(html, /<title>Santhosh Vishal \| Software Engineer/);
  assert.doesNotMatch(html, /vsv2014\.github\.io|in-browser RAG agent console/);
  assert.match(html, /og:image:alt/);
  assert.match(html, /"alternateName": "Santhosh Vishal"/);
});

test('robots and sitemap reference only the official domain', () => {
  const robots = file('public/robots.txt');
  const sitemap = file('public/sitemap.xml');
  assert.ok(robots.includes(`Sitemap: ${domain}sitemap.xml`));
  assert.ok(sitemap.includes(`<loc>${domain}</loc>`));
  assert.doesNotMatch(sitemap, /github\.io/);
  for (const slug of notes) {
    assert.ok(sitemap.includes(`${domain}notes/${slug}.html`), `missing ${slug} sitemap entry`);
  }
});

test('engineering articles are standalone, readable and linked in the site', () => {
  const notesView = file('src/components/sections/EngineeringNotes.tsx');
  const app = file('src/App.tsx');
  assert.match(app, /<EngineeringNotes \/>/);
  for (const slug of notes) {
    assert.ok(notesView.includes(`/notes/${slug}.html`), `missing ${slug} site link`);
    const article = file(`public/notes/${slug}.html`);
    assert.match(article, /<h1>/);
    assert.match(article, /<article>/);
    assert.match(article, /<meta name="description"/);
    assert.match(article, new RegExp(`https://santhoshvishal\\.vercel\\.app/notes/${slug}\\.html`));
    assert.doesNotMatch(article, /vsv2014\.github\.io|7702771465/);
  }
});

test('AI console does not misrepresent local retrieval as real embeddings or LLM calls', () => {
  const console = file('src/components/sections/AgentConsole.tsx');
  const engine = file('src/lib/agent.ts');
  assert.match(console, /keyword ranking/);
  assert.match(console, /No model API/);
  assert.match(engine, /local tokenization · no embeddings/);
  assert.doesNotMatch(console, /1536-d embeddings|cosine top-k/);
  assert.doesNotMatch(engine, /text-embedding-3-large|vector_search\(index=/);
});
