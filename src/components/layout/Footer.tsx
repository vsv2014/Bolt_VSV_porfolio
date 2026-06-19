import { Container } from '@/components/ui';
import { profile, socials } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} {profile.shortName}
        </p>
        <p className="text-xs text-faint">Designed & built with React, Tailwind&nbsp;CSS and Motion.</p>
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
      </Container>
    </footer>
  );
}
