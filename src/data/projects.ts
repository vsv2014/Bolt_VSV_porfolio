import type { Project } from '@/types';

// Add `githubUrl` / `demoUrl` to a project to surface its links in the UI.
// Professional entries follow the current résumé's project phases; the personal
// entries are solo engineering builds (explicitly not claims of adoption).
export const projects: Project[] = [
  {
    title: 'Artemis — Agentic AI Workflow Platform',
    category: 'professional',
    description:
      'Multi-tenant agent platform spanning Studio authoring, workflow execution, MCP/tools and connectors, durable Restate orchestration, triggers and runtime integrations. Built the authoring surface — Monaco IntelliSense over agent context, ELK auto-layout for multi-handle graphs, WebSocket streaming of step execution — plus engine internals: expression resolution, step-context schemas, output-mapping validation, function execution, triggers and continuation/resume handling.',
    impact:
      'Replay-safe execution across Studio, Runtime, Workflow Engine and Connector boundaries; 50+ third-party services exposed as agent-callable MCP capabilities with typed tool contracts.',
    stack: ['Next.js', 'TypeScript', 'Monaco', 'ELK.js', 'Restate', 'Express', 'MongoDB', 'Kafka', 'Kubernetes'],
  },
  {
    title: 'Durable Execution & Reliability Layer',
    category: 'professional',
    description:
      'The reliability spine of Artemis: Redis atomic queue claim and deduplication, BullMQ continuation workers, scheduler reconciliation watchdogs, Mongo execution persistence with a transactional outbox, bounded retries, durable timers, recovery and reconciliation — all tenant-aware.',
    impact:
      'Replay-safe, self-healing execution with idempotency, backpressure and failure recovery; service-token JWT, authorization boundaries, correlation IDs and structured errors, covered with Vitest.',
    stack: ['TypeScript', 'Restate', 'Redis', 'BullMQ', 'MongoDB', 'Kafka', 'Vitest'],
  },
  {
    title: 'ProcessAI — Generative AI Studio',
    category: 'professional',
    description:
      'Led distributed frontend architecture across four Angular microfrontends in an Nx monorepo with Module Federation for Kore.ai’s generative-AI studio. Built a visual flow designer with 15+ node categories, stepwise debugging and live WebSocket monitoring — including LLM nodes for designing voice and chat agents.',
    impact: 'Shipped to GA at enterprise scale with independent deployment pipelines across four teams.',
    stack: ['Angular', 'Nx', 'Module Federation', 'ReteJS', 'Canvas API', 'NgRx', 'WebSockets'],
  },
  {
    title: 'Document Intelligence & Browser Automation',
    category: 'professional',
    description:
      'Four OCR providers — Docling, Azure, OpenAI and Anthropic — with confidence-based routing by file type for PDF, DOCX and PPTX up to 512 MB. Delivered Browser Automation Studio with AI instruction parsing, a custom Quill Delta-API editor, variable highlighting, undo/redo and cross-browser stability, plus a Kubernetes pod-deployment wizard with 1–10 replica autoscaling.',
    impact: 'Internal extraction accuracy 75% → 91%; Kore.ai Global Spotlight, January 2026.',
    stack: ['Angular', 'Docling', 'Azure AI', 'OpenAI', 'Anthropic', 'Quill', 'Kubernetes'],
  },
  {
    title: 'WebSDK Performance & XO Platform',
    category: 'professional',
    description:
      'Cut the AI chat-agent WebSDK bundle with route-level code splitting and lazy loading across 15+ modules, and built Proactive Web Campaigns with rule-based targeting, goal tracking and template selection. Created the Unified-XO Angular component library (25+ reusable Material components) and rebuilt the modular Bot Builder UI.',
    impact: '2.3 MB → 920 KB (60%) across 1,000+ tenants; agent setup 2 h → 15 min (8×); deploy time −60%, MTTD −35%.',
    stack: ['Angular', 'TypeScript', 'Webpack', 'Angular Material', 'Grafana', 'Prometheus', 'Jenkins'],
  },
  {
    title: 'SmartAssist — AI Contact Center',
    category: 'professional',
    description:
      'Enterprise AI contact centre serving 10,000+ concurrent agents at peak across WhatsApp, Telegram, Microsoft Teams and voice. Built ASR/TTS pipelines, intent detection, entity extraction and multi-turn dialogue management, with low-latency LLM routing, summarisation and sentiment analysis.',
    impact: 'Improved CSAT and reduced post-call documentation time for production agents.',
    stack: ['Angular', 'Node.js', 'MongoDB', 'Redis', 'OpenSearch', 'Trino/Presto', 'Kafka', 'RabbitMQ'],
  },
  {
    title: 'Campaign Dialer — Outbound Voice Bots',
    category: 'professional',
    description:
      'Campaign management and operator UI supporting 10,000+ concurrent calls on event-driven microservices. Shipped Progressive/Predictive dialing, DNC list management, caller ID, calling hours, retry mechanisms and disposition-code handling, with D3.js dashboards for pickup, abandon, ROI and agent metrics.',
    impact: 'LLM summarisation and sentiment analysis on live calls; mentored engineers and ran code reviews.',
    stack: ['Angular', 'NgRx', 'D3.js', 'WebSockets', 'Kafka', 'RabbitMQ'],
  },

  // ---- Solo engineering builds (evenings/weekends — builds, not adoption claims) ----
  {
    title: 'Voice AI Observability Copilot',
    category: 'personal',
    description:
      'Transcript ingestion with configurable success criteria, deterministic and LLM scoring, issue drill-down, severity gating, prompt/script recommendations, adversarial synthetic-call testing, mock/live adapters and Gemini/Groq fallback.',
    stack: ['Node.js', 'Vue', 'Gemini', 'Groq', 'OAuth/SSO'],
  },
  {
    title: 'MockMate — AI Mock Interview Simulator',
    category: 'personal',
    description:
      'Multi-turn voice simulator with tool-calling LLM evaluation, LangGraph rubric grading for correctness, depth and communication, adaptive difficulty, streaming inference, an OpenAI/Anthropic/Gemini/Groq gateway and Deepgram/Whisper STT.',
    impact: 'Ships as signed, notarized Electron builds with silent auto-update.',
    stack: ['Electron', 'React', 'Node.js', 'LangGraph', 'Deepgram'],
  },
  {
    title: 'AI Knowledge Inbox',
    category: 'personal',
    description:
      'RAG system for notes and URLs with URL normalization, concurrent-safe deduplication, transactional chunk reindexing, relevance thresholds, cited snippets and a layered route/service/repository architecture.',
    stack: ['TypeScript', 'SQLite', 'Embeddings', 'RAG'],
  },
  {
    title: 'ShopSphere — Agentic Refund Copilot',
    category: 'personal',
    description:
      'Policy-guarded function-calling agent over four validation tools with per-step audit persistence, admin visibility, deterministic override of unsafe approvals and Whisper voice input.',
    stack: ['React', 'tRPC', 'MySQL', 'Drizzle', 'Groq'],
  },
  {
    title: 'Emma — AI Voice Receptionist',
    category: 'personal',
    description:
      'STT → tool-calling LLM → TTS pipeline for routine clinical enquiries, with Gemini/Groq/mock failover, mock clinical-system tools and an offline fallback path.',
    stack: ['FastAPI', 'Web Speech API', 'Gemini', 'Groq'],
  },
  {
    title: 'Tax Document Classifier',
    category: 'personal',
    description:
      'Page-aware hybrid classifier using embedded-text extraction, Tesseract OCR fallback, ambiguity-based processing and rule-based classification.',
    impact: '92.9% page-level accuracy across a 70-page evaluation set.',
    stack: ['Python', 'OCR', 'Document AI', 'Evaluation'],
  },
  {
    title: 'Opptra Pricing Signal',
    category: 'personal',
    description:
      'Deterministic pricing and margin-signal engine using priority queues, margin floors, strict validation and Groq/OpenAI/Gemini fallback — with AI constrained to explaining validated business decisions.',
    stack: ['TypeScript', 'Node.js', 'LLM providers'],
  },
  {
    title: 'Incubyte Salary Management',
    category: 'personal',
    description:
      'Full-stack salary-management platform with append-only salary history, analytics, CSV export, JWT authentication, shared Zod validation and Docker Compose.',
    impact: '54 API/unit tests against a 10,000-employee dataset.',
    stack: ['TypeScript', 'Node.js', 'Express', 'Next.js', 'Prisma', 'SQLite', 'Docker'],
  },
  {
    title: 'Context-Aware Message Agent',
    category: 'personal',
    description:
      'Deterministic JSONL processor with consent-gated inference, structured JSON output, validation and automated tests.',
    stack: ['TypeScript', 'Node.js', 'Safety controls', 'Testing'],
  },
  {
    title: 'Trupeer Player',
    category: 'personal',
    description:
      'Interactive video player with synchronized transcript navigation, word-level skipping, custom Three.js visual effects and responsive controls.',
    stack: ['Next.js', 'TypeScript', 'React', 'Three.js', 'Shaders'],
  },

  // ---- Research & academic ----
  {
    title: 'Krishna Basin Water-Temperature Modelling',
    category: 'research',
    description:
      'ML pipeline for river water-temperature and dissolved-oxygen modelling on the Krishna Basin dataset — regression and gradient boosting in Python (Air2Stream).',
    impact: 'Published 2023; predictive models for environmental monitoring.',
    stack: ['Python', 'Machine Learning', 'Air2Stream'],
  },
  {
    title: 'Sewage Treatment Analysis (339 MLD)',
    category: 'research',
    description: 'Capacity optimisation for a 339 MLD sewage-treatment plant using ML-based spatial demand forecasting.',
    impact: 'Peer-reviewed; surfaced optimisation opportunities for plant operations.',
    stack: ['Python', 'Machine Learning', 'Spatial Analysis'],
  },
  {
    title: 'Watershed Delineation Pipeline',
    category: 'research',
    description: 'Automated watershed delineation in QGIS + Python, replacing a manual, specialist GIS workflow.',
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
    description: 'Real-time hand-tracking pipeline built with classical computer vision.',
    stack: ['Python', 'OpenCV', 'Computer Vision'],
  },
  {
    title: 'UNIX Shell in C',
    category: 'academic',
    description: 'Implemented a UNIX shell — process control, I/O redirection and signal handling.',
    stack: ['C', 'Operating Systems', 'Systems Programming'],
  },
];
