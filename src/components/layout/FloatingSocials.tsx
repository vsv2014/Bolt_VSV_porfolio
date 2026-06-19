import { socials } from '@/data/site';

/** Vertical social rail anchored to the left edge on large screens. */
export function FloatingSocials() {
  return (
    <div className="fixed bottom-0 left-6 z-40 hidden flex-col items-center gap-4 xl:flex">
      <ul className="flex flex-col items-center gap-3">
        {socials.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-faint transition-colors hover:text-fg"
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </a>
          </li>
        ))}
      </ul>
      <span className="h-20 w-px bg-line" />
    </div>
  );
}
