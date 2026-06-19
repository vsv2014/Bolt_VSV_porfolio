import { Section, Card, Reveal } from '@/components/ui';
import { aboutParagraphs, highlights } from '@/data/site';

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="Engineering meets research">
      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
        <Reveal className="space-y-5">
          {aboutParagraphs.map((para) => (
            <p key={para.slice(0, 24)} className="text-lg leading-relaxed text-muted">
              {para}
            </p>
          ))}
        </Reveal>

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
