import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'motion/react';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/\\<>*#';

interface ScrambleProps {
  text: string;
  className?: string;
  /** Milliseconds between character reveals. */
  speed?: number;
}

/**
 * Decodes text on scroll into view: unresolved characters flicker through
 * glyphs, then settle. Mono-only by design — it reads as terminal output
 * rather than a gimmick.
 */
export function Scramble({ text, className, speed = 42 }: ScrambleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduceMotion = useReducedMotion();
  const [output, setOutput] = useState(reduceMotion ? text : '');

  useEffect(() => {
    if (!inView || reduceMotion) return;

    let frame = 0;
    let revealed = 0;
    let lastGlyphSwap = 0;

    const run = (now: number) => {
      if (now - lastGlyphSwap > 32 || revealed === 0) {
        lastGlyphSwap = now;
        revealed = Math.min(text.length, revealed + 1);
        const settled = text.slice(0, revealed);
        const noise = Array.from({ length: Math.max(0, text.length - revealed) }, () => {
          const char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          return text.includes(' ') && Math.random() > 0.8 ? ' ' : char;
        }).join('');
        setOutput(settled + noise);
      }
      if (revealed < text.length) frame = requestAnimationFrame(run);
      else setOutput(text);
    };

    frame = requestAnimationFrame(run);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, text, speed]);

  return (
    <span ref={ref} className={className}>
      {output || text}
    </span>
  );
}
