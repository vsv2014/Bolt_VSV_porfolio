import { motion } from 'motion/react';
import { BadgeCheck } from 'lucide-react';
import { Card, CountUp, Reveal, Section } from '@/components/ui';
import { impactMetrics } from '@/data/impact';
import { awards } from '@/data/awards';
import { experiences } from '@/data/experience';

/** Animated before → after bar pair used inside the metric cards. */
function ProgressBar({ from, to, fromLabel, toLabel }: { from: number; to: number; fromLabel: string; toLabel: string }) {
  const bars = [
    { width: from, label: fromLabel, tone: 'bg-line-strong' },
    { width: to, label: toLabel, tone: 'bg-gradient-to-r from-brand-purple via-brand-pink to-brand-cyan' },
  ];

  return (
    <div className="mt-4 space-y-2">
      {bars.map((bar, index) => (
        <div key={bar.label}>
          <p className="mb-1 font-mono text-[10px] text-faint">{bar.label}</p>
          <div className="h-1.5 overflow-hidden rounded-full bg-surface-hover">
            <motion.span
              className={`block h-full rounded-full ${bar.tone}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${bar.width}%` }}
              viewport={{ once: true, margin: '0px 0px -15% 0px' }}
              transition={{ duration: 0.9, delay: 0.1 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function Impact() {
  const recognitions = awards.filter((award) =>
    ['Global Spotlight', 'Shining Star Award', 'Rapid Promotion to SDE 2', 'Outstanding Performance Award'].includes(award.title),
  );

  return (
    <Section
      id="impact"
      index="05"
      eyebrow="Impact"
      title={
        <>
          Numbers, <span className="text-gradient">not adjectives</span>
        </>
      }
      description="Six production figures behind the work — each one traceable to a shipped feature, an award or a résumé bullet."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {impactMetrics.map((metric, index) => (
          <Reveal key={metric.label} delay={(index % 3) * 0.06}>
            <Card interactive className="flex h-full flex-col">
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-brand-cyan">
                  <metric.icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-faint">{metric.label}</span>
              </div>

              <p className="mt-5 font-display text-4xl font-semibold tracking-tight text-fg">
                <CountUp to={metric.countTo} suffix={metric.suffix} prefix={metric.prefix} />
              </p>

              <p className="mt-3 text-sm leading-relaxed text-muted">{metric.detail}</p>

              {metric.progress && <ProgressBar {...metric.progress} />}
            </Card>
          </Reveal>
        ))}
      </div>

      {/* Shipped scope + official recognition, straight from the résumé */}
      <Reveal delay={0.1}>
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-line-strong">
          <div
            className="pointer-events-none absolute -top-32 -right-16 h-80 w-80 rounded-full opacity-25 blur-[100px]"
            style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)' }}
            aria-hidden
          />
          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-cyan">
                <BadgeCheck className="h-3.5 w-3.5" /> Verified on the résumé
              </p>
              <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-fg sm:text-3xl">
                Shipped scope, and the recognition that came with it.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Platform ownership across Studio, Workflow Engine, Runtime and Connectors — coordinated across 4 teams,
                with HLDs, LLDs, data-flow audits and code reviews. Everything above is reproducible from the résumé,
                LinkedIn or the published papers.
              </p>
              <ul className="mt-6 space-y-2 font-mono text-[11px] text-faint">
                <li>· 50+ third-party connectors with MCP-based integrations</li>
                <li>· 15+ node-type AI workflows on the ABL canvas</li>
                <li>· 25+ reusable components standardised across 3 product suites</li>
              </ul>
            </div>

            <ul className="grid gap-3">
              {recognitions.map((award, index) => (
                <Reveal key={award.title} delay={0.05 + index * 0.05}>
                  <li className="flex gap-4 rounded-xl border border-line bg-surface p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line text-brand-purple">
                      <award.icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-fg">{award.title}</p>
                      <p className="mt-0.5 font-mono text-[10px] text-faint">{award.period}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted">{award.description}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
              <li className="flex items-center justify-between rounded-xl border border-line bg-surface p-4">
                <span className="font-mono text-[11px] text-faint">Current role</span>
                <span className="text-sm text-fg">{experiences[0].role} · {experiences[0].company}</span>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
