import { useEffect, useState } from 'react';
import { Container } from '@/components/ui';
import { profile, socials } from '@/data/site';

/** Live local time in Hyderabad — a small, human detail. */
function LocalClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata',
      }).format(new Date());

    // Schedule the first tick asynchronously so the effect body stays side-effect free.
    const initial = window.setTimeout(() => setTime(format()), 0);
    const timer = window.setInterval(() => setTime(format()), 20_000);
    return () => {
      window.clearTimeout(initial);
      window.clearInterval(timer);
    };
  }, []);

  return (
    <span className="font-mono text-[11px] text-faint tabular-nums">
      {time || '--:--'} IST · Hyderabad
    </span>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      {/* Marquee wordmark */}
      <div className="overflow-hidden border-b border-line py-6" aria-hidden>
        <div className="animate-marquee-reverse flex w-max items-center">
          {Array.from({ length: 8 }, (_, index) => (
            <span key={index} className="flex items-center">
              <span className="px-6 font-display text-3xl font-bold tracking-tight whitespace-nowrap text-faint/35 sm:text-4xl">
                {profile.shortName}
              </span>
              <span className="text-brand-lime/40">✦</span>
            </span>
          ))}
        </div>
      </div>

      <Container className="flex flex-col gap-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight text-fg">
              Let’s build something people remember.
            </p>
            <p className="mt-1 text-sm text-muted">
              <a href={`mailto:${profile.email}`} className="underline decoration-line-strong underline-offset-4 transition-colors hover:text-fg">
                {profile.email}
              </a>
            </p>
          </div>

          <ul className="flex items-center gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-faint transition-colors hover:text-fg"
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hairline" aria-hidden />

        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] text-faint">
            © {new Date().getFullYear()} {profile.shortName}
          </p>
          <LocalClock />
          <p className="font-mono text-[11px] text-faint">React 19 · Tailwind v4 · Motion · hand-built UI</p>
        </div>
      </Container>
    </footer>
  );
}
