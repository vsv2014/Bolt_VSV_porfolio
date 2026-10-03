import type { AgentDoc } from '@/types';

/**
 * Knowledge base for the "Ask my agent" console.
 *
 * Everything here is derived from the same résumé data the rest of the site
 * uses — the console is a scripted simulation running in the browser (no API
 * key, no network calls), not a live LLM. Swap this array for a real endpoint
 * if you ever want to wire it up.
 */
export const agentDocs: AgentDoc[] = [
  {
    id: 'who-is-vsv',
    source: 'data/site.ts#profile',
    keywords: ['who is', 'about', 'summary', 'background', 'introduce', 'overview', 'profile', 'bio', 'yourself', 'tell me'],
    answer:
      'Santhosh Veerannapet is a full-stack SDE 2 at Kore.ai in Hyderabad, on the AI-for-Process team. Nearly four years in, he has shipped production LLM systems, agentic-workflow platforms, document intelligence and microfrontends to 1,000+ enterprise tenants — working across React/Next.js/Angular on the front and Node, Restate, Kafka and Kubernetes behind it.',
    tool: { name: 'get_profile', args: 'id="santhosh"', detail: 'resolved 1 profile · 4y experience' },
  },
  {
    id: 'top-1-percent',
    source: 'docs/positioning.md#top-1',
    keywords: ['top 1', 'top1', '1%', 'best', 'rank', 'ranking', 'percentile', 'stand out', 'why you', 'exceptional', 'different', 'unique', 'smart'],
    answer:
      'The short version: top ~0.5% of 1.2M JEE candidates (AIR 5460, 2016), direct entry to IIIT Hyderabad’s flagship dual degree, then the fastest-in-cohort promotion to SDE 2 at Kore.ai. Add the Global Spotlight, the Shining Star award, a 60% bundle win across 1,000+ tenants and two published ML papers — that is the stack behind the top-1% claim.',
    tool: { name: 'rank_evidence', args: 'scope="all"', detail: '5 signals · 2 awards · 1 publication set' },
  },
  {
    id: 'ai-systems',
    source: 'data/projects.ts#artemis',
    keywords: ['ai', 'llm', 'agent', 'agentic', 'rag', 'mcp', 'tool use', 'tool-use', 'openai', 'anthropic', 'gemini', 'bedrock', 'langchain', 'langgraph', 'vector', 'embedding', 'prompt', 'artificial intelligence', 'genai'],
    answer:
      'His AI work is production, not demos: Artemis — a declarative agentic-workflow platform with an MCP surface exposing 50+ third-party services as agent-callable tools; a RAG stack with RAGAS evals over Pinecone; LLM tool-use on OpenAI, Anthropic, Gemini, Groq and Bedrock; and a 4-engine OCR pipeline that lifted extraction accuracy 75% → 91% on documents up to 512 MB.',
    tool: { name: 'list_ai_systems', args: 'env="production"', detail: 'matched 6 systems · 3 LLM vendors' },
  },
  {
    id: 'artemis',
    source: 'data/projects.ts#artemis',
    keywords: ['artemis', 'workflow engine', 'durable execution', 'monaco', 'restate', 'intellisense', 'debug panel', 'web socket', 'websocket', 'elk'],
    answer:
      'Artemis is Kore.ai’s declarative agentic-workflow platform. Santhosh built the Monaco canvas with agent-context IntelliSense, ELK auto-layout, an expression engine and a live WebSocket debug panel, running on a Restate durable-execution runtime over Kafka. It powers 15+ node-type workflows and exposes 50+ services as agent-callable MCP tools.',
    tool: { name: 'describe_artifact', args: 'name="Artemis"', detail: '15+ node types · MCP surface · durable runtime' },
  },
  {
    id: 'processai',
    source: 'data/projects.ts#processai',
    keywords: ['processai', 'process ai', 'flow designer', 'microfrontend', 'angular', 'module federation', 'nx', 'ngrx', 'drag and drop', 'retejs', 'canvas'],
    answer:
      'ProcessAI is a drag-and-drop visual flow designer spanning 4 Angular microfrontends with 15+ node categories — LLM, API, loops, human-in-the-loop and browser automation. It lives in an Nx monorepo of 5,800+ files with Module Federation for independent deploys. Santhosh led the distributed frontend work and took it to GA at enterprise scale.',
    tool: { name: 'describe_artifact', args: 'name="ProcessAI"', detail: '4 microfrontends · 5,800+ files · GA' },
  },
  {
    id: 'document-intelligence',
    source: 'data/experience.ts#kore.ai',
    keywords: ['document', 'documents', 'ocr', 'docling', 'extraction', 'browser automation', 'quill', 'pdf', '512'],
    answer:
      'Document intelligence is one of his signature builds: a pipeline across 4 OCR engines (Docling, Azure, OpenAI, Anthropic) with confidence-based routing for files up to 512 MB, plus a browser-automation studio with a custom Quill Delta editor, AI instruction parser and pod-deployment wizard. It lifted extraction accuracy from 75% to 91% and earned the Kore.ai Global Spotlight.',
    tool: { name: 'get_metrics', args: 'feature="doc-intel"', detail: '75% → 91% accuracy · 512 MB ceiling' },
  },
  {
    id: 'voice-and-conversational',
    source: 'data/skills.ts#voice',
    keywords: ['voice', 'asr', 'tts', 'speech', 'whisper', 'deepgram', 'conversational', 'contact centre', 'contact center', 'smartassist', 'call center', 'bot', 'chatbot', 'ivr'],
    answer:
      'Voice and conversational AI run through his whole stack: ASR/TTS with Deepgram and Whisper, the Web Speech API, real-time voice agents, and Kore.ai XO / SmartAssist bot building. He shipped SmartAssist AI contact-centre features that cut query-resolution time ~40%, on a platform built for 10,000+ concurrent agents.',
    tool: { name: 'list_systems', args: 'domain="voice"', detail: 'ASR/TTS + contact centre + XO' },
  },
  {
    id: 'frontend',
    source: 'data/skills.ts#frontend',
    keywords: ['frontend', 'front-end', 'front end', 'ui', 'ux', 'react', 'next.js', 'nextjs', 'angular', 'tailwind', 'design system', 'performance', 'monaco', 'three.js', 'd3', 'electron', 'shadcn'],
    answer:
      'Frontend is where he is strongest: React and Next.js with Angular/RxJS/NgRx at enterprise scale, Module Federation microfrontends, Monaco and ReteJS for visual editors, D3/Three.js for data-heavy visuals, and Tailwind or shadcn/ui for design systems. Proof point: route-level code splitting cut the WebSDK bundle 60% (2.3 MB → 920 KB) for 1,000+ tenants.',
    tool: { name: 'get_metrics', args: 'area="frontend"', detail: 'bundle −60% · 15+ modules split' },
  },
  {
    id: 'backend-and-apis',
    source: 'data/skills.ts#backend',
    keywords: ['backend', 'back-end', 'back end', 'api', 'node', 'node.js', 'express', 'fastapi', 'spring boot', 'graphql', 'grpc', 'trpc', 'microservice', 'microservices', 'kafka', 'redis', 'mongodb', 'postgresql', 'restate', 'rabbitmq', 'websockets'],
    answer:
      'Backend: Node and Express, FastAPI and Spring Boot for services; REST, GraphQL, tRPC, gRPC and WebSockets for contracts; MongoDB, PostgreSQL, Redis, OpenSearch and Trino for data; Kafka, RabbitMQ, BullMQ and Restate for durable messaging and workflow execution. He builds for multi-tenant scale — the same platform serves 1,000+ tenants and 10K+ concurrent agents.',
    tool: { name: 'list_stack', args: 'layer="backend"', detail: '6 runtimes · 5 stores · 4 brokers' },
  },
  {
    id: 'cloud-and-devops',
    source: 'data/skills.ts#cloud',
    keywords: ['cloud', 'devops', 'aws', 'azure', 'docker', 'kubernetes', 'k8s', 'ci/cd', 'ci cd', 'deployment', 'deploy', 'helm', 'argocd', 'jenkins', 'github actions', 'infrastructure', 'observability', 'grafana', 'prometheus', 'opentelemetry'],
    answer:
      'He ships his own services: AWS and Azure, Docker, Kubernetes and Helm, ArgoCD/Jenkins/GitHub Actions pipelines, and observability with Grafana, Prometheus, OpenTelemetry, the ELK stack and LangSmith for LLM tracing. On Kore.ai’s platform that means containerised microfrontends and services deployed independently, many times a week.',
    tool: { name: 'list_stack', args: 'layer="platform"', detail: '2 clouds · K8s · 3 CI systems' },
  },
  {
    id: 'experience',
    source: 'data/experience.ts',
    keywords: ['experience', 'years', 'work history', 'kore.ai', 'kore', 'career', 'tenure', 'promotion', 'job', 'jobs', 'company', 'companies', 'worked', 'seniority'],
    answer:
      'Nearly four years at Kore.ai (Jul 2022 — present) as an SDE 2 on the AI-for-Process team, after a rapid promotion from Associate Software Engineer — among the fastest in his cohort. Before that: a Research Assistant at IIIT-H’s Lab for Spatial Informatics (2021–2024) and a Web Developer building an online-classes platform during COVID (2020).',
    tool: { name: 'get_experience', args: 'order="desc"', detail: '3 roles · 1 promotion · 4 years' },
  },
  {
    id: 'education',
    source: 'data/education.ts',
    keywords: ['education', 'college', 'university', 'degree', 'cgpa', 'iiit', 'school', 'academic', 'gpa', 'jee', 'entrance', 'board', 'higher secondary'],
    answer:
      'IIIT Hyderabad, 2016–2021: dual degree, B.Tech (Civil) + MS in Building Science by research, with the complete CS core — DSA, OS, OOP, DBMS, networks, ML, AI and software engineering. He entered via JEE Main 2016 AIR 5460 (top ~0.5% of 1.2M), after 98.1% in intermediate and a 9.3/10 GPA with a school topper spot in mathematics.',
    tool: { name: 'get_education', args: 'include="ranks"', detail: 'AIR 5460 · 98.1% · GPA 9.3' },
  },
  {
    id: 'research',
    source: 'data/publications.ts',
    keywords: ['research', 'publication', 'publications', 'paper', 'papers', 'krishna', 'dissolved oxygen', 'water', 'environment', 'environmental', 'air2stream', 'gis', 'qgis', 'published', 'ms thesis'],
    answer:
      'Two peer-reviewed, applied-ML papers: “Effects of Dissolved Oxygen Saturation and Water Temperature using Air2Stream over the Krishna River Basin” (2023) and “Performance Analysis of a 339 MLD Sewage Treatment Plant using Machine Learning” (2022), both from IIIT-H’s Lab for Spatial Informatics — plus QGIS watershed-delineation tooling and ML models for water-quality prediction.',
    tool: { name: 'search_publications', args: 'venue="IIIT-H LSI"', detail: '2 papers · 2022–2023' },
  },
  {
    id: 'awards',
    source: 'data/awards.ts',
    keywords: ['award', 'awards', 'recognition', 'honour', 'honor', 'spotlight', 'shining star', 'trophy', 'achievement', 'achievements', 'medal'],
    answer:
      'Highlights: Kore.ai Global Spotlight (Jan 2026) for the browser-automation UI, the Shining Star Award (Q3 2024) for a 60% WebSDK performance win plus 350+ production fixes, an Outstanding Performance Award (2024) for SDK work and 120+ tickets resolved in a quarter, rapid promotion to SDE 2, and research recognition at IIIT-H.',
    tool: { name: 'list_awards', args: 'order="impact"', detail: '8 awards · 3 company-wide' },
  },
  {
    id: 'skills',
    source: 'data/skills.ts',
    keywords: ['skill', 'skills', 'stack', 'tech', 'technology', 'technologies', 'tools', 'languages', 'frameworks', 'proficient', 'expertise', 'database', 'databases', 'python', 'typescript'],
    answer:
      'Nine groups: AI & LLMs (OpenAI/Anthropic/Gemini/Bedrock, LangChain, LangGraph, MCP, RAG, RAGAS, Pinecone), voice & conversational, frontend (React, Next.js, Angular, Module Federation, Monaco, Three.js, D3), backend & APIs, data & messaging, cloud & DevOps, observability & testing, data science — and a “currently expanding” list of C#/.NET, Go, Rails, Terraform and iPaaS.',
    tool: { name: 'list_stack', args: 'grouped=true', detail: '9 groups · 80+ technologies' },
  },
  {
    id: 'projects',
    source: 'data/projects.ts',
    keywords: ['project', 'projects', 'built', 'portfolio', 'work samples', 'shipped', 'case study', 'case studies', 'demo', 'github'],
    answer:
      'Headline builds: Artemis (agentic-workflow platform, MCP surface, Restate durable runtime), ProcessAI (4 Angular microfrontends, 5,800+ file Nx monorepo), Document Intelligence + Browser Automation (4 OCR engines, 75% → 91% accuracy), the WebSDK performance overhaul (−60% bundle), SmartAssist AI contact centre, and QGIS/ML research tooling.',
    tool: { name: 'list_projects', args: 'take=6', detail: '6 projects · 5 professional · 1 research' },
  },
  {
    id: 'hiring',
    source: 'data/site.ts#contact',
    keywords: ['hire', 'hiring', 'contact', 'email', 'reach', 'available', 'availability', 'resume', 'cv', 'interview', 'relocate', 'relocation', 'remote', 'hybrid', 'notice period', 'salary', 'phone', 'call', 'meeting', 'opportunity', 'role', 'opening'],
    answer:
      'He is open to senior full-stack and AI-platform roles. Fastest channel: santhoshvishalveerannapet@gmail.com — or +91 770-277-1465 for a call. The résumé PDF downloads from the hero, and LinkedIn (in/santhosh-vishal) is current. Based in Hyderabad, India; happy to discuss remote, hybrid or relocation for the right team.',
    tool: { name: 'get_contact', args: 'channel="all"', detail: 'email · phone · LinkedIn · résumé' },
  },
];

/** Starter prompts rendered as chips inside the console. */
export const suggestedPrompts: string[] = [
  'Why is he top 1%?',
  'What AI systems has he shipped?',
  'Show me the impact numbers',
  'What is the tech stack?',
  'Tell me about Artemis',
  'How do I contact him?',
];
