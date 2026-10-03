import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { profile } from '@/data/site';

const KEY = 'vsv:intro-seen';
const DURATION = 1150;

/**
 * A one-time opening sequence: a translucent panel counts up while the name
 * resolves, then lifts away. It is deliberately translucent so the hero is
 * still the LCP element, and it never runs twice in a session, for reduced
 * motion, or when storage is unavailable.
 */
export function Intro() {
  const reduceMotion = useReducedMotion();
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    try {
      if (sessionStorage.getItem(KEY) === '1') return;
    } catch {
      return;
    }

    // State changes are scheduled (never synchronous in the effect body).
    let frame = 0;
    let elapsed = 0;
    let previous = performance.now();

    const mount = window.setTimeout(() => setShow(true), 0);

    const tick = (now: number) => {
      elapsed += now - previous;
      previous = now;
      const ratio = Math.min(1, elapsed / DURATION);
      setProgress(Math.round(ratio * 100));

      if (ratio < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        try {
          sessionStorage.setItem(KEY, '1');
        } catch {
          /* ignore */
        }
        window.setTimeout(() => setShow(false), 120);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => {
      window.clearTimeout(mount);
      cancelAnimationFrame(frame);
    };
  }, [reduceMotion]);

  // Lock scrolling for the (short) duration of the sequence.
  useEffect(() => {
    if (!show) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="presentation"
          aria-hidden
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-bg/72 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(14px)' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="noise pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-soft-light" />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="px-6 text-center font-display text-2xl font-semibold tracking-tight text-fg sm:text-4xl"
          >
            {profile.shortName}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-brand-lime"
          >
            {profile.role.split('·')[0]?.trim()}
          </motion.p>

          <div className="mt-8 h-px w-56 overflow-hidden bg-line sm:w-72">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-purple via-brand-pink to-brand-lime"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-3 font-mono text-[11px] tabular-nums text-faint">
            {String(progress).padStart(3, '0')}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
