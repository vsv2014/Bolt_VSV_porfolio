import type { Project } from '@/types';

// Add `githubUrl` / `demoUrl` to a project to surface its links in the UI.
// Naming and metrics follow the current résumé.
export const projects: Project[] = [
  {
    title: 'ABL Platform — Studio, Workflow Engine & Runtime',
    category: 'professional',
    description:
      'Kore.ai’s agentic-workflow platform. Owned the Workflow Canvas end to end — Monaco {{context.}} IntelliSense, ELK port-constraint auto-layout for multi-handle nodes, searchable Expression Browser, deep-search JSON viewer and a live debug panel streaming step logs over WebSocket. Also shipped Integration Detail Panel, Auth Profiles, Connection Catalog and Trigger UI (cron, webhook, app), plus engine internals: expression resolver, step-context schema, output-mapping validator, function executor, trigger engine and the reverse-proxy bridge from Runtime to Restate.',
    impact:
      'Powers 15+ node-type AI workflows. OAuth2 onboarding across 50+ third-party connectors with MCP-based integrations; cross-service JWT contract covered end-to-end with Vitest.',
    stack: ['Next.js', 'TypeScript', 'Monaco', 'ELK.js', 'Express', 'MongoDB', 'Kafka', 'Restate', 'Kubernetes'],
  },
  {
    title: 'ProcessAI Microfrontend & Visual Flow Designer',
    category: 'professional',
    description:
      'Distributed frontend architecture across 4 Angular microfrontends with Module Federation for the ProcessAI platform — cross-app communication, shared state hydration and independent deployment pipelines. Built the drag-and-drop Visual Flow Designer with 15+ node categories, including LLM nodes for generative-AI voice and chat agents: custom prompt design, journey branching, conditional flows and human-in-the-loop handoffs.',
    impact: '5,800+ files on an Nx monorepo, shipped to GA at enterprise scale — led across 4 teams.',
    stack: ['Angular', 'Nx', 'Module Federation', 'ReteJS', 'NgRx', 'Canvas API', 'WebSockets'],
  },
  {
    title: 'Document Intelligence & Browser Automation',
    category: 'professional',
    description:
      'Document-processing pipeline across 4 OCR engines (Docling, Azure, OpenAI, Anthropic) with intelligent provider routing and prompt engineering for structured AI outputs across PDF, DOCX and PPTX up to 512 MB. Delivered the Browser Automation Studio with a custom Quill Delta-API editor, AI instruction parser, live variable highlighting and undo/redo, plus a pod-deployment wizard with resource planning, simulation, auto-scaling 1 → 10 replicas and full audit history.',
    impact: 'Extraction accuracy 75% → 91%; Kore.ai Global Spotlight (Jan 2026) for the Browser Automation UI.',
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
    title: 'SmartAssist Contact Center Platform',
    category: 'professional',
    description:
      'Enterprise contact centre serving 10,000+ concurrent agents across WhatsApp, Telegram and Microsoft Teams, with real-time chat, voice and email channels. Designed conversational AI journeys on Kore.ai’s bot platform — ASR/TTS pipelines, intent detection, entity extraction and LLM-powered multi-turn dialogue management — and tuned routing and queues for sub-200 ms agent assignment.',
    impact: 'LLM summarisation lifted CSAT 40% and cut post-call documentation time 40%.',
    stack: ['Angular', 'NgRx', 'WebSockets', 'Angular Material', 'Kore.ai XO', 'ASR/TTS'],
  },
  {
    title: 'Campaign Dialer, Unified-XO & Bot Builder',
    category: 'professional',
    description:
      'Voice-bot outbound campaigns supporting 10,000+ concurrent calls on event-driven microservices, with D3.js dashboards for pickup/abandon rates and ROI, and LLMs for real-time call summarisation, sentiment analysis and intent recognition. Rebuilt the Bot Builder UI with 25+ reusable Angular Material components standardised across 3 product suites, and centralised logging with Grafana/Prometheus over hardened Jenkins + Docker CI/CD.',
    impact: 'Workflow setup 2 hours → 15 minutes (8×); deployment time cut 60% and MTTD 35%.',
    stack: ['Angular', 'NgRx', 'D3.js', 'WebSockets', 'Jenkins', 'Docker', 'Grafana'],
  },
  {
    title: 'Sewage Treatment Analysis (339 MLD)',
    category: 'research',
    description:
      'ML-based capacity optimisation for a 339 MLD sewage-treatment plant, using spatial demand forecasting and statistical analysis of plant performance.',
    impact: 'Published as a peer-reviewed analysis; surfaced optimisation opportunities for plant operations.',
    stack: ['Python', 'Machine Learning', 'Spatial Analysis'],
  },
  {
    title: 'Krishna Basin Water-Temperature Modelling',
    category: 'research',
    description:
      'ML pipeline for river water-temperature and dissolved-oxygen modelling on the Krishna Basin dataset — regression and gradient-boosting models in Python.',
    impact: 'Published in 2023 (Air2Stream); delivered predictive models for environmental monitoring.',
    stack: ['Python', 'MATLAB', 'Machine Learning', 'Air2Stream'],
  },
  {
    title: 'Watershed Delineation Pipeline',
    category: 'research',
    description: 'Automated watershed delineation in QGIS + Python, replacing a manual, specialist GIS workflow.',
    impact: 'Streamlined a previously manual GIS analysis into a repeatable pipeline.',
    stack: ['QGIS', 'Python', 'Spatial Analysis'],
  },
  {
    title: 'Paraphrase Detection with Word Mover’s Distance',
    category: 'academic',
    description: 'Semantic paraphrase detection over word embeddings using Word Mover’s Distance.',
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
    title: 'MergeSort Virtual Lab',
    category: 'academic',
    description: 'Interactive, step-by-step visualisation for learning sorting algorithms.',
    impact: 'Used by 500+ students with improved learning outcomes.',
    stack: ['React', 'TypeScript', 'D3.js'],
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
