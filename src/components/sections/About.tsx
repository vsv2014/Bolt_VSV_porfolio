import { ArrowRight, Compass, MapPin, Target } from 'lucide-react';
import { Card, Reveal, Section } from '@/components/ui';
import { aboutParagraphs, highlights, profile } from '@/data/site';

const signals = [
  { icon: MapPin, label: 'Based in', value: profile.location },
  { icon: Target, label: 'Currently', value: 'SDE 2 · AI-for-Process @ Kore.ai' },
  { icon: Compass, label: 'Next up', value: 'Senior full-stack & AI-platform roles' },
];

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="Engineering meets research">
      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-8">
          <Reveal className="space-y-5">
            {aboutParagraphs.map((para) => (
              <p key={para.slice(0, 24)} className="text-lg leading-relaxed text-muted">
                {para}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="divide-y divide-line overflow-hidden rounded-xl border border-line">
              {signals.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 px-5 py-3.5">
                  <Icon className="h-4 w-4 shrink-0 text-brand-cyan" strokeWidth={1.75} />
                  <dt className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-wider text-faint">{label}</dt>
                  <dd className="min-w-0 flex-1 text-sm text-fg">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.14}>
            <a
              href="#impact"
              className="group inline-flex items-center gap-2 font-mono text-xs text-brand-cyan transition-colors hover:text-fg"
            >
              See the impact numbers behind the work
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="grid gap-4">
          {highlights.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <Card interactive className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line text-brand-cyan">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-medium text-fg">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
