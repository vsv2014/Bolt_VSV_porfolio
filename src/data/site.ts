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
  role: 'SDE 2 · Full-Stack · Conversational AI & Agent Platforms',
  tagline:
    'I ship production LLM systems and multi-tenant agentic-workflow platforms — like Artemis and ProcessAI — to 1,000+ enterprise tenants at Kore.ai.',
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
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
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
  { value: '~4', label: 'Years at Kore.ai' },
  { value: '1,000+', label: 'Enterprise tenants' },
  { value: '10K+', label: 'Concurrent agents' },
  { value: '60%', label: 'WebSDK bundle cut' },
];

export const highlights: Highlight[] = [
  {
    icon: Layers,
    title: 'Full-Stack & Distributed Systems',
    description: 'React, Next.js & Angular on the front; Node, Restate, Kafka & Kubernetes behind it.',
  },
  {
    icon: Bot,
    title: 'Conversational AI & Agents',
    description: 'LLM tool-use, RAG and MCP integrations; ASR/TTS voice & chat agents on Kore.ai XO.',
  },
  {
    icon: Workflow,
    title: 'Workflow Engines & DevEx',
    description: 'Durable workflows, visual flow designers and microfrontends at enterprise scale.',
  },
];

export const aboutParagraphs: string[] = [
  'I’m a full-stack software engineer (SDE 2) on Kore.ai’s AI-for-Process team. Over nearly four years I’ve built AI-native distributed systems — conversational-AI agents, agent platforms, durable workflow engines, document intelligence and microfrontends shipped to 1,000+ enterprise tenants.',
  'I work end to end: LLM tool-use, RAG pipelines and MCP integrations on the AI side; Next.js, Angular, Module Federation and Monaco on the frontend; Node/Express, Restate, Kafka and Kubernetes on the backend. Strong CS fundamentals from IIIT Hyderabad, plus a research background applying ML to environmental science.',
];

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  icon: SocialLink['icon'];
}

export const contactChannels: ContactChannel[] = [
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, icon: Mail },
  { label: 'LinkedIn', value: 'in/santhosh-vishal', href: LINKEDIN_URL, icon: LinkedinIcon },
  { label: 'GitHub', value: 'github.com/vsv2014', href: GITHUB_URL, icon: GithubIcon },
  { label: 'Phone / WhatsApp', value: '+91 770-277-1465', href: 'tel:+917702771465', icon: Phone },
  { label: 'Instagram', value: '@santhoshvishal', href: 'https://www.instagram.com/santhoshvishal', icon: InstagramIcon },
  { label: 'Twitter / X', value: '@santhoshvishal3', href: 'https://twitter.com/santhoshvishal3', icon: XIcon },
];
