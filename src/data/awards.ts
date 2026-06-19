import { Trophy, Star, Award as AwardIcon, GraduationCap, Sparkles, TrendingUp } from 'lucide-react';
import type { Award } from '@/types';

export const awards: Award[] = [
  {
    title: 'Global Spotlight',
    period: 'Jan 2026 · Kore.ai',
    description: 'Company-wide recognition for shaping the Browser Automation UI — making complex automation accessible to technical and non-technical users.',
    icon: Sparkles,
  },
  {
    title: 'Shining Star Award',
    period: 'Q3 2024 · Kore.ai',
    description: '60% WebSDK performance optimization and 350+ production fixes shipped to enterprise tenants.',
    icon: Star,
  },
  {
    title: 'Rapid Promotion to SDE 2',
    period: 'Kore.ai',
    description: 'Associate Software Engineer → SDE 2 — among the fastest in cohort for platform delivery and ownership.',
    icon: TrendingUp,
  },
  {
    title: 'JEE Main 2016 — AIR 5460',
    period: 'Top 0.5% of ~1.2M',
    description: 'Secured direct admission to IIIT Hyderabad’s flagship dual-degree programme.',
    icon: Trophy,
  },
  {
    title: 'Outstanding Performance Award',
    period: '2024 · Kore.ai',
    description: 'Recognised for Web SDK development and customer support — 120+ tickets resolved in a quarter.',
    icon: Trophy,
  },
  {
    title: 'Research Recognition',
    period: '2020–2021 · IIIT Hyderabad',
    description: 'For contributions to environmental monitoring and building-science research.',
    icon: Star,
  },
  {
    title: 'Academic Excellence Award',
    period: '2012–2014 · Sri Gayatri',
    description: 'Secured 98.1% in board examinations and a merit scholarship.',
    icon: AwardIcon,
  },
  {
    title: 'Secondary School Achievement',
    period: '2014 · Chaitanya',
    description: '9.3/10 GPA (APSSC board) and school topper in mathematics.',
    icon: GraduationCap,
  },
];
