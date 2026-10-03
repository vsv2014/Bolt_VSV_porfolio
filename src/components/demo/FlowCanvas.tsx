import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { LayoutGrid, MousePointer2, Plus, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

/* ------------------------------------------------------------------ *
 * A miniature node-graph editor — the interaction model behind the
 * workflow canvases I build at work (Monaco/ELK/ReteJS in production),
 * hand-rolled here with pointer events + SVG so it ships in ~6 kB.
 * ------------------------------------------------------------------ */

const NODE_W = 178;
const NODE_H = 58;
const PAD = 14;
const GAP_X = 62;
const GAP_Y = 22;

type Kind = 'llm' | 'tool' | 'api' | 'human' | 'loop';

interface GraphNode {
  id: string;
  label: string;
  kind: Kind;
  x: number;
  y: number;
}

interface GraphEdge {
  id: string;
  from: string;
  to: string;
}

const KINDS: Record<Kind, { accent: string; badge: string; step: number }> = {
  llm: { accent: '#a855f7', badge: 'LLM', step: 0 },
  tool: { accent: '#a3e635', badge: 'TOOL', step: 1 },
  api: { accent: '#22d3ee', badge: 'API', step: 2 },
  human: { accent: '#fbbf24', badge: 'HITL', step: 3 },
  loop: { accent: '#ff0080', badge: 'LOOP', step: 1 },
};

const DEFAULT_W = 640;

const seed = (): { nodes: GraphNode[]; edges: GraphEdge[] } => {
  const nodes: GraphNode[] = [
    { id: 'n1', label: 'Parse intent', kind: 'llm', x: 0, y: 0 },
    { id: 'n2', label: 'Lookup records', kind: 'tool', x: 0, y: 0 },
    { id: 'n3', label: 'Billing API', kind: 'api', x: 0, y: 0 },
    { id: 'n4', label: 'Approve refund', kind: 'human', x: 0, y: 0 },
    { id: 'n5', label: 'Retry policy', kind: 'loop', x: 0, y: 0 },
  ];
  const edges: GraphEdge[] = [
    { id: 'e1', from: 'n1', to: 'n2' },
    { id: 'e2', from: 'n2', to: 'n3' },
    { id: 'e3', from: 'n3', to: 'n4' },
    { id: 'e4', from: 'n4', to: 'n5' },
  ];
  return { nodes, edges };
};

/** Longest-path layering, tolerant of cycles — a tiny stand-in for ELK. */
function autoLayout(nodes: GraphNode[], edges: GraphEdge[], height: number): GraphNode[] {
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

  const layers = new Map<number, GraphNode[]>();
  for (const node of nodes) {
    const layer = depth.get(node.id) ?? 0;
    layers.set(layer, [...(layers.get(layer) ?? []), node]);
  }

  const maxLayer = Math.max(...layers.keys());
  const tallest = Math.max(...[...layers.values()].map((items) => items.length));
  const stride = Math.min(GAP_Y + NODE_H, Math.max(GAP_Y + NODE_H, (height - PAD * 2 - NODE_H) / Math.max(tallest - 1, 1)));

  return nodes.map((node) => {
    const layer = depth.get(node.id) ?? 0;
    const column = layers.get(layer) ?? [];
    const row = column.findIndex((item) => item.id === node.id);
    const offset = (Math.max(...[...layers.values()].map((items) => items.length)) - column.length) / 2;
    return {
      ...node,
      x: PAD + Math.min(layer, maxLayer) * (NODE_W + GAP_X),
      y: Math.max(PAD, PAD + (row + offset) * stride),
    };
  });
}

export function FlowCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(372);
  const [graph, setGraph] = useState(() => {
    const base = seed();
    return { nodes: autoLayout(base.nodes, base.edges, 372), edges: base.edges };
  });
  const [connecting, setConnecting] = useState<string | null>(null);
  /** Keyboard-only connection: pick an output, then activate an input. */
  const [keyboardSource, setKeyboardSource] = useState<string | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const dragRef = useRef<{ id: string; offsetX: number; offsetY: number } | null>(null);
  const counter = useRef(100);

  const nodeById = useMemo(() => new Map(graph.nodes.map((node) => [node.id, node])), [graph.nodes]);

  const toLocal = useCallback((clientX: number, clientY: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    return { x: clientX - (rect?.left ?? 0), y: clientY - (rect?.top ?? 0) };
  }, []);

  const addEdge = useCallback((from: string, to: string) => {
    if (!from || !to || from === to) return;
    setGraph((current) => {
      if (current.edges.some((edge) => edge.from === from && edge.to === to)) return current;
      counter.current += 1;
      return { ...current, edges: [...current.edges, { id: `e${counter.current}`, from, to }] };
    });
  }, []);

  /* ---- dragging ---- */
  const onNodePointerDown = (event: React.PointerEvent<HTMLDivElement>, node: GraphNode) => {
    if (event.button !== 0) return;
    event.stopPropagation();
    const { x, y } = toLocal(event.clientX, event.clientY);
    dragRef.current = { id: node.id, offsetX: x - node.x, offsetY: y - node.y };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onNodePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    const { x, y } = toLocal(event.clientX, event.clientY);
    const width = containerRef.current?.clientWidth || DEFAULT_W;
    const maxX = Math.max(PAD, width - NODE_W - PAD);
    const maxY = Math.max(PAD, height - NODE_H - PAD);
    const nextX = Math.max(PAD, Math.min(maxX, x - drag.offsetX));
    const nextY = Math.max(PAD, Math.min(maxY, y - drag.offsetY));
    setGraph((current) => ({
      ...current,
      nodes: current.nodes.map((node) => (node.id === drag.id ? { ...node, x: nextX, y: nextY } : node)),
    }));
  };

  const endDrag = () => {
    dragRef.current = null;
  };

  /* ---- connecting ---- */
  useEffect(() => {
    if (!connecting) return;
    const move = (event: PointerEvent) => setPointer(toLocal(event.clientX, event.clientY));
    const up = (event: PointerEvent) => {
      const el = document.elementFromPoint(event.clientX, event.clientY) as HTMLElement | null;
      const port = el?.closest('[data-port="in"]') as HTMLElement | null;
      const to = port?.dataset.nodeid;
      if (to) addEdge(connecting, to);
      setConnecting(null);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
  }, [connecting, addEdge, toLocal]);

  /* ---- keyboard nudging (a11y) ---- */
  const onNodeKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, node: GraphNode) => {
    const step = event.shiftKey ? 24 : 8;
    const deltas: Record<string, [number, number]> = {
      ArrowLeft: [-step, 0],
      ArrowRight: [step, 0],
      ArrowUp: [0, -step],
      ArrowDown: [0, step],
    };
    const delta = deltas[event.key];
    if (!delta) return;
    event.preventDefault();
    const width = containerRef.current?.clientWidth || DEFAULT_W;
    const maxX = Math.max(PAD, width - NODE_W - PAD);
    const maxY = Math.max(PAD, height - NODE_H - PAD);
    setGraph((current) => ({
      ...current,
      nodes: current.nodes.map((item) =>
        item.id === node.id
          ? {
              ...item,
              x: Math.max(PAD, Math.min(maxX, item.x + delta[0])),
              y: Math.max(PAD, Math.min(maxY, item.y + delta[1])),
            }
          : item,
      ),
    }));
  };

  const port = (node: GraphNode, side: 'in' | 'out') => ({
    x: side === 'out' ? node.x + NODE_W : node.x,
    y: node.y + NODE_H / 2,
  });

  const curve = (x1: number, y1: number, x2: number, y2: number) => {
    const dx = Math.max(34, Math.abs(x2 - x1) / 2);
    return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
  };

  const addNode = (kind: Kind) => {
    counter.current += 1;
    const id = `n${counter.current}`;
    setGraph((current) => {
      const width = containerRef.current?.clientWidth || DEFAULT_W;
      const node: GraphNode = {
        id,
        kind,
        label: `New ${KINDS[kind].badge.toLowerCase()} step`,
        x: PAD + ((current.nodes.length * 37) % Math.max(120, width - NODE_W - PAD * 2)),
        y: PAD + ((current.nodes.length * 29) % Math.max(80, height - NODE_H - PAD * 2)),
      };
      return { ...current, nodes: [...current.nodes, node] };
    });
  };

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    const measure = () => {
      const next = Math.max(300, Math.min(420, element.clientWidth * 0.46));
      setHeight(next);
      setGraph((current) => ({ ...current, nodes: autoLayout(current.nodes, current.edges, next) }));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-wrap items-center gap-2 border-b border-line px-4 py-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">flow-designer.tsx</p>
        <span className="ml-auto flex flex-wrap items-center gap-1.5">
          {(Object.keys(KINDS) as Kind[]).map((kind) => (
            <button
              key={kind}
              type="button"
              onClick={() => addNode(kind)}
              className="inline-flex items-center gap-1 rounded-md border border-line px-2 py-1 font-mono text-[10px] text-muted transition-colors hover:border-line-strong hover:text-fg"
            >
              <Plus className="h-3 w-3" />
              {KINDS[kind].badge}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setGraph((current) => ({ ...current, nodes: autoLayout(current.nodes, current.edges, height) }))}
            className="inline-flex items-center gap-1 rounded-md border border-line px-2 py-1 font-mono text-[10px] text-muted transition-colors hover:border-line-strong hover:text-fg"
          >
            <LayoutGrid className="h-3 w-3" /> auto-layout
          </button>
          <button
            type="button"
            onClick={() => {
              const base = seed();
              setGraph({ nodes: autoLayout(base.nodes, base.edges, height), edges: base.edges });
            }}
            className="inline-flex items-center gap-1 rounded-md border border-line px-2 py-1 font-mono text-[10px] text-muted transition-colors hover:border-line-strong hover:text-fg"
          >
            <RotateCcw className="h-3 w-3" /> reset
          </button>
        </span>
      </div>

      <div
        ref={containerRef}
        className="bg-grid relative flex-1 touch-none overflow-hidden"
        style={{ height }}
        onPointerMove={onNodePointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
          {graph.edges.map((edge) => {
            const from = nodeById.get(edge.from);
            const to = nodeById.get(edge.to);
            if (!from || !to) return null;
            const a = port(from, 'out');
            const b = port(to, 'in');
            const d = curve(a.x, a.y, b.x, b.y);
            return (
              <g key={edge.id}>
                <path
                  d={d}
                  fill="none"
                  stroke="var(--color-brand-cyan)"
                  strokeWidth={1.6}
                  strokeOpacity={0.55}
                  strokeDasharray="4 6"
                  className="animate-dash"
                />
                <path
                  d={d}
                  fill="none"
                  stroke="transparent"
                  strokeWidth={16}
                  style={{ pointerEvents: 'stroke', cursor: 'pointer' }}
                  onClick={() => setGraph((current) => ({ ...current, edges: current.edges.filter((item) => item.id !== edge.id) }))}
                />
              </g>
            );
          })}

          {connecting && (() => {
            const from = nodeById.get(connecting);
            if (!from) return null;
            const a = port(from, 'out');
            return <path d={curve(a.x, a.y, pointer.x, pointer.y)} fill="none" stroke="var(--color-brand-purple)" strokeWidth={2} />;
          })()}
        </svg>

        {graph.nodes.map((node) => {
          const kind = KINDS[node.kind];
          const isSource = keyboardSource === node.id;
          return (
            <div
              key={node.id}
              role="group"
              aria-label={`${node.label} node, keyboard arrows move it`}
              tabIndex={0}
              onKeyDown={(event) => onNodeKeyDown(event, node)}
              onPointerDown={(event) => onNodePointerDown(event, node)}
              className={cn(
                'group absolute flex select-none items-center gap-2 rounded-xl border bg-bg/95 px-3 shadow-lg shadow-black/20 transition-[left,top] duration-500 ease-out',
                'cursor-grab active:cursor-grabbing',
                isSource ? 'border-brand-purple' : 'border-line-strong',
                'hover:border-brand-cyan/70 focus-visible:border-brand-cyan',
              )}
              style={{ left: node.x, top: node.y, width: NODE_W, height: NODE_H }}
            >
              <span
                className="h-7 w-1 shrink-0 rounded-full"
                style={{ background: kind.accent }}
                aria-hidden
              />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[12px] font-medium text-fg">{node.label}</span>
                <span className="mt-0.5 block font-mono text-[9px] tracking-wider text-faint">{kind.badge}</span>
              </span>

              <button
                type="button"
                aria-label={`Delete ${node.label}`}
                onClick={(event) => {
                  event.stopPropagation();
                  setGraph((current) => ({
                    nodes: current.nodes.filter((item) => item.id !== node.id),
                    edges: current.edges.filter((edge) => edge.from !== node.id && edge.to !== node.id),
                  }));
                }}
                className="absolute -top-2 -right-2 hidden h-5 w-5 items-center justify-center rounded-full border border-line bg-bg text-[11px] leading-none text-faint transition-colors hover:text-fg group-hover:flex"
              >
                ×
              </button>

              <button
                type="button"
                data-port="in"
                data-nodeid={node.id}
                aria-label={`Connect into ${node.label}`}
                onPointerUp={(event) => {
                  event.stopPropagation();
                  if (keyboardSource) {
                    addEdge(keyboardSource, node.id);
                    setKeyboardSource(null);
                  }
                }}
                onClick={() => {
                  if (keyboardSource) addEdge(keyboardSource, node.id);
                  setKeyboardSource(null);
                }}
                className="absolute top-1/2 -left-[7px] h-3.5 w-3.5 -translate-y-1/2 rounded-full border border-brand-cyan/70 bg-bg transition-transform hover:scale-125"
              />

              <button
                type="button"
                aria-label={`Start connection from ${node.label}`}
                onPointerDown={(event) => {
                  event.stopPropagation();
                  setPointer(toLocal(event.clientX, event.clientY));
                  setConnecting(node.id);
                }}
                onClick={() => setKeyboardSource((current) => (current === node.id ? null : node.id))}
                className="absolute top-1/2 -right-[7px] h-3.5 w-3.5 -translate-y-1/2 rounded-full border border-brand-purple/80 bg-bg transition-transform hover:scale-125"
              />
            </div>
          );
        })}
      </div>

      <p className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-line px-4 py-2.5 font-mono text-[10px] text-faint">
        <span className="inline-flex items-center gap-1.5">
          <MousePointer2 className="h-3 w-3" /> drag nodes · pull a port to connect · click an edge to cut
        </span>
        <span>arrow keys nudge · tab to a port and press enter to link</span>
        <span className="ml-auto text-brand-cyan">{graph.nodes.length} nodes · {graph.edges.length} edges</span>
      </p>
    </div>
  );
}
