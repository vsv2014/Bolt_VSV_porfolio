export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  impact: string;
  imageUrl: string;
  category: 'professional' | 'academic' | 'personal';
  demoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number;
  icon: string;
}