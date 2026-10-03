import type { ReactNode } from 'react';
import { motion } from 'motion/react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Cinematic blur-in (default) or a plain rise. */
  variant?: 'blur' | 'rise';
}

/**
 * Scroll reveal. The default is a cinematic blur-and-rise with a soft
 * overshoot-free easing; reduced-motion users get the content instantly
 * (MotionConfig at the app root handles that).
 */
export function Reveal({ children, className, delay = 0, variant = 'blur' }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={variant === 'blur' ? { opacity: 0, y: 22, filter: 'blur(10px)' } : { opacity: 0, y: 16 }}
      whileInView={variant === 'blur' ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
