import type { AgentDoc } from '@/types';

/**
 * Knowledge base for the "Ask my agent" console.
 *
 * Everything here is derived from the current résumé — the console is a scripted
 * simulation running in the browser (no API key, no network calls), not a live
 * LLM. Swap this array for a real endpoint if you ever want to wire it up.
 */
export const agentDocs: AgentDoc[] = [
  {
    id: 'who-is-vsv',
    source: 'data/site.ts#profile',
    keywords: ['who is', 'about', 'summary', 'background', 'introduce', 'overview', 'profile', 'bio', 'yourself', 'tell me'],
    answer:
      'Santhosh Veerannapet is a software engineer at Kore.ai in Hyderabad — SDE 2, Grade A2 since December 2024, promoted Associate SWE → SWE → SDE 2 among the fastest in his cohort. 4+ years building production enterprise AI: agentic workflow platforms with durable execution, MCP and tool calling, typed authorization-aware integrations, voice and contact-centre AI, and multi-tenant systems serving 1,000+ tenants. TypeScript/Node.js services plus hands-on Python/FastAPI, Angular/React/Next.js, Kafka/RabbitMQ, MongoDB/MySQL/Redis, Kubernetes and AWS/Azure.',
    tool: { name: 'get_profile', args: 'id="santhosh"', detail: 'resolved 1 profile · 4+ years' },
  },
  {
    id: 'recognition',
    source: 'data/awards.ts',
    keywords: ['recognition', 'recognised', 'recognized', 'award', 'awards', 'honour', 'honor', 'spotlight', 'shining star', 'promotion', 'achievement', 'achievements', 'trophy', 'impressive', 'stand out', 'exceptional', 'grade'],
    answer:
      'Two Kore.ai Global Spotlight Awards: July 2026 for rapidly ramping up on XOCC and Artemis production support, handling customer issues and helping establish Artemis platform support readiness, and January 2026 for the Browser Automation UI. Plus the Shining Star Award (Q3 2024) and Outstanding Performance Award (2024) for a 60% WebSDK optimisation, 350+ production fixes and 120+ enterprise tickets in one quarter — and a rapid promotion from Associate Software Engineer to SDE 2 (Grade A2) among the fastest in the cohort. Earlier: JEE Main 2016 AIR 5460, top 0.5% of 1.2M+ candidates.',
    tool: { name: 'list_awards', args: 'order="impact"', detail: '10 awards · 2 Global Spotlights' },
  },
  {
    id: 'ai-systems',
    source: 'data/projects.ts#ai',
    keywords: ['ai', 'llm', 'agent', 'agentic', 'rag', 'mcp', 'tool use', 'tool-use', 'tool calling', 'function calling', 'openai', 'anthropic', 'gemini', 'groq', 'azure ai', 'bedrock', 'langgraph', 'langchain', 'vector', 'embedding', 'prompt', 'artificial intelligence', 'genai', 'generative', 'guardrails', 'gateway'],
    answer:
      'His AI work is production, not demos: Artemis — an agentic workflow platform with durable Restate orchestration, replay-safe execution and MCP integrations exposing 50+ third-party services as agent-callable capabilities; LLM gateways with guardrails and AI evaluation; RAG with embeddings and vector search; four OCR providers with confidence-based routing (75% → 91% accuracy); and voice/chat agents with ASR/TTS, intent detection, entity extraction and multi-turn dialogue. A principle he applies: keep permissions, business rules and irreversible operations in typed backend services instead of prompts.',
    tool: { name: 'list_ai_systems', args: 'env="production"', detail: 'matched 6 systems · 5 LLM providers' },
  },
  {
    id: 'artemis',
    source: 'data/projects.ts#artemis',
    keywords: ['artemis', 'workflow engine', 'workflow canvas', 'studio', 'runtime', 'durable execution', 'replay', 'replay-safe', 'monaco', 'restate', 'intellisense', 'expression', 'debug panel', 'web socket', 'websocket', 'elk', 'connector', 'trigger', 'xocc', 'support'],
    answer:
      'Artemis is Kore.ai’s production agentic AI workflow platform — Studio authoring, workflow execution, MCP/tools and connectors, durable Restate orchestration, triggers and runtime integrations. Santhosh engineered core capabilities supporting 15+ node types and replay-safe execution across Studio, Runtime, Workflow Engine and Connector boundaries: expression resolution, step-context schemas, output-mapping validation, function execution, triggers and continuation/resume handling. On the authoring side he built the Next.js/TypeScript debugging surface — Monaco IntelliSense over agent context, ELK auto-layout for multi-handle graphs and WebSocket streaming of step execution. In 2026 he moved into product support, ramping up on XOCC and Artemis tickets and joining the pilot team establishing Artemis support readiness — which earned a Global Spotlight in July 2026.',
    tool: { name: 'describe_artifact', args: 'name="Artemis"', detail: '15+ node types · replay-safe · MCP surface' },
  },
  {
    id: 'reliability',
    source: 'data/projects.ts#durable',
    keywords: ['reliability', 'reliable', 'durable', 'idempotency', 'idempotent', 'outbox', 'transactional outbox', 'retry', 'retries', 'backoff', 'watchdog', 'reconciliation', 'recovery', 'backpressure', 'deduplication', 'atomic', 'bullmq', 'redis', 'resilience', 'fault', 'failure', 'scale', 'tenant isolation', 'noisy neighbour'],
    answer:
      'Reliability is where he does his best work. For Artemis he designed the layer that keeps long-running agent workflows correct: Redis atomic queue claim and deduplication, BullMQ continuation workers, scheduler reconciliation watchdogs, Mongo execution persistence with a transactional outbox, bounded retries with backoff, durable timers, recovery and reconciliation — all tenant-aware. Around it: service-token JWT authentication, authorization boundaries, correlation IDs, structured errors, data-flow audits and Vitest coverage. He also works with consumer groups, idempotency, fan-out/fan-in, eventual consistency, rate limits and noisy-neighbour controls.',
    tool: { name: 'inspect_reliability', args: 'platform="artemis"', detail: 'outbox · watchdogs · bounded retries' },
  },
  {
    id: 'processai',
    source: 'data/projects.ts#processai',
    keywords: ['processai', 'process ai', 'generative ai studio', 'flow designer', 'microfrontend', 'angular', 'module federation', 'nx', 'ngrx', 'drag and drop', 'retejs', 'canvas', 'debugging'],
    answer:
      'ProcessAI is Kore.ai’s generative-AI studio. Santhosh led distributed frontend architecture across four Angular microfrontends in an Nx monorepo with Module Federation, and built the visual flow designer with 15+ node categories, stepwise debugging and live WebSocket monitoring — including LLM nodes for designing voice and chat agents. It shipped to GA at enterprise scale with independent deployment pipelines, and the work tied together four engineering teams.',
    tool: { name: 'describe_artifact', args: 'name="ProcessAI"', detail: '4 microfrontends · 15+ node categories · GA' },
  },
  {
    id: 'document-intelligence',
    source: 'data/experience.ts#processai',
    keywords: ['document', 'documents', 'ocr', 'docling', 'extraction', 'browser automation', 'quill', 'pdf', 'docx', 'pptx', '512', 'pod deployment', 'kubernetes wizard', 'tax'],
    answer:
      'Document intelligence: a pipeline across four OCR providers — Docling, Azure, OpenAI and Anthropic — with confidence-based routing by file type, improving internal extraction accuracy from 75% to 91% for PDF, DOCX and PPTX files up to 512 MB. Alongside it, Browser Automation Studio: AI instruction parsing, a custom Quill Delta-API editor, variable highlighting, undo/redo and cross-browser stability — recognised with the Kore.ai Global Spotlight in January 2026. He also shipped a Kubernetes pod-deployment wizard with 1–10 replica autoscaling, and his own Tax Document Classifier reaching 92.9% page-level accuracy.',
    tool: { name: 'get_metrics', args: 'feature="doc-intel"', detail: '75% → 91% accuracy · 512 MB ceiling' },
  },
  {
    id: 'voice-and-conversational',
    source: 'data/skills.ts#voice',
    keywords: ['voice', 'asr', 'tts', 'speech', 'whisper', 'deepgram', 'conversational', 'contact centre', 'contact center', 'smartassist', 'call center', 'bot platform', 'bot builder', 'chatbot', 'ivr', 'dialer', 'intent', 'entity', 'csat', 'whatsapp', 'telegram', 'teams'],
    answer:
      'Voice and conversational AI run through his whole stack: ASR/TTS with Deepgram, Whisper and the Web Speech API; intent detection, entity extraction and multi-turn dialogue; and conversational journey design on Kore.ai XO / SmartAssist. He shipped features for an enterprise AI contact centre serving 10,000+ concurrent agents at peak across WhatsApp, Telegram, Microsoft Teams and voice — with low-latency LLM routing, summarisation and sentiment analysis improving CSAT and cutting post-call documentation. Before that, an outbound Campaign Dialer supporting 10,000+ concurrent calls with Progressive/Predictive dialing.',
    tool: { name: 'list_systems', args: 'domain="voice"', detail: 'ASR/TTS · contact centre · dialer · XO' },
  },
  {
    id: 'frontend',
    source: 'data/skills.ts#frontend',
    keywords: ['frontend', 'front-end', 'front end', 'ui', 'ux', 'react', 'next.js', 'nextjs', 'angular', 'tailwind', 'shadcn', 'design system', 'performance', 'monaco', 'elk.js', 'three.js', 'd3', 'electron', 'quill', 'rxjs', 'vue'],
    answer:
      'Frontend is a strength: React and Next.js with Angular/RxJS/NgRx at enterprise scale, Nx and Module Federation microfrontends, Monaco Editor and ReteJS for visual tooling, ELK.js auto-layout, Quill Delta editing, D3.js and Three.js for visuals, Electron for desktop, and Tailwind / shadcn/ui / Angular Material for design systems. Proof points: the WebSDK bundle cut 60% (2.3 MB → 920 KB) across 15+ modules for 1,000+ tenants; 25+ reusable Unified-XO components standardised across three product suites; agent setup down from 2 hours to 15 minutes.',
    tool: { name: 'get_metrics', args: 'area="frontend"', detail: 'bundle −60% · 25+ shared components' },
  },
  {
    id: 'backend-and-apis',
    source: 'data/skills.ts#backend',
    keywords: ['backend', 'back-end', 'back end', 'api', 'node', 'node.js', 'express', 'fastapi', 'spring boot', 'java', 'c#', '.net', 'django', 'graphql', 'grpc', 'trpc', 'microservice', 'microservices', 'kafka', 'rabbitmq', 'redis', 'mongodb', 'mysql', 'postgresql', 'restate', 'bullmq', 'websockets', 'socket.io', 'oauth', 'jwt', 'event-driven', 'distributed'],
    answer:
      'Backend: TypeScript/Node.js and Express production services, FastAPI and Python, Java with Spring Boot fundamentals, C#/.NET and ASP.NET Core, Django; REST, tRPC, GraphQL, gRPC and WebSockets/Socket.IO as contracts; MongoDB, MySQL, PostgreSQL, Redis, OpenSearch and Trino/Presto for data; Kafka, RabbitMQ and Redis queues with BullMQ for messaging and durable execution on Restate. Security and distributed-systems depth: OAuth2, JWT and service-to-service auth, schema validation, authorization, idempotency, transactional outbox, retries/backoff, backpressure, fan-out/fan-in, eventual consistency, rate limits, tenant isolation and distributed tracing.',
    tool: { name: 'list_stack', args: 'layer="backend"', detail: '6 runtimes · 6 stores · 4 brokers' },
  },
  {
    id: 'cloud-and-devops',
    source: 'data/skills.ts#cloud',
    keywords: ['cloud', 'devops', 'aws', 'azure', 'gcp', 'docker', 'kubernetes', 'k8s', 'ci/cd', 'ci cd', 'deployment', 'deploy', 'jenkins', 'github actions', 'linux', 'infrastructure', 'observability', 'grafana', 'prometheus', 'elk stack', 'opentelemetry', 'mttd', 'terraform', 'helm', 'argocd', 'lambda', 's3', 'ec2'],
    answer:
      'He ships and operates his own services: AWS (EC2, S3, Lambda) and Azure with GCP exposure, Docker, Kubernetes, Helm and ArgoCD, Jenkins and GitHub Actions pipelines, Linux at the edge, and observability with Prometheus, Grafana, the ELK stack and OpenTelemetry. Concrete results: deployment time cut 60% and MTTD cut 35% by centralising logging and hardening the Jenkins/Docker CI/CD path, on a platform where containerised microfrontends and services deploy independently.',
    tool: { name: 'list_stack', args: 'layer="platform"', detail: '3 clouds · K8s · deploy −60% · MTTD −35%' },
  },
  {
    id: 'impact',
    source: 'data/impact.ts',
    keywords: ['impact', 'impact numbers', 'metrics', 'numbers', 'results', 'how fast', 'how many', 'performance', 'percent', 'improvement', 'kpi', 'roi', 'benchmark', 'before and after'],
    answer:
      'The production ledger: 1,000+ enterprise tenants on the platform; 10,000+ concurrent agents at peak in the contact centre — plus an outbound dialer running 10,000+ concurrent calls; document extraction accuracy lifted 75% → 91% across four OCR providers on files up to 512 MB; the WebSDK bundle cut 60% (2.3 MB → 920 KB) across 15+ modules; agent setup cut from 2 hours to 15 minutes (8×); deployment time down 60% and MTTD down 35%. Platform scope: 50+ third-party services exposed as agent-callable MCP capabilities, 15+ workflow node types with replay-safe execution, and 350+ production fixes shipped.',
    tool: { name: 'get_metrics', args: 'scope="production"', detail: '6 headline metrics · all résumé-traceable' },
  },
  {
    id: 'experience',
    source: 'data/experience.ts',
    keywords: ['experience', 'years', 'work history', 'kore.ai', 'kore', 'career', 'tenure', 'promotion', 'job', 'jobs', 'company', 'companies', 'worked', 'seniority', 'phase', 'phases', 'customers', 'mentoring'],
    answer:
      '4+ years at Kore.ai (Jul 2022 — present), SDE 2 with Grade A2 since December 2024, across five product phases: Campaign Dialer — outbound voice-bot campaigns (Jul 2022–2023); SmartAssist — AI contact centre at 10,000+ concurrent agents (2023–2024); the Kore.ai XO Platform — WebSDK performance, Proactive Web Campaigns and Unified-XO components (2024–2025); ProcessAI — generative-AI studio, document intelligence and browser automation (Sep 2025–Jan 2026); and Artemis — the production agentic workflow platform plus XOCC/Artemis product support (Feb 2026–present). Before Kore.ai: a Research Scholar at IIIT-H’s Lab for Spatial Informatics (2018–2021) and a Web Developer in 2020.',
    tool: { name: 'get_experience', args: 'order="desc"', detail: '5 phases · 4+ years · 1 promotion path' },
  },
  {
    id: 'education',
    source: 'data/education.ts',
    keywords: ['education', 'college', 'university', 'degree', 'cgpa', 'iiit', 'school', 'academic', 'gpa', 'jee', 'entrance', 'board', 'higher secondary', 'ms', 'b.tech', 'coursework', 'civil'],
    answer:
      'IIIT Hyderabad, 2016–2021: dual degree, B.Tech (Civil) + MS by Research (Building Science), CGPA 7.3/10, at one of India’s premier CS research institutes — with the full CS curriculum (DSA in Java, OS, OOP, DBMS, computer networks, ML, AI and software engineering). He entered via JEE Main 2016 AIR 5460, top 0.5% of 1.2M+ candidates, after 98.1% in intermediate and a 9.3/10 GPA with a school-topper spot in mathematics.',
    tool: { name: 'get_education', args: 'include="ranks"', detail: 'CGPA 7.3 · AIR 5460 · 98.1%' },
  },
  {
    id: 'research',
    source: 'data/publications.ts',
    keywords: ['research', 'publication', 'publications', 'paper', 'papers', 'krishna', 'dissolved oxygen', 'water', 'environment', 'environmental', 'air2stream', 'gis', 'qgis', 'published', 'ms thesis', 'sewage', 'watershed', 'researchgate', 'nlp', 'opencv', 'unix shell'],
    answer:
      'Two publications from IIIT-H’s Lab for Spatial Informatics: “Effects of Dissolved Oxygen Saturation & Water Temperature using Air2Stream over Krishna River Basin” (2023, ResearchGate) and “Performance Analysis of 339 MLD Sewage Treatment Plant using ML” (2022, IIIT-H R&D Showcase). Around them: water-temperature modelling with regression and gradient boosting, STP capacity optimisation through spatial demand forecasting, automated watershed delineation with QGIS/Python, NLP paraphrase detection using Word Mover’s Distance over embeddings, real-time hand tracking with OpenCV, and a UNIX shell implemented in C.',
    tool: { name: 'search_publications', args: 'venue="IIIT-H LSI"', detail: '2 papers · research 2018–2021' },
  },
  {
    id: 'solo-projects',
    source: 'data/projects.ts#personal',
    keywords: ['personal project', 'personal projects', 'side project', 'side projects', 'solo', 'weekend', 'projects', 'built', 'portfolio', 'github', 'experiments', 'observability copilot', 'knowledge inbox', 'trupeer', 'incubyte', 'opptra', 'classifier'],
    answer:
      'He builds solo on evenings and weekends to explore agentic-AI patterns end to end — engineering builds, not claims of commercial adoption: Voice AI Observability Copilot (transcript ingestion, deterministic + LLM scoring, adversarial synthetic-call testing), MockMate (LangGraph voice interview simulator with signed/notarized Electron builds), AI Knowledge Inbox (RAG for notes and URLs with transactional chunk reindexing), ShopSphere (policy-guarded refund agent with deterministic overrides), Emma (STT → tool-calling LLM → TTS with provider failover), a Tax Document Classifier at 92.9% page-level accuracy, Opptra Pricing Signal, Incubyte Salary Management (54 tests over a 10,000-employee dataset), a consent-gated Context-Aware Message Agent, and the Trupeer Player with custom Three.js shaders.',
    tool: { name: 'list_projects', args: 'category="personal"', detail: '10 builds · agentic AI patterns' },
  },
  {
    id: 'projects',
    source: 'data/projects.ts',
    keywords: ['project', 'projects', 'shipped', 'case study', 'case studies', 'work samples', 'demo', 'built at work', 'enterprise'],
    answer:
      'Enterprise builds at Kore.ai: Artemis (agentic workflow platform, replay-safe durable execution, 50+ MCP-integrated services), the durable execution and reliability layer behind it, ProcessAI (four Angular microfrontends, visual flow designer), Document Intelligence + Browser Automation (four OCR providers, 75% → 91%), the XO Platform work (WebSDK −60%, Unified-XO components), SmartAssist contact centre (10,000+ concurrent agents) and the Campaign Dialer (10,000+ concurrent calls). Plus 10 solo engineering builds and the research tooling.',
    tool: { name: 'list_projects', args: 'take=10', detail: '7 enterprise · 10 solo · 3 research' },
  },
  {
    id: 'skills',
    source: 'data/skills.ts',
    keywords: ['skill', 'skills', 'stack', 'tech', 'technology', 'technologies', 'tools', 'languages', 'frameworks', 'proficient', 'expertise', 'database', 'databases', 'python', 'typescript', 'patterns', 'solid', 'system design', 'matlab', 'c++'],
    answer:
      'Six groups on the résumé: core engineering (TypeScript, JavaScript, Python, Java, C++, C, SQL, MATLAB, Bash, system design, HLD/LLD, design patterns, mentoring); AI/LLM and agentic systems (OpenAI, Anthropic, Gemini, Groq, Azure AI, LangGraph, RAG, MCP, tool calling, guardrails, evaluation, embeddings, ASR/TTS, Docling OCR, XO/SmartAssist); frontend and product engineering; backend, APIs, security and distributed systems; data, cloud, DevOps, observability and testing; plus a familiarity list with Terraform, Bedrock, Pinecone, RAGAS, FAISS, LangSmith, Go, Rails, MuleSoft/Workato/Boomi and AI dev tools.',
    tool: { name: 'list_stack', args: 'grouped=true', detail: '6 groups · 150+ technologies' },
  },
  {
    id: 'hiring',
    source: 'data/site.ts#contact',
    keywords: ['hire', 'hiring', 'contact', 'email', 'reach', 'available', 'availability', 'resume', 'cv', 'interview', 'relocate', 'relocation', 'remote', 'hybrid', 'notice', 'salary', 'phone', 'call', 'meeting', 'opportunity', 'role', 'opening'],
    answer:
      'He is open to senior AI-platform and full-stack roles. Fastest channel: santhoshvishalveerannapet@gmail.com — or +91 770-277-1465 for a call. The résumé PDF downloads from the hero and LinkedIn (in/santhosh-vishal) is current. Based in Hyderabad, India; happy to discuss remote, hybrid or relocation for the right team.',
    tool: { name: 'get_contact', args: 'channel="all"', detail: 'email · phone · LinkedIn · résumé' },
  },
];

/** Starter prompts rendered as chips inside the console. */
export const suggestedPrompts: string[] = [
  'What has he shipped at Kore.ai?',
  'Tell me about Artemis',
  'How does he handle reliability?',
  'Show me the impact numbers',
  'What is his tech stack?',
  'How do I contact him?',
];
