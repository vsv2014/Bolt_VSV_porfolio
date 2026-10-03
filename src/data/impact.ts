import {
  Building2,
  Users,
  Target,
  Zap,
  ShieldCheck,
  TrendingUp,
  Trophy,
  GraduationCap,
  Star,
  ScrollText,
} from 'lucide-react';
import type { IconType, ImpactMetric } from '@/types';

/** Headline numbers — every figure here is traceable to a résumé bullet. */
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
    label: 'Concurrent agents',
    value: '10K+',
    countTo: 10000,
    suffix: '+',
    detail: 'Contact-centre platform designed and load-tested for 10,000+ simultaneous live agents.',
    icon: Users,
  },
  {
    label: 'Extraction accuracy',
    value: '91%',
    countTo: 91,
    suffix: '%',
    detail: '4-engine OCR with confidence-based routing lifted accuracy from 75% → 91% on 512 MB docs.',
    icon: Target,
    progress: { from: 100, to: 82, fromLabel: '75% baseline', toLabel: '91% shipped' },
  },
  {
    label: 'Smaller WebSDK bundle',
    value: '60%',
    countTo: 60,
    suffix: '%',
    detail: 'Route-level code splitting and lazy loading across 15+ modules — 2.3 MB → 920 KB.',
    icon: Zap,
    progress: { from: 100, to: 40, fromLabel: '2.3 MB before', toLabel: '920 KB after' },
  },
  {
    label: 'Production fixes shipped',
    value: '350+',
    countTo: 350,
    suffix: '+',
    detail: 'Tenant-facing bug fixes and platform hardening, plus 120+ support tickets in one quarter.',
    icon: ShieldCheck,
  },
  {
    label: 'Resolution-time gain',
    value: '40%',
    countTo: 40,
    suffix: '%',
    detail: 'SmartAssist AI contact-centre routing and LLM summarisation cut query-resolution time.',
    icon: TrendingUp,
  },
];

export interface Evidence {
  icon: IconType;
  label: string;
  detail: string;
}

/** The receipts behind the "top 1%" positioning badge. */
export const rankEvidence: Evidence[] = [
  {
    icon: Trophy,
    label: 'JEE Main 2016 — AIR 5460',
    detail: 'Top ~0.5% of 1.2M candidates; direct admission to IIIT Hyderabad’s dual-degree programme.',
  },
  {
    icon: GraduationCap,
    label: 'IIIT Hyderabad',
    detail: 'Dual degree (B.Tech + MS by Research) with the full CS core: DSA, OS, DBMS, networks, ML/AI.',
  },
  {
    icon: Star,
    label: 'Kore.ai Global Spotlight + Shining Star',
    detail: 'Company-wide recognition for browser-automation UI and a 60% WebSDK performance win.',
  },
  {
    icon: TrendingUp,
    label: 'Rapid promotion to SDE 2',
    detail: 'Associate → SDE 2 among the fastest in cohort, for platform ownership and delivery.',
  },
  {
    icon: ScrollText,
    label: '2 peer-reviewed publications',
    detail: 'Applied ML in environmental science — dissolved oxygen modelling and wastewater-plant analysis.',
  },
];
