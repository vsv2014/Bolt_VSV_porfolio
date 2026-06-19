import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui/brand-icons';
import { Section, Card, Tag } from '@/components/ui';
import { projects } from '@/data/projects';
import type { ProjectCategory } from '@/types';
import { cn } from '@/lib/utils';

type Filter = 'all' | ProjectCategory;

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'professional', label: 'Professional' },
  { value: 'research', label: 'Research' },
  { value: 'academic', label: 'Academic' },
];

export function Projects() {
  const [active, setActive] = useState<Filter>('all');
  const visible = useMemo(
    () => (active === 'all' ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <Section
      id="projects"
      index="05"
      eyebrow="Selected work"
      title="Things I've built"
      description="Products, research tooling and academic projects across the stack."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setActive(f.value)}
            className={cn(
              'rounded-md border px-3 py-1.5 font-mono text-xs transition-colors',
              active === f.value
                ? 'border-line-strong bg-surface text-fg'
                : 'border-line text-muted hover:text-fg',
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              <Card interactive className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-medium text-fg">{project.title}</h3>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-faint">
                    {project.category}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
                {project.impact && (
                  <p className="mt-2 text-sm leading-relaxed text-brand-cyan/90">{project.impact}</p>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>

                {(project.githubUrl || project.demoUrl) && (
                  <div className="mt-auto flex items-center gap-4 border-t border-line pt-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
                      >
                        <GithubIcon className="h-4 w-4" /> Code
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
                      >
                        Live <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
