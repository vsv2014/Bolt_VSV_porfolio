import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface SplitWordsProps {
  text: string;
  className?: string;
  /** Per-word classes (index-aware) for accent words. */
  wordClassName?: (word: string, index: number) => string | undefined;
  delay?: number;
  /** Animate on mount instead of on scroll (used in the hero). */
  immediate?: boolean;
}

/**
 * Word-by-word clip reveal: each word sits in an overflow-hidden box and rises
 * into place. Cheap (transform + opacity only) and fully skipped under
 * reduced motion by the app-level MotionConfig.
 */
export function SplitWords({ text, className, wordClassName, delay = 0, immediate }: SplitWordsProps) {
  const words = text.split(' ');

  return (
    <span className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className={cn('inline-block', wordClassName?.(word, index))}
            initial={{ y: '110%', opacity: 0 }}
            {...(immediate
              ? { animate: { y: '0%', opacity: 1 } }
              : { whileInView: { y: '0%', opacity: 1 }, viewport: { once: true, margin: '0px 0px -10% 0px' } })}
            transition={{ duration: 0.85, delay: delay + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
          {index < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
