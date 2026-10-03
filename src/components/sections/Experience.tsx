import { useMemo, useState } from 'react';
import { ChevronDown, Layers } from 'lucide-react';
import { Reveal, Section, Tag } from '@/components/ui';
import { experiences } from '@/data/experience';
import { cn } from '@/lib/utils';

/** Collapsible block for one product phase inside a long tenure. */
function Phase({ phase, defaultOpen }: { phase: NonNullable<(typeof experiences)[number]['phases']>[number]; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="mt-3 overflow-hidden rounded-xl border border-line bg-surface">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-surface-hover"
      >
        <Layers className="h-4 w-4 shrink-0 text-brand-cyan" strokeWidth={1.75} />
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-medium text-fg">{phase.name}</span>
          <span className="mt-0.5 block font-mono text-[10px] text-faint">{phase.period}</span>
        </span>
        <ChevronDown
          className={cn('h-4 w-4 shrink-0 text-faint transition-transform duration-200', open && 'rotate-180')}
        />
      </button>

      {open && (
        <div className="border-t border-line px-4 pb-4 pt-3.5">
          <p className="text-sm leading-relaxed text-muted">{phase.summary}</p>
          <ul className="mt-3 space-y-2">
            {phase.bullets.map((bullet) => (
              <li key={bullet.slice(0, 32)} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-cyan" aria-hidden />
                {bullet}
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-wrap gap-2">
            {phase.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Experience() {
  const totalPhases = useMemo(
    () => experiences.reduce((count, exp) => count + (exp.phases?.length ?? 0), 0),
    [],
  );

  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title="Where I&rsquo;ve worked"
      accent="worked"
      description={
        totalPhases > 0
          ? `${experiences[0].company} across ${totalPhases} product phases — from outbound voice bots to agentic workflow platforms — plus research and a pandemic-era teaching platform.`
          : 'From conversational-AI products to environmental research labs.'
      }
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
              {exp.grade && (
                <p className="mt-2 inline-flex rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-muted">
                  {exp.grade}
                </p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-muted">{exp.summary}</p>

              {exp.phases && exp.phases.length > 0 && (
                <div className="mt-4">
                  {exp.phases.map((phase, index) => (
                    <Phase key={phase.name} phase={phase} defaultOpen={index < 2} />
                  ))}
                </div>
              )}

              <ul className="mt-4 space-y-2">
                {exp.achievements.map((item) => (
                  <li key={item.slice(0, 32)} className="flex gap-3 text-sm leading-relaxed text-muted">
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
