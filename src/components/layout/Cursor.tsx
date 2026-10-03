import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';

/**
 * A cursor companion for fine pointers: a difference-blended ring that trails
 * the pointer, contracts over interactive elements and can print a label from
 * `data-cursor-label`. Elements marked `data-magnetic` lean towards the pointer.
 *
 * Deliberately additive — the native cursor stays visible, so nothing about
 * usability depends on this layer. Touch and reduced-motion users never see it.
 */
export function Cursor() {
  const reduceMotion = useReducedMotion();
  const [enabled] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia?.('(pointer: fine)').matches ?? false;
  });
  const [label, setLabel] = useState('');
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 1400, damping: 60, mass: 0.35 });
  const dotY = useSpring(y, { stiffness: 1400, damping: 60, mass: 0.35 });
  const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.6 });

  const magnet = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const resetMagnet = () => {
      const el = magnet.current;
      if (el) {
        el.style.transform = '';
        magnet.current = null;
      }
    };

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);

      const target = event.target as HTMLElement | null;
      const interactive = target?.closest<HTMLElement>('a, button, [role="button"], input, textarea, [data-cursor]');
      setHovering(Boolean(interactive));
      setLabel(interactive?.dataset.cursorLabel ?? '');

      // Magnetic targets lean towards the pointer, capped at 8px.
      const magnetic = target?.closest<HTMLElement>('[data-magnetic]') ?? null;
      if (magnetic !== magnet.current) {
        resetMagnet();
        magnet.current = magnetic;
      }
      if (magnetic) {
        const rect = magnetic.getBoundingClientRect();
        const dx = Math.max(-8, Math.min(8, (event.clientX - (rect.left + rect.width / 2)) * 0.22));
        const dy = Math.max(-8, Math.min(8, (event.clientY - (rect.top + rect.height / 2)) * 0.22));
        magnetic.style.transform = `translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0)`;
        magnetic.style.transition = 'transform 0.18s cubic-bezier(0.22, 1, 0.36, 1)';
      }
    };

    const onLeave = () => {
      setVisible(false);
      resetMagnet();
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    document.addEventListener('pointerleave', onLeave);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.removeEventListener('pointerleave', onLeave);
      resetMagnet();
    };
  }, [enabled, x, y]);

  if (!enabled || reduceMotion) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[80]" style={{ mixBlendMode: 'difference' }}>
      {/* Trailing ring */}
      <motion.div
        className="absolute top-0 left-0 rounded-full border border-white/70"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: hovering ? 46 : 26,
          height: hovering ? 46 : 26,
          opacity: visible ? (hovering ? 1 : 0.65) : 0,
          scale: pressed ? 0.82 : 1,
        }}
        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
      >
        {label && (
          <span className="absolute top-1/2 left-[130%] -translate-y-1/2 rounded-full border border-white/50 px-2 py-0.5 font-mono text-[9px] whitespace-nowrap text-white uppercase tracking-wider">
            {label}
          </span>
        )}
      </motion.div>

      {/* Precise dot */}
      <motion.div
        className="absolute top-0 left-0 h-1.5 w-1.5 rounded-full bg-white"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: visible ? (hovering ? 0 : 1) : 0, scale: pressed ? 1.6 : 1 }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}
