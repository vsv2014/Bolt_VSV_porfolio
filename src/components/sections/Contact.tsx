import { useState } from 'react';
import { ArrowUpRight, Check, Clock, Copy, Sparkles } from 'lucide-react';
import { ButtonLink, Reveal, Section } from '@/components/ui';
import { openPalette } from '@/lib/agent';
import { contactChannels, profile } from '@/data/site';

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the mailto button next to it still works */
    }
  }

  return (
    <Section
      id="contact"
      index="11"
      eyebrow="Contact"
      title="Let’s build something"
      accent="something"
      description="Open to senior full-stack and AI-platform roles, plus collaborations on agentic systems and applied-ML problems."
    >
      <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-start">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">
            The fastest way to reach me is email — I usually reply within a day.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ButtonLink href={`mailto:${profile.email}`} variant="primary" data-cursor data-cursor-label="email" data-magnetic>
              {profile.email} <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-fg"
            >
              {copied ? <Check className="h-4 w-4 text-brand-lime" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

          <p className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] text-faint">
            <Clock className="h-3.5 w-3.5" /> Typically replies within 24 hours · IST (UTC+5:30)
          </p>

          <p className="mt-6 font-mono text-xs text-faint">
            {profile.location} · {profile.availability}
          </p>

          <button
            type="button"
            onClick={openPalette}
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-3 text-left text-sm text-muted transition-colors hover:border-line-strong hover:text-fg"
          >
            <Sparkles className="h-4 w-4 shrink-0 text-brand-cyan" />
            <span>
              In a hurry? Press <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-fg">⌘K</kbd> and
              ask the AI console anything about my work.
            </span>
          </button>
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
