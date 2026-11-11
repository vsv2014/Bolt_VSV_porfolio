import { ArrowRight, CheckCircle2, Layers3, Workflow } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Editorial case-study previews inspired by the *information hierarchy* of
 * open-source portfolios (not copied UI or third-party media).
 *
 * Facts are intentionally constrained to the existing portfolio project data.
 * The diagrams are conceptual, never presented as product screenshots.
 */
const stories = [
  {
    id: 'processai',
    number: '01',
    lane: 'Frontend architecture',
    title: 'ProcessAI',
    subtitle: 'A flow editor at enterprise scale.',
    summary: 'Four Angular micro-frontends, a visual flow designer with 15+ node categories, and live stepwise debugging.',
    signal: '4',
    signalLabel: 'independently deployed Angular apps',
    question: 'How do you keep a visual AI studio cohesive when several teams ship independently?',
    answer: 'Led the shared frontend architecture using Nx and Module Federation; developed flow-editor and debugging surfaces with ReteJS, NgRx, and WebSockets.',
    outcome: 'Reached general availability with independent deployment pipelines across four teams.',
    tech: ['Angular', 'Nx', 'Module Federation', 'ReteJS', 'WebSockets'],
    visual: 'modules',
  },
  {
    id: 'artemis',
    number: '02',
    lane: 'AI platform + systems',
    title: 'Artemis',
    subtitle: 'From authoring to durable execution.',
    summary: 'Agent workflow authoring, typed MCP tools, and replay-safe execution across service boundaries.',
    signal: '50+',
    signalLabel: 'third-party services exposed through MCP',
    question: 'What makes a visual agent workflow usable beyond the happy path?',
    answer: 'Built authoring interactions around Monaco IntelliSense, ELK layout and execution traces, plus step validation and continuation/resume handling.',
    outcome: 'Supported a multi-tenant system with durable orchestration and typed tool contracts.',
    tech: ['TypeScript', 'Monaco', 'ELK.js', 'Restate', 'MCP'],
    visual: 'pipeline',
  },
  {
    id: 'websdk',
    number: '03',
    lane: 'Performance engineering',
    title: 'WebSDK',
    subtitle: 'Make the product lighter, not simpler.',
    summary: 'Route-level code splitting and lazy loading across 15+ modules in a customer-facing AI chat SDK.',
    signal: '−60%',
    signalLabel: 'JavaScript bundle size',
    question: 'How do you reduce loading cost without cutting functionality?',
    answer: 'Split heavy routes and feature modules, deferred work until needed, and kept Proactive Web Campaigns and shared UI functionality intact.',
    outcome: 'Reduced the bundle from 2.3 MB to 920 KB for a platform used across 1,000+ tenants.',
    tech: ['Angular', 'TypeScript', 'Webpack', 'Lazy loading'],
    visual: 'bundle',
  },
] as const;

type Story = (typeof stories)[number];

function SystemPreview({ visual }: { visual: Story['visual'] }) {
  return (
    <div
      role="img"
      aria-label={
        visual === 'modules'
          ? 'Illustrative schematic of four independent micro-frontends'
          : visual === 'pipeline'
            ? 'Illustrative agent authoring, typed tools and durable runtime pipeline'
            : 'Illustrative bundle comparison before 2.3 megabytes, after 920 kilobytes'
      }
      className="bg-grid relative min-h-44 overflow-hidden rounded-xl border border-line bg-bg-soft p-4 sm:p-5"
    >
      <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-faint" aria-hidden="true">
        Conceptual system view / not a product screenshot
      </p>
      {visual === 'modules' && (
        <div className="grid grid-cols-2 gap-2" aria-hidden="true">
          {['App / 01', 'App / 02', 'App / 03', 'App / 04'].map((name, index) => (
            <div key={name} className="flex min-h-12 items-center justify-between gap-2 rounded-lg border border-line-strong bg-bg/90 px-3">
              <span className="font-mono text-[10px] text-muted">{name}</span>
              <span className={cn('h-1.5 w-1.5 rounded-full', index % 2 ? 'bg-brand-cyan' : 'bg-brand-lime')} />
            </div>
          ))}
          <div className="col-span-2 mt-1 flex items-center justify-center gap-2 font-mono text-[10px] text-brand-cyan">
            <Layers3 className="h-3.5 w-3.5" /> shared interface architecture
          </div>
        </div>
      )}
      {visual === 'pipeline' && (
        <div className="flex flex-col gap-2" aria-hidden="true">
          {[
            ['01', 'Author workflow', 'Studio + validation'],
            ['02', 'Call typed tools', 'MCP contracts'],
            ['03', 'Resume safely', 'Durable execution'],
          ].map(([number, label, detail], index) => (
            <div key={number} className="flex items-center gap-3 rounded-lg border border-line-strong bg-bg/90 px-3 py-2">
              <span className="font-mono text-[10px] text-brand-cyan">{number}</span>
              <div className="min-w-0 flex-1">
                <span className="block text-xs font-medium text-fg">{label}</span>
                <span className="block font-mono text-[9px] text-faint">{detail}</span>
              </div>
              {index === 2 ? <CheckCircle2 className="h-3.5 w-3.5 text-brand-lime" /> : <Workflow className="h-3.5 w-3.5 text-brand-purple" />}
            </div>
          ))}
        </div>
      )}
      {visual === 'bundle' && (
        <div className="space-y-5" aria-hidden="true">
          {[
            ['Before', '2.3 MB', '100%', 'bg-line-strong'],
            ['After', '920 KB', '40%', 'bg-brand-lime'],
          ].map(([label, value, width, tone]) => (
            <div key={label}>
              <div className="mb-2 flex items-center justify-between gap-3 font-mono text-[11px]">
                <span className="text-muted">{label}</span>
                <span className="text-fg">{value}</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-surface-hover">
                <div className={cn('h-full rounded-full', tone)} style={{ width }} />
              </div>
            </div>
          ))}
          <span className="inline-flex items-center gap-2 font-mono text-[10px] text-brand-lime">
            <ArrowRight className="h-3.5 w-3.5" /> smaller initial download
          </span>
        </div>
      )}
    </div>
  );
}

export function FeaturedStories() {
  return (
    <div data-testid="featured-stories">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-lime">Selected engineering stories</p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
            The work behind the numbers.
          </h3>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Three focused examples of interface architecture, reliable AI workflows, and performance.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {stories.map((story, index) => (
          <article
            key={story.id}
            data-testid={`featured-${story.id}`}
            className={cn(
              'relative min-w-0 overflow-hidden rounded-2xl border border-line-strong bg-surface p-5 sm:p-6',
              index === 0 && 'lg:col-span-2',
            )}
          >
            <div className={cn('grid min-w-0 gap-6', index === 0 && 'lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center')}>
              <div className="flex min-w-0 flex-col">
                <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em]">
                  <span className="text-brand-lime">{story.number} / 03</span>
                  <span className="h-px w-5 bg-line-strong" aria-hidden="true" />
                  <span className="text-faint">{story.lane}</span>
                </div>
                <h4 className="font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl">{story.title}</h4>
                <p className="mt-2 font-serif text-xl italic text-brand-cyan">{story.subtitle}</p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{story.summary}</p>
                <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-display text-4xl font-semibold tracking-tight text-fg">{story.signal}</span>
                  <span className="max-w-44 font-mono text-[10px] leading-relaxed text-faint">{story.signalLabel}</span>
                </div>
              </div>
              <SystemPreview visual={story.visual} />
            </div>

            <details className="group/story mt-5 border-t border-line pt-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md py-1 text-sm font-medium text-fg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan [&::-webkit-details-marker]:hidden">
                Read engineering breakdown
                <ArrowRight className="h-4 w-4 shrink-0 text-brand-cyan transition-transform group-open/story:rotate-90" />
              </summary>
              <div className="mt-5 grid gap-5 border-t border-line pt-5 sm:grid-cols-3">
                {[
                  ['The problem', story.question],
                  ['What I built', story.answer],
                  ['Outcome', story.outcome],
                ].map(([label, text]) => (
                  <div key={label}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-brand-cyan">{label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                  </div>
                ))}
              </div>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                {story.tech.map((item) => <li key={item} className="rounded-md border border-line px-2.5 py-1 font-mono text-[10px] text-faint">{item}</li>)}
              </ul>
            </details>
          </article>
        ))}
      </div>
      <p className="mt-3 font-mono text-[10px] leading-relaxed text-faint">
        Diagrams are illustrative. Enterprise code and customer interfaces are not reproduced here.
      </p>
    </div>
  );
}
