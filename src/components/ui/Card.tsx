import type { ReactNode } from 'react';
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  /** Pointer-tracked 3D tilt + spotlight. Skipped for coarse pointers and reduced motion. */
  tilt?: boolean;
}

export function Card({ children, className, interactive, tilt }: CardProps) {
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), { stiffness: 220, damping: 24 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 220, damping: 24 });
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(0);
  const glare = useMotionTemplate`radial-gradient(320px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.07), transparent 60%)`;

  const enabled = Boolean(tilt) && !reduceMotion;

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!enabled || event.pointerType === 'touch') return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 7);
    rotateX.set((0.5 - py) * 7);
    glareX.set(px * 100);
    glareY.set(py * 100);
  }

  function onPointerLeave() {
    if (!enabled) return;
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={enabled ? { rotateX, rotateY, transformPerspective: 900 } : undefined}
      className={cn(
        'relative rounded-xl border border-line bg-surface p-6 transition-colors duration-300',
        interactive && 'hover:border-line-strong hover:bg-surface-hover',
        className,
      )}
    >
      {enabled && <motion.span aria-hidden style={{ background: glare }} className="pointer-events-none absolute inset-0 rounded-xl" />}
      <div className="relative">{children}</div>
    </motion.div>
  );
}
