import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'motion/react';

interface CountUpProps {
  /** Final value. */
  to: number;
  prefix?: string;
  suffix?: string;
  /** Animation duration in seconds. */
  duration?: number;
  /** BCP-47 locale used for digit grouping. */
  locale?: string;
  className?: string;
}

/**
 * Counts from 0 to `to` the first time it scrolls into view.
 * Falls back to the final value instantly when reduced motion is requested.
 */
export function CountUp({ to, prefix = '', suffix = '', duration = 1.5, locale = 'en-US', className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(progress < 1 ? to * eased : to);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, to, duration]);

  const display = reduceMotion ? to : Math.round(value);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString(locale)}
      {suffix}
    </span>
  );
}
