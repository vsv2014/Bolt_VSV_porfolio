import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    role: 'Software Engineer (SDE 2)',
    company: 'Kore.ai',
    period: 'Jul 2022 — Present',
    location: 'Hyderabad, India',
    summary:
      'AI-for-Process team — building AI-native distributed systems: agent platforms, durable workflow engines and conversational-AI products shipped to 1,000+ enterprise tenants. Rapid promotion to SDE 2, among the fastest in cohort.',
    achievements: [
      'Owned the ABL Workflow Canvas end to end — Monaco IntelliSense, ELK auto-layout, live WebSocket debug — powering 15+ node-type AI workflows across 50+ connectors.',
      'Led distributed frontend across 4 Angular microfrontends (Module Federation, 5,800+ files on Nx) shipped to GA at enterprise scale.',
      'Architected a document-processing pipeline across 4 OCR engines (Docling, Azure, OpenAI, Anthropic) for files up to 512 MB — recognised with the Kore.ai Global Spotlight.',
      'Cut the WebSDK bundle 60% (2.3 MB → 920 KB) across 1,000+ tenants and shipped 350+ production fixes.',
      'Built a contact-center platform for 10,000+ concurrent agents; LLM summarization lifted CSAT by 40%.',
      'Shipped SmartAssist AI contact-center features, improving query-resolution time by ~40%.',
      'Built modular UI components for the Unified-XO bot-builder platform.',
      'Developed the Proactive Web Campaigns system with rule-based targeting.',
      'Created an automated Outbound Campaign Dialer with predictive analytics.',
      'Led Web SDK debugging and resolved 120+ customer tickets in a single quarter.',
    ],
    stack: ['TypeScript', 'Next.js', 'Angular', 'Node.js', 'Restate', 'Kafka', 'Kubernetes', 'MongoDB', 'WebSocket', 'AI/ML'],
  },
  {
    role: 'Research Assistant',
    company: 'Lab for Spatial Informatics, IIIT-H',
    period: 'Jan 2021 — Jan 2024',
    location: 'Hyderabad, India',
    summary: 'Environmental monitoring and water-quality analysis research.',
    achievements: [
      'Published research on dissolved-oxygen saturation in the Krishna River Basin.',
      'Built ML regression models for water-temperature and quality prediction.',
      'Developed QGIS-based watershed-delineation tooling.',
      'Designed data pipelines for large-scale environmental monitoring.',
    ],
    stack: ['Python', 'MATLAB', 'GIS', 'Machine Learning', 'Data Analysis'],
  },
  {
    role: 'Web Developer',
    company: 'Sri Satya Sai Vidyalayam',
    period: 'Jul 2020 — Sep 2020',
    location: 'Hyderabad, India',
    summary: 'Built an online-classes platform during the COVID-19 pandemic.',
    achievements: [
      'Delivered a complete online-learning platform from scratch.',
      'Integrated video conferencing and a secure authentication system.',
      'Designed an intuitive interface for teachers and students.',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'OAuth'],
  },
];
