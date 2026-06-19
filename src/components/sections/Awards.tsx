import { Section, Card, Reveal } from '@/components/ui';
import { awards } from '@/data/awards';

export function Awards() {
  return (
    <Section id="awards" index="07" eyebrow="Recognition" title="Awards & honours">
      <div className="grid gap-4 sm:grid-cols-2">
        {awards.map((award, i) => (
          <Reveal key={award.title} delay={(i % 2) * 0.06}>
            <Card interactive className="flex h-full gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line text-brand-cyan">
                <award.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-medium text-fg">{award.title}</h3>
                <p className="mt-0.5 font-mono text-xs text-faint">{award.period}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{award.description}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
