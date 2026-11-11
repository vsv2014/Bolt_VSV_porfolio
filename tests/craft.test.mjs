import test from 'node:test';
import assert from 'node:assert/strict';
import { autoLayout, canvasHeight, columnsFor, NODE_W, NODE_H, PAD } from '../src/lib/craftLayout.ts';
import { visibleRange } from '../src/lib/virtualWindow.ts';

const nodes = ['a','b','c','d','e'].map((id) => ({ id, x: 0, y: 0 }));
const edges = [
  { from: 'a', to: 'b' }, { from: 'b', to: 'c' },
  { from: 'c', to: 'd' }, { from: 'd', to: 'e' },
];

test('initial graph fits the two-column 558px canvas', () => {
  assert.equal(columnsFor(558), 2);
  const layout = autoLayout(nodes, edges, 558);
  for (const node of layout) {
    assert.ok(node.x >= PAD && node.x + NODE_W + PAD <= 558);
    assert.ok(node.y >= PAD && node.y + NODE_H <= canvasHeight(nodes.length, 558));
  }
  for (let i = 0; i < layout.length; i++) for (let j = i + 1; j < layout.length; j++) {
    assert.ok(Math.abs(layout[i].x - layout[j].x) >= NODE_W ||
              Math.abs(layout[i].y - layout[j].y) >= NODE_H, 'overlapping nodes');
  }
});

test('narrow mobile canvas wraps to a single column', () => {
  assert.equal(columnsFor(320), 1);
  const layout = autoLayout(nodes, edges, 320);
  assert.ok(layout.every((node) => node.x === PAD));
  assert.ok(layout.at(-1).y + NODE_H < canvasHeight(5, 320));
});

test('layout is deterministic and cycle-safe', () => {
  const cycle = [...edges, { from: 'e', to: 'a' }];
  const a = autoLayout(nodes, cycle, 558);
  assert.deepEqual(a, autoLayout(nodes, cycle, 558));
  assert.ok(a.every((node) => Number.isFinite(node.x) && Number.isFinite(node.y)));
  assert.deepEqual(autoLayout([], edges, 558), []);
});

test('virtual window starts with only visible rows plus overscan', () => {
  assert.deepEqual(visibleRange(0, 260, 10_000, 30, 6), { start: 0, end: 15 });
});

test('virtual window shifts with the real container height', () => {
  assert.deepEqual(visibleRange(0, 600, 10_000, 30, 6), { start: 0, end: 26 });
  assert.deepEqual(visibleRange(3000, 260, 10_000, 30, 6), { start: 94, end: 115 });
});

test('virtual window reaches final row without overflowing total', () => {
  const range = visibleRange(1_000_000, 260, 10_000, 30, 6);
  assert.equal(range.end, 10_000);
  assert.ok(range.start < range.end);
  assert.deepEqual(visibleRange(0, 260, 0, 30, 6), { start: 0, end: 0 });
});
