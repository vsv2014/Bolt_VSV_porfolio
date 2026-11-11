import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

function* sourceFiles(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) yield* sourceFiles(path);
    else if (/\.(?:ts|tsx|js|jsx|html|md)$/.test(entry.name)) yield path;
  }
}

// Guard the tracked application and legacy source trees, not historical Git objects.
// This does not guarantee removal from prior commits, search engine caches or PDFs.
test('phone numbers are not embedded in publicly shipped source code', () => {
  for (const directory of ['src', 'project/src']) {
    for (const path of sourceFiles(directory)) {
      const text = readFileSync(path, 'utf8');
      assert.doesNotMatch(text, /tel:\s*\+?\d{10,}/i, `Direct phone link in ${path}`);
      assert.doesNotMatch(text, /\+91(?:[\s().-]*\d){10}\b/, `Public personal phone number in ${path}`);
    }
  }
});

test('contact requires a human-reviewed request instead of public reveal', () => {
  const site = readFileSync('src/data/site.ts', 'utf8');
  const agent = readFileSync('src/data/agent.ts', 'utf8');
  assert.match(site, /label: 'Request phone \/ WhatsApp'/);
  assert.match(site, /Shared privately after approval/);
  assert.match(site, /mailto:\$\{EMAIL\}/);
  assert.match(agent, /Santhosh will decide whether to share it privately/);
});
