import { Building2, Users, Target, Zap, Wrench, TrendingUp } from 'lucide-react';
import type { ImpactMetric } from '@/types';

/** Headline numbers — every figure here traces to a résumé bullet or an award. */
export const impactMetrics: ImpactMetric[] = [
  {
    label: 'Enterprise tenants',
    value: '1,000+',
    countTo: 1000,
    suffix: '+',
    detail: 'Multi-tenant Kore.ai platform serving global enterprise brands on shared infrastructure.',
    icon: Building2,
  },
  {
    label: 'Concurrent agents & calls',
    value: '10K+',
    countTo: 10000,
    suffix: '+',
    detail:
      'Contact-centre platform for 10,000+ simultaneous agents across WhatsApp, Telegram and Teams, with sub-200 ms agent assignment — plus a dialer running 10,000+ concurrent calls.',
    icon: Users,
  },
  {
    label: 'Extraction accuracy',
    value: '91%',
    countTo: 91,
    suffix: '%',
    detail: '4 OCR engines with confidence-based routing lifted accuracy from 75% → 91% on PDF/DOCX/PPTX up to 512 MB.',
    icon: Target,
    progress: { from: 100, to: 82, fromLabel: '75% baseline', toLabel: '91% shipped' },
  },
  {
    label: 'Smaller WebSDK bundle',
    value: '60%',
    countTo: 60,
    suffix: '%',
    detail: 'Route-level code splitting and lazy loading across 15+ modules — 2.3 MB → 920 KB for 1,000+ tenants.',
    icon: Zap,
    progress: { from: 100, to: 40, fromLabel: '2.3 MB before', toLabel: '920 KB after' },
  },
  {
    label: 'Faster workflow setup',
    value: '8×',
    countTo: 8,
    suffix: '×',
    detail: 'Modular Bot Builder UI and 25+ reusable components took workflow setup from 2 hours to 15 minutes.',
    icon: Wrench,
  },
  {
    label: 'Resolution-time gain',
    value: '40%',
    countTo: 40,
    suffix: '%',
    detail: 'Routing, queue tuning and LLM summarisation cut query-resolution time and post-call documentation by 40%.',
    icon: TrendingUp,
  },
];
