import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

test('GitHub Pages is a noindex redirect to the canonical Vercel site', () => {
  const landing = readFileSync('docs/index.html', 'utf8');
  const missing = readFileSync('docs/404.html', 'utf8');
  assert.match(landing, /noindex, nofollow/);
  assert.match(landing, /https:\/\/santhoshvishal\.vercel\.app\//);
  assert.match(landing, /location\.replace/);
  assert.match(missing, /location\.pathname\.replace/);
  assert.match(missing, /https:\/\/santhoshvishal\.vercel\.app/);
  assert.equal(existsSync('.github/workflows/publish-pages.yml'), false,
    'No workflow should make repeated build-output commits to main');
  assert.equal(existsSync('docs/assets'), false,
    'Do not preserve outdated duplicated JS bundles or personal PDFs on the mirror');
});
