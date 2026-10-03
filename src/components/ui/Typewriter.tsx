import { useEffect, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  phrases: string[];
  className?: string;
  typeMs?: number;
  eraseMs?: number;
  holdMs?: number;
}

/**
 * Types, holds, erases and moves to the next phrase.
 * Renders the first phrase statically when the visitor prefers reduced motion.
 */
export function Typewriter({ phrases, className, typeMs = 52, eraseMs = 24, holdMs = 1900 }: TypewriterProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [mode, setMode] = useState<'typing' | 'erasing'>('typing');

  const phrase = phrases[index % phrases.length];

  useEffect(() => {
    if (reduceMotion || phrases.length === 0) return;

    // Every branch schedules its transition asynchronously, so no setState runs
    // synchronously inside the effect body.
    let delay: number;
    let advance: () => void;

    if (mode === 'typing' && length === phrase.length) {
      delay = holdMs;
      advance = () => setMode('erasing');
    } else if (mode === 'erasing' && length === 0) {
      delay = typeMs;
      advance = () => {
        setIndex((value) => (value + 1) % phrases.length);
        setMode('typing');
      };
    } else {
      delay = mode === 'typing' ? typeMs : eraseMs;
      advance = () => setLength((value) => value + (mode === 'typing' ? 1 : -1));
    }

    const timer = setTimeout(advance, delay);
    return () => clearTimeout(timer);
  }, [mode, length, phrase, phrases.length, reduceMotion, typeMs, eraseMs, holdMs]);

  const text = reduceMotion ? phrases[0] : phrase.slice(0, length);

  return (
    <span className={className}>
      {text}
      <span
        aria-hidden
        className={cn('ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.12em] animate-blink bg-brand-cyan', reduceMotion && 'animate-none')}
      />
    </span>
  );
}
