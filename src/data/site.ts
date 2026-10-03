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
  role: 'Software Engineer · AI/LLM Platforms · Distributed Systems · Full Stack',
  /** Factual recognition line shown as a chip in the hero (source: résumé awards). */
  recognition: '2× Kore.ai Global Spotlight · 2026',
  tagline:
    '4+ years building production enterprise AI at Kore.ai — agentic workflow platforms with durable execution, MCP and tool calling, typed authorization-aware integrations, and multi-tenant systems serving 1,000+ tenants.',
  /** Cycled after "I build …" in the hero. Keep each one short. */
  heroPhrases: [
    'agentic workflows that replay safely',
    'MCP integrations over 50+ services',
    'voice & contact-centre AI at 10K+ concurrency',
    'typed, authorization-aware AI platforms',
  ],
  /** Scan-friendly capability keywords for the hero marquee. */
  keywords: [
    'Agentic Workflows',
    'Durable Execution',
    'MCP & Tool Calling',
    'RAG',
    'Distributed Systems',
    'Event-Driven Services',
    'Tenant Isolation',
    'TypeScript / Node.js',
    'Angular / Next.js',
    'Kafka · Restate · Kubernetes',
  ],
  location: 'Hyderabad, India',
  availability: 'Open to senior AI-platform & full-stack roles',
  email: EMAIL,
  // Résumé link. Set `resumeUrl` to an external, update-in-place link (e.g. a
  // Google Drive share URL) to make it "dynamic" — change the file there and the
  // button always serves the latest, no rebuild. Falls back to the bundled PDF.
  resumeUrl: '',
  resumeFile: 'resume.pdf',
} as const;

export const navLinks: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'impact', label: 'Impact' },
  { id: 'projects', label: 'Work' },
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
  { value: '1,000+', countTo: 1000, suffix: '+', label: 'Enterprise tenants', note: 'multi-tenant platform' },
  { value: '10K+', countTo: 10000, suffix: '+', label: 'Concurrent agents', note: 'voice, chat & dialer' },
  { value: '50+', countTo: 50, suffix: '+', label: 'Services as agent tools', note: 'MCP integrations' },
];

export const highlights: Highlight[] = [
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
  {
    icon: Layers,
    title: 'Frontend & Product Engineering',
    description:
      'Next.js and Angular at enterprise scale — Module Federation microfrontends, Monaco and ReteJS editors, WebSocket streaming and design systems.',
  },
];

export const aboutParagraphs: string[] = [
  'I’m a software engineer at Kore.ai (SDE 2, Grade A2 since December 2024), promoted Associate SWE → SWE → SDE 2 among the fastest in my cohort. Over 4+ years I’ve shipped production enterprise AI: agentic workflow platforms with durable execution, voice and contact-centre AI, OCR-driven document intelligence and multi-tenant systems serving 1,000+ tenants.',
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
