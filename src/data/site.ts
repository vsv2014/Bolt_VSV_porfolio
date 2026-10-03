import { Mail, Phone, Workflow, Bot, Layers, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon, XIcon } from '@/components/ui/brand-icons';
import type { NavLink, SocialLink, Stat, Highlight } from '@/types';

// Single source of truth for contact identifiers (derive everything else from these).
const EMAIL = 'santhoshvishalveerannapet@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/santhosh-vishal/';
const GITHUB_URL = 'https://github.com/vsv2014';

export const profile = {
  name: 'Veerannapet Santhosh Vishal',
  shortName: 'Santhosh Veerannapet',
  initials: 'SV',
  role: 'Frontend-Heavy Full-Stack Engineer · AI/LLM Platforms · Interface Architecture',
  /** Factual recognition line shown as a chip in the hero (source: résumé awards). */
  recognition: '2× Kore.ai Global Spotlight · 2026',
  tagline:
    '4+ years at Kore.ai building production enterprise AI — and I’m the one who makes it usable. I own the hard frontend surfaces: workflow canvases, flow designers and dashboards for 1,000+ tenants and 10,000+ concurrent agents, on durable backends I also write.',
  /** Cycled after "I build …" in the hero. Keep each one short. */
  heroPhrases: [
    'interfaces people actually enjoy using',
    'workflow canvases that stay at 60fps',
    'agentic workflows that replay safely',
    'design systems three product suites share',
  ],
  /** Scan-friendly capability keywords for the hero marquee. */
  keywords: [
    'React · Next.js · Angular',
    'Micro-frontends (Nx)',
    'Design Systems',
    'Monaco · ELK · ReteJS',
    'Canvas & WebGL',
    'Virtualised Data Grids',
    'Motion & Micro-interactions',
    'Web Performance',
    'Accessibility',
    'Agentic Workflows',
    'TypeScript / Node.js',
    'Kafka · Restate · Kubernetes',
  ],
  location: 'Hyderabad, India',
  availability: 'Open to senior AI-platform & full-stack roles',
  email: EMAIL,
  // Résumé link. `resumeUrl` wins when set — an external, update-in-place link
  // (Google Drive share URL etc.) means the button always serves the newest file
  // with no rebuild. Clear it to fall back to the bundled `public/resume.pdf`.
  resumeUrl: 'https://drive.google.com/file/d/1VVc2EkMfXf8LD62IHdS0LvKMMy2Chwzi/view?usp=sharing',
  resumeFile: 'resume.pdf',
} as const;

export const navLinks: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'impact', label: 'Impact' },
  { id: 'projects', label: 'Work' },
  { id: 'craft', label: 'Craft' },
  { id: 'agent', label: 'Ask AI' },
  { id: 'research', label: 'Research' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
];

export const socials: SocialLink[] = [
  { label: 'GitHub', href: GITHUB_URL, icon: GithubIcon },
  { label: 'LinkedIn', href: LINKEDIN_URL, icon: LinkedinIcon },
  { label: 'Facebook', href: 'https://www.facebook.com/santhosh.vishal.98', icon: FacebookIcon },
  { label: 'Email', href: `mailto:${EMAIL}`, icon: Mail },
];

export const stats: Stat[] = [
  { value: '4+', countTo: 4, suffix: '+', label: 'Years at Kore.ai', note: 'Jul 2022 → now' },
  { value: '5,800+', countTo: 5800, suffix: '+', label: 'Files in the Nx monorepo I led', note: '4 micro-frontends' },
  { value: '1,000+', countTo: 1000, suffix: '+', label: 'Enterprise tenants', note: 'multi-tenant platform' },
  { value: '60%', countTo: 60, suffix: '%', label: 'WebSDK bundle cut', note: '2.3 MB → 920 KB' },
];

export const highlights: Highlight[] = [
  {
    icon: Layers,
    title: 'Frontend & Product Engineering',
    description:
      'React, Next.js and Angular at enterprise scale — Monaco and ReteJS editors, ELK auto-layout, virtualised tables for 10K+ rows, and motion that respects the user’s settings.',
  },
  {
    icon: Bot,
    title: 'Agentic AI & LLM Platforms',
    description:
      'MCP and tool calling, RAG, prompt engineering, LLM gateways and guardrails — with permissions and irreversible operations kept in typed backend services, not prompts.',
  },
  {
    icon: Workflow,
    title: 'Durable Execution & Reliability',
    description:
      'Restate orchestration, Redis atomic queue claims, BullMQ continuations, transactional outbox, bounded retries, watchdogs, recovery and tenant-aware state.',
  },
  {
    icon: ShieldCheck,
    title: 'Type-Safe Multi-Tenant Systems',
    description:
      'Service-token JWT, authorization boundaries, correlation IDs, idempotency, backpressure, rate limits and noisy-neighbour controls across 1,000+ tenants.',
  },
];

export const aboutParagraphs: string[] = [
  'I’m a frontend-heavy software engineer at Kore.ai (SDE 2, Grade A2 since December 2024), promoted Associate SWE → SWE → SDE 2 among the fastest in my cohort. Over 4+ years I’ve shipped production enterprise AI: agentic workflow platforms with durable execution, voice and contact-centre AI, OCR-driven document intelligence and multi-tenant systems serving 1,000+ tenants — most of it judged by the interface in front of it.',
  'My work sits at the reliability layer of AI products — durable Restate orchestration, Redis atomic queue claims and deduplication, BullMQ continuation workers, transactional outbox and reconciliation watchdogs — plus the authoring surfaces on top: Monaco IntelliSense over agent context, ELK auto-layout for multi-handle graphs and WebSocket step streaming. Recently I transitioned into product support, ramping up on XOCC and Artemis tickets and joining the pilot team establishing Artemis platform support readiness.',
];

export const contactChannels = [
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, icon: Mail },
  { label: 'LinkedIn', value: 'in/santhosh-vishal', href: LINKEDIN_URL, icon: LinkedinIcon },
  { label: 'GitHub', value: 'github.com/vsv2014', href: GITHUB_URL, icon: GithubIcon },
  { label: 'Phone / WhatsApp', value: '+91 770-277-1465', href: 'tel:+917702771465', icon: Phone },
  { label: 'Instagram', value: '@santhoshvishal', href: 'https://www.instagram.com/santhoshvishal', icon: InstagramIcon },
  { label: 'Twitter / X', value: '@santhoshvishal3', href: 'https://twitter.com/santhoshvishal3', icon: XIcon },
] satisfies ContactChannel[];

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  icon: SocialLink['icon'];
}
