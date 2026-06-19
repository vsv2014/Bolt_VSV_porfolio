import { ArrowUpRight } from 'lucide-react';
import { Section, Reveal, ButtonLink } from '@/components/ui';
import { contactChannels, profile } from '@/data/site';

export function Contact() {
  return (
    <Section
      id="contact"
      index="08"
      eyebrow="Contact"
      title="Let's build something"
      description="Open to collaborations, full-stack and ML roles, and interesting research problems."
    >
      <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-start">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">
            The fastest way to reach me is email — I usually reply within a day.
          </p>
          <ButtonLink href={`mailto:${profile.email}`} variant="primary" className="mt-6">
            {profile.email} <ArrowUpRight className="h-4 w-4" />
          </ButtonLink>
          <p className="mt-6 font-mono text-xs text-faint">
            {profile.location} · {profile.availability}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="divide-y divide-line overflow-hidden rounded-xl border border-line">
            {contactChannels.map(({ label, value, href, icon: Icon }) => {
              const external = href.startsWith('http');
              return (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-surface-hover"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors group-hover:text-fg">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[11px] uppercase tracking-wider text-faint">{label}</span>
                      <span className="block truncate text-sm text-fg">{value}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-faint transition-colors group-hover:text-fg" />
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
