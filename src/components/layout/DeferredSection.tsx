import { Suspense, useEffect, useRef, useState, type ReactNode } from 'react';
import { SectionErrorBoundary } from './SectionErrorBoundary';

/**
 * React.lazy code-splits files, but does not defer fetching when all lazy
 * components are rendered eagerly. Keep an anchor for navigation while the
 * section is unloaded, then load it as the user approaches. Preserve deep links.
 */
export function DeferredSection({ id, children }: { id: string; children: ReactNode }) {
  const host = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(() =>
    typeof window !== 'undefined' && window.location.hash === `#${id}`,
  );

  useEffect(() => {
    if (ready) return;
    const element = host.current;
    if (!element) return;

    const show = () => setReady(true);
    const onHashChange = () => {
      if (window.location.hash === `#${id}`) show();
    };
    window.addEventListener('hashchange', onHashChange);

    if (!('IntersectionObserver' in window)) {
      const raf = requestAnimationFrame(show);
      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('hashchange', onHashChange);
      };
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) show();
    }, { rootMargin: '900px 0px' });
    observer.observe(element);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', onHashChange);
    };
  }, [id, ready]);

  return (
    <div ref={host} id={ready ? undefined : id} data-testid={`deferred-${id}`}>
      {ready ? (
        <SectionErrorBoundary>
          <Suspense fallback={<div className="mx-auto h-52 max-w-5xl animate-pulse rounded-xl bg-surface" aria-label="Loading portfolio section" />}>
            {children}
          </Suspense>
        </SectionErrorBoundary>
      ) : (
        <div className="mx-auto min-h-52 max-w-5xl px-6 py-16 sm:px-8" aria-hidden="true">
          <div className="h-20 rounded-xl border border-line bg-surface/40" />
        </div>
      )}
    </div>
  );
}
