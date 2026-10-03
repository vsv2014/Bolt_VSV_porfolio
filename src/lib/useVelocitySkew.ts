import { useScroll, useSpring, useTransform, useVelocity } from 'motion/react';

/**
 * Skews an element in proportion to scroll velocity — the "weight" trick that
 * makes a fast scroll feel physical. Capped at ±max degrees, spring-damped, and
 * it settles back to flat the moment the page stops moving.
 */
export function useVelocitySkew(max = 3.2) {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { stiffness: 320, damping: 44, mass: 0.5 });

  return useTransform(smooth, [-2500, 0, 2500], [max, 0, -max], { clamp: true });
}
