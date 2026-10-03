import { Mail, Phone, Workflow, Bot, Layers } from 'lucide-react';
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
  role: 'SDE 2 · Full-Stack · Conversational AI, Agent Platforms & Workflow Engines',
  /** Factual recognition line shown as a chip in the hero (source: résumé achievements). */
  recognition: 'Kore.ai Global Spotlight · Jan 2026',
  tagline:
    'I ship AI-native distributed systems at Kore.ai — workflow engines, agent platforms and conversational-AI products — to 1,000+ enterprise tenants.',
  /** Cycled after "I build …" in the hero. Keep each one short. */
  heroPhrases: [
    'workflow engines for 1,000+ tenants',
    'production LLM systems — RAG, tool-use, MCP',
    'voice and chat agents at 10K+ concurrency',
    'AI-native UIs that stay fast at scale',
  ],
  /** Scan-friendly capability keywords for the hero marquee. */
  keywords: [
    'LLM Systems',
    'Agentic Workflows',
    'RAG & MCP',
    'Voice & Conversational AI',
    'Multi-tenant SaaS',
    'Next.js / Angular',
    'Node · Restate · Kafka',
    'Kubernetes',
    'Distributed Systems',
  ],
  location: 'Hyderabad, India',
  availability: 'Open to senior full-stack & AI-platform roles',
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
  { value: '~4', countTo: 4, prefix: '~', label: 'Years at Kore.ai', note: 'Jul 2022 → now' },
  { value: '1,000+', countTo: 1000, suffix: '+', label: 'Enterprise tenants', note: 'multi-tenant platform' },
  { value: '10K+', countTo: 10000, suffix: '+', label: 'Concurrent agents', note: 'voice, chat & dialer' },
  { value: '60%', countTo: 60, suffix: '%', label: 'WebSDK bundle cut', note: '2.3 MB → 920 KB' },
];

export const highlights: Highlight[] = [
  {
    icon: Layers,
    title: 'Full-Stack & Distributed Systems',
    description: 'React, Next.js & Angular on the front; Node, Express, Restate, Kafka & Kubernetes behind it.',
  },
  {
    icon: Bot,
    title: 'Conversational AI & Agents',
    description: 'LLM tool-use, RAG and MCP integrations; ASR/TTS voice agents with intent, entity and dialogue handling.',
  },
  {
    icon: Workflow,
    title: 'Workflow Engines & DevEx',
    description: 'Durable workflows, visual flow designers and microfrontends at enterprise scale.',
  },
];

export const aboutParagraphs: string[] = [
  'I’m a full-stack software engineer (SDE 2, Grade A2) on Kore.ai’s AI-for-Process team in Hyderabad. Over nearly four years I’ve built AI-native distributed systems — workflow engines and agent platforms, conversational-AI agents, document intelligence and microfrontends — shipped to 1,000+ enterprise tenants. I was promoted to SDE 2 among the fastest in my cohort and recognised with the company-wide Global Spotlight in January 2026.',
  'I work end to end: LLM tool-use, RAG pipelines and MCP integrations on the AI side; Next.js, Angular, Module Federation and Monaco on the frontend; Node/Express, Restate and Kafka on the backend. Strong CS fundamentals from IIIT Hyderabad, plus a research background applying ML to environmental science.',
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
