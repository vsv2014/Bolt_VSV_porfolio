import { Trophy, Star, Award as AwardIcon, GraduationCap, Sparkles, TrendingUp, Users } from 'lucide-react';
import type { Award } from '@/types';

export const awards: Award[] = [
  {
    title: 'Global Spotlight — Artemis Support Readiness',
    period: 'Jul 2026 · Kore.ai',
    description:
      'Company-wide recognition for rapidly ramping up on XOCC and Artemis production support, handling customer issues, and helping establish Artemis platform support readiness.',
    icon: Sparkles,
    featured: true,
  },
  {
    title: 'Global Spotlight — Browser Automation UI',
    period: 'Jan 2026 · Kore.ai',
    description:
      'Company-wide recognition for shaping the Browser Automation UI — translating complex automation workflows into an interface both technical and non-technical users can drive.',
    icon: Sparkles,
    featured: true,
  },
  {
    title: 'Shining Star Award',
    period: 'Q3 2024 · Kore.ai',
    description: '60% WebSDK performance optimisation (2.3 MB → 920 KB) plus 350+ production fixes shipped to enterprise tenants.',
    icon: Star,
    featured: true,
  },
  {
    title: 'Outstanding Performance Award',
    period: '2024 · Kore.ai',
    description: 'Recognised for WebSDK development and customer support — 120+ enterprise tickets resolved in a single quarter.',
    icon: Trophy,
    featured: true,
  },
  {
    title: 'Rapid Promotion to SDE 2',
    period: 'Kore.ai · Associate → SWE → SDE 2',
    description: 'Promoted Associate Software Engineer → SWE → SDE 2, Grade A2, among the fastest in the cohort; mentors juniors and drives code reviews.',
    icon: TrendingUp,
  },
  {
    title: 'Customer Partnership',
    period: 'Kore.ai',
    description: 'Discovery calls, technical demos, onboarding workshops and hands-on issue triage directly with enterprise customers.',
    icon: Users,
  },
  {
    title: 'JEE Main 2016 — AIR 5460',
    period: 'AIR 5460 · top 0.5% of 1.2M+',
    description: 'Secured direct admission to IIIT Hyderabad’s flagship dual degree (B.Tech Civil + MS by Research).',
    icon: GraduationCap,
  },
  {
    title: 'Research Recognition',
    period: '2020–2021 · IIIT Hyderabad',
    description: 'For contributions to environmental monitoring and building-science research, including two peer-reviewed publications.',
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
    description: 'GPA 9.3/10 (APSSC board) and school topper in mathematics.',
    icon: AwardIcon,
  },
];
