/**
 * The atmosphere layer: film grain, drifting aurora orbs, a fading grid and a
 * vignette. Purely decorative, fixed behind the content, and switched off for
 * reduced-motion users (the grain and vignette stay — they are static).
 */
export function Atmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Aurora orbs */}
      <div
        className="animate-aurora absolute -top-[22rem] -left-[14rem] h-[46rem] w-[46rem] rounded-full blur-[140px] will-change-transform"
        style={{ background: 'radial-gradient(circle, #7c5cff 0%, transparent 68%)', opacity: 0.34 }}
      />
      <div
        className="animate-aurora absolute -right-[16rem] top-[6%] h-[40rem] w-[40rem] rounded-full blur-[150px] will-change-transform [animation-delay:-8s]"
        style={{ background: 'radial-gradient(circle, #35e0ff 0%, transparent 68%)', opacity: 0.26 }}
      />
      <div
        className="animate-drift absolute left-1/4 top-[46%] h-[38rem] w-[38rem] rounded-full blur-[150px] will-change-transform"
        style={{ background: 'radial-gradient(circle, #ff4d9d 0%, transparent 70%)', opacity: 0.2 }}
      />
      <div
        className="animate-drift absolute bottom-[4%] right-[12%] h-[26rem] w-[26rem] rounded-full blur-[130px] will-change-transform [animation-delay:-12s]"
        style={{ background: 'radial-gradient(circle, #c8f65d 0%, transparent 70%)', opacity: 0.12 }}
      />

      {/* Fading dot grid + vignette */}
      <div className="bg-grid bg-grid-fade absolute inset-0 opacity-70" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 120% 80% at 50% 0%, transparent 40%, color-mix(in oklab, var(--color-bg) 85%, transparent) 100%)' }}
      />

      {/* Film grain */}
      <div className="noise absolute inset-0 opacity-[0.05] mix-blend-soft-light light:opacity-[0.028]" />
    </div>
  );
}
