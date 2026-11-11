import { ArrowUpRight, BookOpen, Code2, Database, Network } from 'lucide-react';
import { Section } from '@/components/ui';

const posts = [
  {
    href: '/notes/react-flow-editor.html',
    category: 'UI engineering',
    read: '6 min',
    title: 'A React node editor without a graph library',
    description: 'Pointer capture, SVG curves, viewport-aware layout, and keyboard interaction—explained from the working demo.',
    icon: Network,
    tags: ['React', 'Pointer Events', 'SVG', 'Accessibility'],
  },
  {
    href: '/notes/virtualized-10000-rows.html',
    category: 'Web performance',
    read: '5 min',
    title: 'Render 10,000 rows without rendering 10,000 elements',
    description: 'The scroll-window math, overscan decisions, ResizeObserver, and rAF batching behind the interactive table.',
    icon: Database,
    tags: ['Virtualization', 'TypeScript', 'Rendering'],
  },
  {
    href: '/notes/honest-ai-console.html',
    category: 'AI interfaces',
    read: '4 min',
    title: 'A transparent AI-console simulation without API keys',
    description: 'What a lexical demo can prove—and what it cannot—before real retrieval, model calls and tool governance exist.',
    icon: Code2,
    tags: ['Retrieval', 'UX', 'Trust'],
  },
] as const;

export function EngineeringNotes() {
  return (
    <Section
      id="notes"
      index="09"
      eyebrow="Engineering notebook"
      title="Build notes, not buzzwords"
      accent="not buzzwords"
      description="Real implementation details from this very site. Read a breakdown, inspect the open-source code, then try the interaction yourself."
    >
      <div className="grid gap-4 md:grid-cols-3" data-testid="engineering-notes">
        {posts.map(({ href, category, read, title, description, icon: Icon, tags }) => (
          <article key={href} className="flex min-w-0 flex-col rounded-2xl border border-line-strong bg-surface p-5 transition-colors hover:border-brand-cyan/50 sm:p-6">
            <div className="flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
              <span className="inline-flex items-center gap-2 text-brand-cyan">
                <Icon className="h-4 w-4" aria-hidden="true" /> {category}
              </span>
              <span>{read}</span>
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold leading-snug tracking-tight text-fg">{title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{description}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Topics">
              {tags.map((tag) => <li key={tag} className="rounded-md border border-line px-2 py-1 font-mono text-[10px] text-faint">{tag}</li>)}
            </ul>
            <a className="mt-6 inline-flex min-h-11 items-center gap-2 border-t border-line pt-4 text-sm font-semibold text-fg transition-colors hover:text-brand-cyan focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan" href={href}>
              Read the engineering note <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
      <p className="mt-5 flex items-center gap-2 text-xs leading-relaxed text-muted">
        <BookOpen className="h-4 w-4 shrink-0 text-brand-lime" aria-hidden="true" />
        No copied customer screenshots, invented benchmarks, paid model calls or proprietary code.
      </p>
    </Section>
  );
}
