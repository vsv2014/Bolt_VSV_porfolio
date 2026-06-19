import { Code2, Globe, Database, Brain, Server, ChartBar, Sparkles, FlaskConical } from 'lucide-react';
import type { SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    name: 'Languages',
    icon: Code2,
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'Bash', 'C', 'C++', 'MATLAB'],
  },
  {
    name: 'Frontend',
    icon: Globe,
    skills: ['React', 'Next.js', 'Angular', 'RxJS', 'NgRx', 'Redux', 'Module Federation', 'Three.js', 'Monaco', 'D3.js', 'Tailwind'],
  },
  {
    name: 'Backend & APIs',
    icon: Server,
    skills: ['Node.js', 'Express', 'Spring Boot', 'REST', 'GraphQL', 'WebSockets', 'Socket.IO', 'OAuth2', 'JWT', 'Microservices'],
  },
  {
    name: 'Data & Messaging',
    icon: Database,
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Kafka', 'BullMQ', 'Restate'],
  },
  {
    name: 'AI & Conversational',
    icon: Sparkles,
    skills: ['OpenAI', 'Anthropic', 'Azure AI', 'RAG pipelines', 'MCP', 'LLM tool-use', 'Docling OCR', 'ASR/TTS', 'Prompt engineering'],
  },
  {
    name: 'Cloud & DevOps',
    icon: Brain,
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Helm', 'ArgoCD', 'Jenkins', 'Grafana', 'Prometheus'],
  },
  {
    name: 'Testing & Architecture',
    icon: FlaskConical,
    skills: ['Jest', 'Vitest', 'Playwright', 'System Design', 'Design Patterns', 'SOLID'],
  },
  {
    name: 'Data Science',
    icon: ChartBar,
    skills: ['Pandas', 'NumPy', 'scikit-learn', 'OpenCV', 'Matplotlib', 'QGIS'],
  },
];
