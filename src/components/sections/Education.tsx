import { Section, Card, Reveal } from '@/components/ui';
import { education } from '@/data/education';

export function Education() {
  return (
    <Section id="education" index="03" eyebrow="Education" title="Academic foundation">
      <div className="grid gap-4">
        {education.map((edu, i) => (
          <Reveal key={edu.institution} delay={i * 0.06}>
            <Card interactive>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-medium text-fg">{edu.degree}</h3>
                <span className="font-mono text-xs text-faint">{edu.period}</span>
              </div>
              <p className="mt-1 text-sm text-muted">
                {edu.institution} · {edu.location}
                <span className="ml-2 text-brand-cyan">{edu.score}</span>
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {edu.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-pink" aria-hidden />
                    {h}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
