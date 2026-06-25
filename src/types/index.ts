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
  value: string;
  label: string;
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
