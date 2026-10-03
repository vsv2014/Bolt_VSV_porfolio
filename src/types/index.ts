import type { ComponentType, SVGProps } from 'react';

/** Shared icon shape — satisfied by both lucide-react icons and our brand SVGs. */
export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export interface NavLink {
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export interface Stat {
  /** Display value — also the fallback when CountUp animation is off. */
  value: string;
  label: string;
  /** Optional numeric target: when present the value counts up on scroll. */
  countTo?: number;
  prefix?: string;
  suffix?: string;
  /** Small caption under the label, e.g. "verified in production". */
  note?: string;
}

export interface Highlight {
  icon: IconType;
  title: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  stack: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  score: string;
  highlights: string[];
}

export interface SkillGroup {
  name: string;
  icon: IconType;
  skills: string[];
}

export type ProjectCategory = 'professional' | 'research' | 'academic' | 'personal';

export interface Project {
  title: string;
  category: ProjectCategory;
  description: string;
  impact?: string;
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Publication {
  title: string;
  venue: string;
  year: string;
  description: string;
  link?: string;
}

export interface Award {
  title: string;
  period: string;
  description: string;
  icon: IconType;
}

/** A headline metric rendered in the Impact section. */
export interface ImpactMetric {
  label: string;
  value: string;
  countTo: number;
  prefix?: string;
  suffix?: string;
  detail: string;
  icon: IconType;
  /** Optional before → after bar visual. */
  progress?: { from: number; to: number; fromLabel: string; toLabel: string };
}

/** One entry in the agent console's knowledge base. */
export interface AgentDoc {
  id: string;
  /** Stable URL-ish citation shown on the source chip. */
  source: string;
  /** Lowercase keywords used by the retriever — longer phrases score higher. */
  keywords: string[];
  answer: string;
  /** Simulated tool call rendered in the reasoning trace. */
  tool: { name: string; args: string; detail: string };
}

export type TraceKind = 'embed' | 'retrieve' | 'tool' | 'compose';

export interface TraceStep {
  kind: TraceKind;
  label: string;
  detail: string;
  /** Milliseconds this step "takes" in the console animation. */
  ms: number;
}

/** A retrieved document with its similarity score, as shown on source chips. */
export interface AgentSource {
  id: string;
  score: number;
}
