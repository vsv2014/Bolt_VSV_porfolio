import { useEffect, useRef, useState } from 'react';
import { Gauge, Keyboard, Sparkles, Waves } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

interface Metrics {
  lcp: number | null;
  cls: number;
  longTasks: number;
  fps: number;
}

/** Live Core-Web-Vitals-ish readout for the page you are actually looking at. */
export function PerfPanel() {
  const reduceMotion = useReducedMotion();
  const [metrics, setMetrics] = useState<Metrics>({ lcp: null, cls: 0, longTasks: 0, fps: 0 });
  const frames = useRef(0);
  const last = useRef(0);

  useEffect(() => {
    if (typeof PerformanceObserver === 'undefined') return;
    const observers: PerformanceObserver[] = [];

    const safeObserve = (type: string, callback: (entries: PerformanceEntryList) => void) => {
      try {
        const observer = new PerformanceObserver((list) => callback(list.getEntries()));
        observer.observe({ type, buffered: true } as PerformanceObserverInit);
        observers.push(observer);
      } catch {
        /* unsupported entry type — skip silently */
      }
    };

    safeObserve('largest-contentful-paint', (entries) => {
      const entry = entries.at(-1) as (PerformanceEntry & { renderTime?: number; loadTime?: number }) | undefined;
      if (entry) setMetrics((current) => ({ ...current, lcp: Math.round(entry.renderTime || entry.loadTime || entry.startTime) }));
    });
    safeObserve('layout-shift', (entries) => {
      const shift = entries.reduce((total, entry) => {
        const typed = entry as PerformanceEntry & { value: number; hadRecentInput: boolean };
        return typed.hadRecentInput ? total : total + typed.value;
      }, 0);
      if (shift) setMetrics((current) => ({ ...current, cls: Number((current.cls + shift).toFixed(4)) }));
    });
    safeObserve('longtask', (entries) => {
      if (entries.length) setMetrics((current) => ({ ...current, longTasks: current.longTasks + entries.length }));
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  // Frame meter — sampled twice a second.
  useEffect(() => {
    let frame = 0;
    const tick = (now: number) => {
      frames.current += 1;
      if (last.current && now - last.current >= 500) {
        const fps = Math.round((frames.current * 1000) / (now - last.current));
        setMetrics((current) => (current.fps === fps ? current : { ...current, fps }));
        frames.current = 0;
        last.current = now;
      } else if (!last.current) {
        last.current = now;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const vitals = [
    { label: 'LCP', value: metrics.lcp ? `${metrics.lcp} ms` : '—', good: (metrics.lcp ?? 2500) <= 2500 },
    { label: 'CLS', value: metrics.cls ? metrics.cls.toFixed(3) : '0.000', good: metrics.cls <= 0.1 },
    { label: 'Long tasks', value: String(metrics.longTasks), good: metrics.longTasks <= 5 },
    { label: 'FPS', value: metrics.fps ? String(metrics.fps) : '—', good: metrics.fps === 0 || metrics.fps >= 50 },
  ];

  const craft = [
    { icon: Keyboard, label: 'Keyboard first', detail: 'Every control reachable, visible focus rings, ⌘K palette, arrow-key node editing.' },
    { icon: Waves, label: 'Reduced motion', detail: 'Typewriter, marquee, aurora, counters and the WebGL background all stand down when the OS asks.' },
    { icon: Sparkles, label: 'Theme system', detail: 'One token layer flips both themes; the choice is applied pre-paint, no flash.' },
    { icon: Gauge, label: 'Budget', detail: 'Entry ~156 kB gzip JS + 14 kB CSS, no UI kit, five lazily-loaded sections, icons tree-shaken per import.' },
  ];

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <Gauge className="h-3.5 w-3.5 text-brand-cyan" />
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">performance-observer · live</p>
        <span
          className={cn(
            'ml-auto font-mono text-[10px]',
            reduceMotion ? 'text-brand-amber' : 'text-brand-lime',
          )}
        >
          reduced-motion {reduceMotion ? 'on' : 'off'}
        </span>
      </div>

      <dl className="grid grid-cols-4 gap-px bg-line">
        {vitals.map((vital) => (
          <div key={vital.label} className="bg-bg px-3 py-3">
            <dt className="font-mono text-[9px] uppercase tracking-wider text-faint">{vital.label}</dt>
            <dd className={cn('mt-1 font-display text-sm', vital.good ? 'text-fg' : 'text-brand-amber')}>{vital.value}</dd>
          </div>
        ))}
      </dl>

      <ul className="flex-1 divide-y divide-line">
        {craft.map((item) => (
          <li key={item.label} className="flex gap-3 px-4 py-3">
            <item.icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-purple" strokeWidth={1.75} />
            <span className="min-w-0">
              <span className="block text-[12px] font-medium text-fg">{item.label}</span>
              <span className="mt-0.5 block text-[11px] leading-relaxed text-muted">{item.detail}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
