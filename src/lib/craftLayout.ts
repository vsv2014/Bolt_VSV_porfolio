/**
 * Pure, deterministic layout helpers for the lightweight portfolio graph.
 * Wrapping at the available width keeps node labels readable on narrow screens.
 */
export const NODE_W = 178;
export const NODE_H = 58;
export const PAD = 14;
export const GAP_X = 62;
export const GAP_Y = 22;

interface PositionedNode { id: string; x: number; y: number }
interface Connection { from: string; to: string }

export const columnsFor = (width: number) =>
  Math.max(1, Math.floor((Math.max(width, NODE_W + PAD * 2) - PAD * 2 + GAP_X) / (NODE_W + GAP_X)));

export const canvasHeight = (nodeCount: number, width: number) =>
  Math.max(380, PAD * 2 + Math.ceil(nodeCount / columnsFor(width)) * (NODE_H + GAP_Y));

export function autoLayout<T extends PositionedNode>(nodes: T[], edges: Connection[], width: number): T[] {
  if (nodes.length === 0) return nodes;
  const depth = new Map<string, number>(nodes.map((node) => [node.id, 0]));
  for (let pass = 0; pass < nodes.length; pass += 1) {
    let changed = false;
    for (const edge of edges) {
      const from = depth.get(edge.from) ?? 0;
      const to = depth.get(edge.to) ?? 0;
      if (from + 1 > to && from + 1 < nodes.length) {
        depth.set(edge.to, from + 1);
        changed = true;
      }
    }
    if (!changed) break;
  }

  const columns = columnsFor(width);
  const ordered = nodes.map((node, index) => ({ node, index }))
    .sort((a, b) => (depth.get(a.node.id) ?? 0) - (depth.get(b.node.id) ?? 0) || a.index - b.index);
  const positions = new Map<string, { x: number; y: number }>(
    ordered.map(({ node }, index) => [
      node.id,
      { x: PAD + (index % columns) * (NODE_W + GAP_X), y: PAD + Math.floor(index / columns) * (NODE_H + GAP_Y) },
    ]),
  );
  return nodes.map((node) => ({ ...node, ...positions.get(node.id)! }));
}
