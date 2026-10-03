import { Boxes, Frame, Rows3 } from 'lucide-react';
import { Card, Reveal, Section } from '@/components/ui';
import { FlowCanvas } from '@/components/demo/FlowCanvas';
import { VirtualList } from '@/components/demo/VirtualList';
import { PerfPanel } from '@/components/demo/PerfPanel';

const craftPoints = [
  {
    icon: Frame,
    title: 'Editors, not forms',
    detail: 'Monaco IntelliSense over agent context, ELK auto-layout for multi-handle graphs, ReteJS for visual flows — the surfaces where frontend work actually gets hard.',
  },
  {
    icon: Boxes,
    title: 'Micro-frontends in anger',
    detail: 'Module Federation across four Angular apps on an Nx monorepo of 5,800+ files, with shared state hydration and independent deploys to GA.',
  },
  {
    icon: Rows3,
    title: 'Scale on screen',
    detail: 'Dashboards and tables for 10,000+ concurrent agents — virtualised, rAF-batched, and measured instead of assumed.',
  },
];

export function FrontendCraft() {
  return (
    <Section
      id="craft"
      index="07"
      eyebrow="Frontend craft"
      title={
        <>
          Interfaces are the <span className="text-gradient">product</span>
        </>
      }
      description="Frontend-heavy by choice: I spend most of my time where rendering, state and interaction meet. Below are three live demos I built for this page — pointer events, SVG, virtualisation and PerformanceObserver, no UI kit and no canvas library."
    >
      <div className="grid gap-4 lg:grid-cols-[1.45fr_1fr]">
        <Reveal>
          <Card className="flex h-full flex-col overflow-hidden p-0">
            <FlowCanvas />
          </Card>
        </Reveal>

        <div className="grid gap-4">
          <Reveal delay={0.06}>
            <Card className="overflow-hidden p-0">
              <VirtualList />
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="overflow-hidden p-0">
              <PerfPanel />
            </Card>
          </Reveal>
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {craftPoints.map((point, index) => (
          <Reveal key={point.title} delay={index * 0.06}>
            <Card interactive className="h-full">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-brand-cyan">
                <point.icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 font-medium text-fg">{point.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{point.detail}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
