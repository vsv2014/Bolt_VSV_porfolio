import { Building2, Users, Target, Zap, Wrench, Activity } from 'lucide-react';
import type { ImpactMetric } from '@/types';

/** Headline numbers — every figure here traces to a résumé bullet, award or shipped scope. */
export const impactMetrics: ImpactMetric[] = [
  {
    label: 'Enterprise tenants',
    value: '1,000+',
    countTo: 1000,
    suffix: '+',
    detail: 'Multi-tenant Kore.ai platform serving global enterprise brands on shared infrastructure, with tenant isolation and noisy-neighbour controls.',
    icon: Building2,
  },
  {
    label: 'Concurrent agents & calls',
    value: '10K+',
    countTo: 10000,
    suffix: '+',
    detail:
      'Contact centre at 10,000+ concurrent agents peak across WhatsApp, Telegram, Teams and voice — plus an outbound dialer running 10,000+ concurrent calls.',
    icon: Users,
  },
  {
    label: 'Extraction accuracy',
    value: '91%',
    countTo: 91,
    suffix: '%',
    detail: 'Four OCR providers with confidence-based routing by file type lifted internal accuracy from 75% → 91% on PDF, DOCX and PPTX up to 512 MB.',
    icon: Target,
    progress: { from: 100, to: 82, fromLabel: '75% baseline', toLabel: '91% shipped' },
  },
  {
    label: 'Smaller WebSDK bundle',
    value: '60%',
    countTo: 60,
    suffix: '%',
    detail: 'Route-level code splitting and lazy loading across 15+ modules — 2.3 MB → 920 KB for 1,000+ enterprise tenants.',
    icon: Zap,
    progress: { from: 100, to: 40, fromLabel: '2.3 MB before', toLabel: '920 KB after' },
  },
  {
    label: 'Faster workflow setup',
    value: '8×',
    countTo: 8,
    suffix: '×',
    detail: 'Modular Bot Builder UI and the Unified-XO library of 25+ reusable components took agent setup from 2 hours to 15 minutes.',
    icon: Wrench,
  },
  {
    label: 'Lower MTTD, faster deploys',
    value: '35%',
    countTo: 35,
    suffix: '%',
    detail: 'Centralised Grafana/Prometheus/ELK observability and hardened Jenkins/Docker CI/CD cut deployment time 60% and MTTD 35%.',
    icon: Activity,
    progress: { from: 100, to: 40, fromLabel: 'Deploy time −60%', toLabel: 'MTTD −35%' },
  },
];

/** Shipped platform scope — the breadth behind the numbers. */
export const scopeFacts: { value: string; label: string }[] = [
  { value: '50+', label: 'services exposed as agent-callable MCP capabilities' },
  { value: '15+', label: 'node types with replay-safe workflow execution' },
  { value: '4', label: 'OCR providers with confidence-based routing' },
  { value: '350+', label: 'production fixes shipped to enterprise tenants' },
];
