import type { Project } from '@/types';

// Add `githubUrl` / `demoUrl` to a project to surface its links in the UI.
export const projects: Project[] = [
  {
    title: 'Artemis — Agentic Workflow Platform',
    category: 'professional',
    description:
      'Kore.ai’s declarative agentic-AI workflow platform — Monaco canvas with agent-context IntelliSense, ELK auto-layout, expression engine, and a live WebSocket debug panel, over a Restate durable-execution runtime.',
    impact: 'Powers 15+ node-type workflows; MCP surface exposes 50+ third-party services as agent-callable tools.',
    stack: ['Next.js', 'TypeScript', 'Monaco', 'Restate', 'Kafka', 'MCP', 'Kubernetes'],
  },
  {
    title: 'ProcessAI Microfrontend & Visual Flow Designer',
    category: 'professional',
    description:
      'Drag-and-drop visual flow designer across 4 Angular microfrontends with 15+ node categories (LLM, API, loops, human-in-loop, browser automation).',
    impact: '5,800+ files on an Nx monorepo with independent deploys, shipped to GA at enterprise scale.',
    stack: ['Angular', 'Nx', 'Module Federation', 'ReteJS', 'NgRx', 'Canvas API'],
  },
  {
    title: 'Document Intelligence & Browser Automation',
    category: 'professional',
    description:
      'Document-processing pipeline plus a browser-automation studio with a custom Quill Delta editor, AI instruction parser and pod-deployment wizard.',
    impact: '4-engine OCR with confidence-based routing lifted extraction accuracy 75% → 91% — Kore.ai Global Spotlight (Jan 2026).',
    stack: ['Angular', 'Quill', 'Socket.IO', 'AG-Grid', 'Docker', 'Kubernetes'],
  },
  {
    title: 'WebSDK Performance Optimization',
    category: 'professional',
    description: 'Route-level code splitting and lazy loading across 15+ modules of the embeddable WebSDK.',
    impact: 'Bundle cut 60% (2.3 MB → 920 KB) for 1,000+ tenants — Shining Star Award, Q3 2024.',
    stack: ['JavaScript', 'Webpack', 'Code Splitting', 'Lazy Loading'],
  },
  {
    title: 'SmartAssist AI',
    category: 'professional',
    description: 'AI-native contact-center solution with conversation routing and agent assist.',
    impact: 'Improved query-resolution time and agent efficiency by ~40%.',
    stack: ['Angular', 'AI/ML', 'Node.js', 'WebSocket'],
  },
  {
    title: 'Unified-XO Platform',
    category: 'professional',
    description: 'Modular bot-builder platform powering enterprise virtual assistants.',
    impact: 'Streamlined virtual-assistant development with reusable UI components.',
    stack: ['Angular', 'TypeScript', 'Node.js', 'WebSocket'],
  },
  {
    title: 'Proactive Web Campaigns',
    category: 'professional',
    description: 'Campaign-management system with templates and rule-based targeting.',
    impact: 'Boosted campaign effectiveness through precise audience targeting.',
    stack: ['Angular', 'Node.js', 'MongoDB', 'WebSocket'],
  },
  {
    title: 'Outbound Campaign Dialer',
    category: 'professional',
    description: 'Automated dialing system with predictive analytics for outreach.',
    impact: 'Increased agent productivity by ~40% and improved connect rates.',
    stack: ['Angular', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Sewage Treatment Analysis',
    category: 'research',
    description: 'ML-based performance analysis of a 339 MLD sewage-treatment plant.',
    impact: 'Surfaced optimisation opportunities for plant operations.',
    stack: ['Python', 'Machine Learning', 'R'],
  },
  {
    title: 'River Water-Temperature Estimation',
    category: 'research',
    description: 'Regression models predicting river temperature in the Krishna Basin.',
    impact: 'Delivered accurate predictions for environmental monitoring.',
    stack: ['MATLAB', 'Python', 'Machine Learning'],
  },
  {
    title: 'Watershed Delineation Model',
    category: 'research',
    description: 'GIS-based tool automating watershed delineation and analysis.',
    impact: 'Streamlined a previously manual, specialist workflow.',
    stack: ['QGIS', 'Python', 'Spatial Analysis'],
  },
  {
    title: 'MergeSort Virtual Lab',
    category: 'academic',
    description: 'Interactive, step-by-step visualisation for learning sorting algorithms.',
    impact: 'Used by 500+ students with improved learning outcomes.',
    stack: ['React', 'TypeScript', 'D3.js'],
  },
  {
    title: 'Ultimate Tic-Tac-Toe AI',
    category: 'academic',
    description: 'Game-playing bot using minimax with alpha-beta pruning.',
    impact: 'Achieved an ~85% win rate against human players.',
    stack: ['Python', 'TensorFlow', 'Flask'],
  },
  {
    title: 'Paraphrase Detection (NLP)',
    category: 'academic',
    description: 'Semantic paraphrase detection using Word Mover’s Distance over word embeddings.',
    stack: ['Python', 'NLP', 'Word Embeddings'],
  },
  {
    title: 'Real-time Hand Tracking',
    category: 'academic',
    description: 'Engineered a real-time hand-tracking pipeline with classical computer vision.',
    stack: ['Python', 'OpenCV', 'Computer Vision'],
  },
  {
    title: 'UNIX Shell in C',
    category: 'academic',
    description: 'Implemented a UNIX shell — process control, I/O redirection and signal handling.',
    stack: ['C', 'Operating Systems', 'Systems Programming'],
  },
  {
    title: 'MockMate — AI Mock-Interview Simulator',
    category: 'personal',
    description:
      'Multi-turn voice practice simulator with a LangGraph rubric-grader scoring answers on correctness, depth and communication, plus adaptive difficulty and a multi-provider LLM gateway.',
    impact: 'Cross-platform Electron app with streaming inference and real-time STT (Deepgram/Whisper).',
    stack: ['Electron', 'LangGraph', 'OpenAI', 'Anthropic', 'Deepgram'],
  },
  {
    title: 'ShopSphere — Agentic Refund Copilot',
    category: 'personal',
    description:
      'Full-stack AI agent that processes refunds via a function-calling loop over 4 validation tools, with per-step reasoning logged and a defensive policy-guard overriding any unsafe LLM approval.',
    impact: 'Voice-input refunds with auditable, policy-safe agent decisions.',
    stack: ['React', 'tRPC', 'Drizzle', 'MySQL', 'Groq'],
  },
  {
    title: 'Emma — AI Voice Receptionist',
    category: 'personal',
    description:
      'Voice-AI pipeline (STT → tool-calling LLM → TTS) for routine clinical enquiries, with multi-provider failover and an offline mock-brain fallback.',
    impact: 'Resilient real-time voice agent with graceful provider degradation.',
    stack: ['FastAPI', 'Web Speech API', 'Gemini', 'Groq'],
  },
];
