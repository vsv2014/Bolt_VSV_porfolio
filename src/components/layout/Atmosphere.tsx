import { ShaderBackground } from './ShaderBackground';

/**
 * The atmosphere layer — everything decorative that sits behind the page.
 *
 * A hand-written WebGL aurora (see `ShaderBackground`) when the GPU allows it,
 * otherwise the CSS orb fallback. Either way it is finished with a fading dot
 * grid, a vignette and film grain so the surface never looks flat.
 */
export function Atmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* WebGL aurora — hides itself when unsupported */}
      <ShaderBackground />

      {/* CSS fallback orbs: only rendered when the shader is not active */}
      <div className="css-aurora absolute inset-0">
        <div
          className="animate-aurora absolute -top-[22rem] -left-[14rem] h-[46rem] w-[46rem] rounded-full blur-[140px] will-change-transform"
          style={{ background: 'radial-gradient(circle, #7c5cff 0%, transparent 68%)', opacity: 0.34 }}
        />
        <div
          className="animate-aurora absolute -right-[16rem] top-[6%] h-[40rem] w-[40rem] rounded-full blur-[150px] will-change-transform [animation-delay:-8s]"
          style={{ background: 'radial-gradient(circle, #35e0ff 0%, transparent 68%)', opacity: 0.26 }}
        />
        <div
          className="animate-drift absolute top-[46%] left-1/4 h-[38rem] w-[38rem] rounded-full blur-[150px] will-change-transform"
          style={{ background: 'radial-gradient(circle, #ff4d9d 0%, transparent 70%)', opacity: 0.2 }}
        />
        <div
          className="animate-drift absolute right-[12%] bottom-[4%] h-[26rem] w-[26rem] rounded-full blur-[130px] will-change-transform [animation-delay:-12s]"
          style={{ background: 'radial-gradient(circle, #c8f65d 0%, transparent 70%)', opacity: 0.12 }}
        />
      </div>

      {/* Fading dot grid + vignette */}
      <div className="bg-grid bg-grid-fade absolute inset-0 opacity-70" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 120% 80% at 50% 0%, transparent 38%, color-mix(in oklab, var(--color-bg) 88%, transparent) 100%)',
        }}
      />

      {/* Film grain */}
      <div className="noise absolute inset-0 opacity-[0.05] mix-blend-soft-light light:opacity-[0.028]" />
    </div>
  );
}
