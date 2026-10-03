import { motion } from 'motion/react';
import { BadgeCheck, Quote } from 'lucide-react';
import { Card, CountUp, Reveal, Section } from '@/components/ui';
import { impactMetrics, rankEvidence } from '@/data/impact';
import { profile } from '@/data/site';

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
  return (
    <Section
      id="impact"
      index="05"
      eyebrow="Impact ledger"
      title={
        <>
          Numbers, <span className="text-gradient">not adjectives</span>
        </>
      }
      description="Six production figures behind the work — every one traceable to a shipped feature, an award or a résumé bullet."
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

      {/* The ranking claim, with receipts */}
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
                <BadgeCheck className="h-3.5 w-3.5" /> {profile.rank} · {profile.rankDetail}
              </p>
              <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-fg sm:text-3xl">
                A percentile claim only survives if the receipts do.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Ranked credentials, a company-wide spotlight and research that shipped — the pattern is the same every
                time: pick the hard problem, own it end to end, measure the outcome.
              </p>
              <p className="mt-6 flex items-start gap-2 font-mono text-[11px] leading-relaxed text-faint">
                <Quote className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                Positioning statement — verify any line below against the résumé, LinkedIn or the publications.
              </p>
            </div>

            <ul className="grid gap-3">
              {rankEvidence.map((item, index) => (
                <Reveal key={item.label} delay={0.05 + index * 0.05}>
                  <li className="flex gap-4 rounded-xl border border-line bg-surface p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line text-brand-purple">
                      <item.icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-fg">{item.label}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted">{item.detail}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
