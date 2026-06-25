import { Code2, Globe, Database, Brain, Server, ChartBar, Sparkles, FlaskConical, Rocket } from 'lucide-react';
import type { SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    name: 'AI & LLMs',
    icon: Sparkles,
    skills: ['OpenAI', 'Anthropic', 'Gemini', 'Groq', 'AWS Bedrock', 'LangChain', 'LangGraph', 'MCP', 'RAG', 'RAGAS', 'Pinecone', 'Prompt engineering', 'Agentic workflows'],
  },
  {
    name: 'Voice & Conversational',
    icon: Brain,
    skills: ['Deepgram', 'Whisper', 'ASR/TTS', 'Web Speech API', 'Real-time voice agents', 'Docling OCR', 'Kore.ai XO & SmartAssist'],
  },
  {
    name: 'Frontend',
    icon: Globe,
    skills: ['React', 'Next.js', 'Angular', 'RxJS', 'NgRx', 'Module Federation', 'Three.js', 'Monaco', 'D3.js', 'shadcn/ui', 'Tailwind', 'Electron'],
  },
  {
    name: 'Backend & APIs',
    icon: Server,
    skills: ['Node.js', 'Express', 'FastAPI', 'Spring Boot', 'REST', 'GraphQL', 'tRPC', 'gRPC', 'WebSockets', 'OAuth2', 'JWT', 'Microservices'],
  },
  {
    name: 'Data & Messaging',
    icon: Database,
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'OpenSearch', 'Trino/Presto', 'Kafka', 'RabbitMQ', 'BullMQ', 'Restate'],
  },
  {
    name: 'Cloud & DevOps',
    icon: Code2,
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Helm', 'ArgoCD', 'Jenkins', 'GitHub Actions', 'CI/CD'],
  },
  {
    name: 'Observability & Testing',
    icon: FlaskConical,
    skills: ['Grafana', 'Prometheus', 'OpenTelemetry', 'ELK Stack', 'LangSmith', 'Jest', 'Vitest', 'Playwright'],
  },
  {
    name: 'Data Science',
    icon: ChartBar,
    skills: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'OpenCV', 'QGIS', 'MATLAB'],
  },
  {
    name: 'Currently Expanding',
    icon: Rocket,
    skills: ['C# / .NET', 'Go', 'Rails', 'Django', 'Terraform', 'GCP', 'iPaaS (Workato / Boomi)'],
  },
];
