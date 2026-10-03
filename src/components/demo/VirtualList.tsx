import { useEffect, useMemo, useRef, useState } from 'react';
import { ListTree } from 'lucide-react';

const ROW_H = 30;
const VIEWPORT = 260;
const TOTAL = 10_000;
const OVERSCAN = 6;

/**
 * Windowing over 10,000 rows: only the visible slice is ever in the DOM.
 * Scroll updates are flushed on requestAnimationFrame so a 10k-row list
 * never blocks the main thread.
 */
export function VirtualList() {
  const [scrollTop, setScrollTop] = useState(0);
  const frame = useRef(0);
  const pending = useRef(0);

  const rows = useMemo(
    () =>
      Array.from({ length: TOTAL }, (_, index) => ({
        id: index + 1,
        tenant: `tenant-${String(index + 1).padStart(4, '0')}`,
        agents: 4 + ((index * 37) % 380),
        latency: 42 + ((index * 13) % 160),
        state: (index * 7) % 11 === 0 ? 'degraded' : 'healthy',
      })),
    [],
  );

  const start = Math.max(0, Math.floor(scrollTop / ROW_H) - OVERSCAN);
  const end = Math.min(TOTAL, start + Math.ceil(VIEWPORT / ROW_H) + OVERSCAN * 2);
  const visible = rows.slice(start, end);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const onScroll = (event: React.UIEvent<HTMLDivElement>) => {
    pending.current = event.currentTarget.scrollTop;
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      setScrollTop(pending.current);
    });
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <ListTree className="h-3.5 w-3.5 text-brand-cyan" />
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">virtualised table</p>
        <span className="ml-auto font-mono text-[10px] text-brand-lime">
          {visible.length} / {TOTAL.toLocaleString()} rows in DOM
        </span>
      </div>

      <div className="grid grid-cols-[1fr_auto_auto] gap-x-4 border-b border-line px-4 py-2 font-mono text-[9px] uppercase tracking-wider text-faint">
        <span>tenant</span>
        <span>agents</span>
        <span>p95</span>
      </div>

      <div
        onScroll={onScroll}
        className="scrollbar-thin relative flex-1 overflow-y-auto"
        style={{ height: VIEWPORT }}
        role="region"
        aria-label={`Virtualised list of ${TOTAL.toLocaleString()} tenants`}
      >
        <div style={{ height: TOTAL * ROW_H, position: 'relative' }}>
          <div style={{ transform: `translateY(${start * ROW_H}px)` }}>
            {visible.map((row) => (
              <div
                key={row.id}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4 border-b border-line/50 px-4 font-mono text-[11px] text-muted"
                style={{ height: ROW_H }}
              >
                <span className="flex items-center gap-2 truncate">
                  <span
                    className={row.state === 'degraded' ? 'h-1.5 w-1.5 rounded-full bg-brand-amber' : 'h-1.5 w-1.5 rounded-full bg-brand-lime'}
                    aria-hidden
                  />
                  {row.tenant}
                </span>
                <span className="text-fg">{row.agents}</span>
                <span className={row.latency > 180 ? 'text-brand-pink' : 'text-faint'}>{row.latency} ms</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="border-t border-line px-4 py-2.5 font-mono text-[10px] text-faint">
        scroll it — rAF-batched updates, fixed row height, no layout thrash
      </p>
    </div>
  );
}
