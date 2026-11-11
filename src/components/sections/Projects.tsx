import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, ChevronDown, Layers3 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/brand-icons';
import { Section, Card, Tag } from '@/components/ui';
import { FeaturedStories } from './FeaturedStories';
import { projects } from '@/data/projects';
import type { ProjectCategory } from '@/types';
import { cn } from '@/lib/utils';

type Filter = 'all' | ProjectCategory;

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'professional', label: 'Professional' },
  { value: 'personal', label: 'Solo builds' },
  { value: 'research', label: 'Research' },
  { value: 'academic', label: 'Academic' },
];

const notes: Partial<Record<Filter, string>> = {
  personal:
    'Built solo on evenings and weekends to explore agentic-AI patterns end to end — engineering builds rather than claims of commercial adoption.',
};

export function Projects() {
  const [active, setActive] = useState<Filter>('all');
  const archiveRef = useRef<HTMLDetailsElement>(null);
  const visible = useMemo(
    () => (active === 'all' ? projects : projects.filter((p) => p.category === active)),
    [active],
  );
  // The command palette can expand the archive and show a selected project.
  useEffect(() => {
    const reveal = (event: Event) => {
      const detail = (event as CustomEvent<{ title?: string; category?: Filter }>).detail;
      archiveRef.current?.setAttribute('open', '');
      setActive(detail?.category ?? 'all');
      requestAnimationFrame(() => {
        const target = [...document.querySelectorAll<HTMLElement>('[data-project-title]')]
          .find((card) => card.dataset.projectTitle === detail?.title);
        (target ?? archiveRef.current)?.scrollIntoView({ block: 'center', behavior: 'smooth' });
      });
    };
    window.addEventListener('vsv:show-project', reveal);
    return () => window.removeEventListener('vsv:show-project', reveal);
  }, []);


  return (
    <Section
      id="projects"
      index="06"
      eyebrow="Selected work"
      title="Things I&rsquo;ve built"
      accent="built"
      description="Enterprise products from Kore.ai, solo engineering builds, and research tooling across the stack."
    >
      <FeaturedStories />

      <details ref={archiveRef} id="project-archive" className="group/archive mt-10 overflow-hidden rounded-2xl border border-line-strong bg-surface">
        <summary
          data-testid="project-archive-toggle"
          className="flex cursor-pointer list-none flex-wrap items-center justify-between gap-4 p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-brand-cyan sm:p-6 [&::-webkit-details-marker]:hidden"
        >
          <span className="flex min-w-0 items-center gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line text-brand-cyan">
              <Layers3 className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-lg font-semibold text-fg sm:text-xl">Explore the full project archive</span>
              <span className="mt-0.5 block text-xs leading-relaxed text-muted">
                {projects.length} projects · professional platforms, independent builds and research
              </span>
            </span>
          </span>
          <span className="flex items-center gap-2 font-mono text-xs text-brand-cyan">
            <span className="group-open/archive:hidden">Browse all</span>
            <span className="hidden group-open/archive:inline">Collapse</span>
            <ChevronDown className="h-4 w-4 transition-transform group-open/archive:rotate-180" />
          </span>
        </summary>

        <div data-testid="project-archive-content" className="border-t border-line px-4 pb-6 pt-6 sm:px-6">
          <div className="mb-7 flex flex-wrap items-center gap-2" role="group" aria-label="Filter project archive">
            {filters.map((filter) => {
              const count = filter.value === 'all'
                ? projects.length : projects.filter((project) => project.category === filter.value).length;
              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActive(filter.value)}
                  aria-pressed={active === filter.value}
                  className={cn(
                    'inline-flex min-h-9 items-center gap-2 rounded-md border px-3 py-1.5 font-mono text-xs transition-colors',
                    active === filter.value
                      ? 'border-line-strong bg-surface-hover text-fg'
                      : 'border-line text-muted hover:border-line-strong hover:text-fg',
                  )}
                >
                  {filter.label}
                  <span className={cn('text-[10px]', active === filter.value ? 'text-brand-cyan' : 'text-faint')}>{count}</span>
                </button>
              );
            })}
            <span className="ml-auto font-mono text-[11px] text-faint" aria-live="polite">
              {visible.length} of {projects.length} shown
            </span>
          </div>

          {notes[active] && (
            <p className="mb-6 max-w-3xl rounded-lg border border-line bg-surface px-4 py-3 text-xs leading-relaxed text-muted">
              {notes[active]}
            </p>
          )}

          <motion.div layout className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((project) => (
                <motion.div
                  key={project.title}
                  data-project-title={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                >
                  <Card interactive tilt fillContent className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-medium text-fg">{project.title}</h4>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-faint">
                        {project.category}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
                    {project.impact && (
                      <p className="mt-2 text-sm leading-relaxed text-brand-cyan/90">{project.impact}</p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tech) => <Tag key={tech}>{tech}</Tag>)}
                    </div>
                    {(project.githubUrl || project.demoUrl) && (
                      <div className="mt-auto flex items-center gap-4 border-t border-line pt-4">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg">
                            <GithubIcon className="h-4 w-4" /> Code
                          </a>
                        )}
                        {project.demoUrl && (
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg">
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
        </div>
      </details>

    </Section>
  );
}
