import { Section, Reveal, Tag } from '@/components/ui';
import { experiences } from '@/data/experience';

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title="Where I've worked"
      description="From conversational-AI products to environmental research labs."
    >
      <ol className="relative border-l border-line">
        {experiences.map((exp, i) => (
          <li key={exp.company} className="relative pl-8 pb-12 last:pb-0">
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-brand-cyan bg-bg" aria-hidden />
            <Reveal delay={i * 0.05}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-medium text-fg">
                  {exp.role} <span className="text-muted">· {exp.company}</span>
                </h3>
                <span className="font-mono text-xs text-faint">{exp.period}</span>
              </div>
              <p className="mt-1 font-mono text-xs text-faint">{exp.location}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{exp.summary}</p>

              <ul className="mt-4 space-y-2">
                {exp.achievements.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-pink" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
