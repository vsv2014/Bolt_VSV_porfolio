import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(path, 'utf8');
const origin = 'https://santhoshvishal.vercel.app';
const slugs = ['react-flow-editor', 'virtualized-10000-rows', 'honest-ai-console'];

test('RSS feed has correct canonical notes, one item per article and no legacy URLs', () => {
  const feed = read('public/feed.xml');
  assert.match(feed, /<rss version="2\.0"/);
  assert.match(feed, /xmlns:atom="http:\/\/www\.w3\.org\/2005\/Atom"/);
  assert.match(feed, /<channel>/);
  assert.match(feed, /<title>Santhosh Vishal — Engineering Notes<\/title>/);
  assert.equal((feed.match(/<item>/g) ?? []).length, slugs.length);
  assert.doesNotMatch(feed, /github\.io|aurora-vsv-portfolio/);
  for (const slug of slugs) {
    const url = `${origin}/notes/${slug}.html`;
    assert.ok(feed.includes(`<link>${url}</link>`), `missing RSS link to ${slug}`);
    assert.ok(feed.includes(`<guid isPermaLink="true">${url}</guid>`), `missing unique GUID for ${slug}`);
  }
});

test('homepage and each standalone article advertise the public feed', () => {
  const paths = ['index.html', ...slugs.map((slug) => `public/notes/${slug}.html`)];
  for (const path of paths) {
    const html = read(path);
    assert.ok(html.includes('type="application/rss+xml"'), `no feed discovery in ${path}`);
    assert.ok(html.includes('href="/feed.xml"'), `wrong feed path in ${path}`);
  }
  assert.ok(read('src/components/sections/EngineeringNotes.tsx').includes('Subscribe to RSS'));
  assert.ok(read('README.md').includes(`${origin}/feed.xml`));
});
