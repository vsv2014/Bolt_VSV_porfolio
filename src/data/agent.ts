import type { AgentDoc } from '@/types';

/**
 * Knowledge base for the "Ask my agent" console.
 *
 * Everything here is derived from the résumé, the shipped project list and the
 * publications — the console is a scripted simulation running in the browser
 * (no API key, no network calls), not a live LLM. Swap this array for a real
 * endpoint if you ever want to wire it up.
 */
export const agentDocs: AgentDoc[] = [
  {
    id: 'who-is-vsv',
    source: 'data/site.ts#profile',
    keywords: ['who is', 'about', 'summary', 'background', 'introduce', 'overview', 'profile', 'bio', 'yourself', 'tell me'],
    answer:
      'Santhosh Veerannapet is a full-stack SDE 2 (Grade A2) at Kore.ai in Hyderabad, on the AI-for-Process team. Nearly four years in, he has shipped AI-native distributed systems to 1,000+ enterprise tenants — workflow engines and agent platforms, conversational AI, document intelligence and microfrontends — working across React/Next.js/Angular on the front and Node, Express, Restate and Kafka behind it. He was promoted to SDE 2 among the fastest in his cohort and earned the company-wide Global Spotlight in January 2026.',
    tool: { name: 'get_profile', args: 'id="santhosh"', detail: 'resolved 1 profile · ~4y experience' },
  },
  {
    id: 'recognition',
    source: 'data/awards.ts',
    keywords: ['recognition', 'recognised', 'recognized', 'award', 'awards', 'honour', 'honor', 'spotlight', 'shining star', 'promotion', 'achievement', 'achievements', 'trophy', 'top', 'rank', 'best', 'impressive', 'stand out', 'why you', 'exceptional'],
    answer:
      'The verified wins: Kore.ai Global Spotlight (Jan 2026) for the Browser Automation UI, the Shining Star Award (Q3 2024) for a 60% WebSDK performance optimisation plus 350+ production fixes, an Outstanding Performance Award (2024) for SDK work and 120+ tickets in a quarter, and a rapid promotion from Associate Software Engineer to SDE 2 (Grade A2) among the fastest in his cohort. Earlier: JEE Main 2016 AIR 5460 — top 0.5% of ~1.2M candidates — which earned direct admission to IIIT Hyderabad’s dual degree.',
    tool: { name: 'list_awards', args: 'order="impact"', detail: '8 awards · 3 company-wide' },
  },
  {
    id: 'ai-systems',
    source: 'data/projects.ts#ai',
    keywords: ['ai', 'llm', 'agent', 'agentic', 'rag', 'mcp', 'tool use', 'tool-use', 'openai', 'anthropic', 'gemini', 'groq', 'azure ai', 'bedrock', 'langchain', 'langgraph', 'vector', 'embedding', 'prompt', 'artificial intelligence', 'genai', 'generative'],
    answer:
      'His AI work is production, not demos: the ABL agentic-workflow platform with an MCP-based integration surface across 50+ third-party connectors; LLM nodes for designing generative-AI voice and chat agents; a document pipeline across 4 OCR engines (Docling, Azure, OpenAI, Anthropic) with intelligent provider routing; RAG pipelines with RAGAS-style evaluation over Pinecone; and LLM-powered summarisation, sentiment analysis and intent recognition in the contact centre.',
    tool: { name: 'list_ai_systems', args: 'env="production"', detail: 'matched 6 systems · 4 LLM providers' },
  },
  {
    id: 'abl-platform',
    source: 'data/projects.ts#abl',
    keywords: ['abl', 'abl platform', 'workflow engine', 'workflow canvas', 'studio', 'runtime', 'durable execution', 'monaco', 'restate', 'intellisense', 'expression browser', 'debug panel', 'web socket', 'websocket', 'elk', 'connector', 'trigger'],
    answer:
      'ABL is Kore.ai’s agentic-workflow platform — Studio, Workflow Engine and Runtime. Santhosh owned the Workflow Canvas end to end: Monaco {{context.}} IntelliSense, ELK port-constraint auto-layout for multi-handle nodes, a searchable Expression Browser, deep-search JSON viewer and a live debug panel streaming step logs over WebSocket. He also shipped the Integration Detail Panel, Auth Profiles, Connection Catalog and Trigger UI (cron, webhook, app), built engine internals in TypeScript on Express (expression resolver, step-context schema, output-mapping validator, function executor, trigger engine, reverse-proxy bridge to Restate), and designed the cross-service JWT contract.',
    tool: { name: 'describe_artifact', args: 'name="ABL Platform"', detail: '15+ node types · 50+ connectors · durable runtime' },
  },
  {
    id: 'processai',
    source: 'data/projects.ts#processai',
    keywords: ['processai', 'process ai', 'flow designer', 'microfrontend', 'angular', 'module federation', 'nx', 'ngrx', 'drag and drop', 'retejs', 'canvas'],
    answer:
      'ProcessAI is a drag-and-drop visual flow designer spanning 4 Angular microfrontends with Module Federation and 15+ node categories — LLM, API, conditionals, loops, variables, human-in-the-loop, browser automation and document intelligence. It lives in an Nx monorepo of 5,800+ files with shared state hydration and independent deployment pipelines. Santhosh led the distributed frontend architecture across 4 teams and took it to GA at enterprise scale.',
    tool: { name: 'describe_artifact', args: 'name="ProcessAI"', detail: '4 microfrontends · 5,800+ files · GA' },
  },
  {
    id: 'document-intelligence',
    source: 'data/experience.ts#kore.ai',
    keywords: ['document', 'documents', 'ocr', 'docling', 'extraction', 'browser automation', 'quill', 'pdf', 'docx', 'pptx', '512', 'pod deployment'],
    answer:
      'Document intelligence is one of his signature builds: a pipeline across 4 OCR engines (Docling, Azure, OpenAI, Anthropic) with intelligent provider routing and prompt engineering for structured outputs on PDF, DOCX and PPTX up to 512 MB — lifting extraction accuracy from 75% to 91%. Alongside it he delivered the Browser Automation Studio (custom Quill Delta-API editor, AI instruction parser, live variable highlighting, undo/redo) and a pod-deployment wizard with simulation, auto-scaling 1 → 10 replicas and full audit history. The Browser Automation UI earned the Kore.ai Global Spotlight.',
    tool: { name: 'get_metrics', args: 'feature="doc-intel"', detail: '75% → 91% accuracy · 512 MB ceiling' },
  },
  {
    id: 'voice-and-conversational',
    source: 'data/skills.ts#voice',
    keywords: ['voice', 'asr', 'tts', 'speech', 'whisper', 'deepgram', 'conversational', 'contact centre', 'contact center', 'smartassist', 'call center', 'bot platform', 'bot builder', 'chatbot', 'ivr', 'dialer', 'intent', 'entity'],
    answer:
      'Voice and conversational AI run through his whole stack: ASR/TTS integration with Deepgram and Whisper, intent detection, entity extraction and multi-turn dialogue management, plus conversational journey design on Kore.ai XO / SmartAssist. He built an enterprise contact centre for 10,000+ concurrent agents across WhatsApp, Telegram and Microsoft Teams with sub-200 ms agent assignment, and a voice-bot outbound dialer handling 10,000+ concurrent calls.',
    tool: { name: 'list_systems', args: 'domain="voice"', detail: 'ASR/TTS · contact centre · dialer · XO' },
  },
  {
    id: 'frontend',
    source: 'data/skills.ts#frontend',
    keywords: ['frontend', 'front-end', 'front end', 'ui', 'ux', 'react', 'next.js', 'nextjs', 'angular', 'tailwind', 'design system', 'performance', 'monaco', 'elk.js', 'three.js', 'd3', 'electron', 'quill', 'rxjs'],
    answer:
      'Frontend is where he is strongest: React and Next.js with Angular/RxJS/NgRx at enterprise scale, Module Federation microfrontends, Monaco and ReteJS for visual editors, ELK.js auto-layout, Quill Delta editing for rich document work, D3.js for data-heavy dashboards, and Tailwind or Angular Material for design systems. Proof points: the WebSDK bundle cut 60% (2.3 MB → 920 KB) for 1,000+ tenants at 15+ modules, and 25+ reusable components standardised across 3 product suites.',
    tool: { name: 'get_metrics', args: 'area="frontend"', detail: 'bundle −60% · 25+ shared components' },
  },
  {
    id: 'backend-and-apis',
    source: 'data/skills.ts#backend',
    keywords: ['backend', 'back-end', 'back end', 'api', 'node', 'node.js', 'express', 'fastapi', 'spring boot', 'java', 'graphql', 'trpc', 'microservice', 'microservices', 'kafka', 'redis', 'mongodb', 'postgresql', 'mysql', 'restate', 'bullmq', 'websockets', 'socket.io', 'oauth', 'jwt', 'event-driven'],
    answer:
      'Backend: TypeScript/Node with Express for services, Java + Spring Boot fundamentals, FastAPI on personal projects; REST, GraphQL, tRPC, WebSockets and Socket.IO for contracts; MongoDB, PostgreSQL, MySQL and Redis for data; Kafka, BullMQ and Restate for messaging and durable workflow execution; OAuth2 and JWT for auth — including a cross-service JWT contract he designed between Runtime and the Workflow Engine, covered end-to-end with Vitest. He builds for multi-tenant scale: the same platform serves 1,000+ tenants and 10K+ concurrent agents.',
    tool: { name: 'list_stack', args: 'layer="backend"', detail: '4 runtimes · 4 stores · 3 brokers' },
  },
  {
    id: 'cloud-and-devops',
    source: 'data/skills.ts#cloud',
    keywords: ['cloud', 'devops', 'aws', 'azure', 'docker', 'kubernetes', 'k8s', 'ci/cd', 'ci cd', 'deployment', 'deploy', 'helm', 'argocd', 'jenkins', 'github actions', 'nginx', 'linux', 'infrastructure', 'observability', 'grafana', 'prometheus'],
    answer:
      'He ships his own services: AWS and Azure, Docker, Kubernetes and Helm, ArgoCD / Jenkins / GitHub Actions pipelines, Nginx and Linux at the edge, and observability with Grafana and Prometheus. Concrete results: deployment time cut 60% and MTTD cut 35% by centralising logging and hardening the Jenkins + Docker CI/CD path; containerised microfrontends and services deploying independently on Kore.ai’s platform.',
    tool: { name: 'list_stack', args: 'layer="platform"', detail: '2 clouds · K8s · deploy −60% · MTTD −35%' },
  },
  {
    id: 'impact',
    source: 'data/impact.ts',
    keywords: ['impact', 'impact numbers', 'metrics', 'numbers', 'results', 'scale', 'how fast', 'how many', 'performance', 'percent', 'improvement', 'kpi', 'roi', 'benchmark'],
    answer:
      'The production ledger: 1,000+ enterprise tenants on the platform; 10,000+ concurrent agents in the contact centre (plus 10,000+ concurrent calls on the dialer) with sub-200 ms agent assignment; document extraction accuracy lifted 75% → 91% across 4 OCR engines on files up to 512 MB; the WebSDK bundle cut 60% (2.3 MB → 920 KB) across 15+ modules; workflow setup cut 2 hours → 15 minutes (8×); and 40% faster query resolution with 40% less post-call documentation. Deployment time is down 60% and MTTD 35%.',
    tool: { name: 'get_metrics', args: 'scope="production"', detail: '6 headline metrics · all résumé-traceable' },
  },
  {
    id: 'experience',
    source: 'data/experience.ts',
    keywords: ['experience', 'years', 'work history', 'kore.ai', 'kore', 'career', 'tenure', 'promotion', 'job', 'jobs', 'company', 'companies', 'worked', 'seniority', 'grade'],
    answer:
      'Nearly four years at Kore.ai (Jul 2022 — present) as an SDE 2, Grade A2, on the AI-for-Process team — after a rapid promotion from Associate Software Engineer, among the fastest in his cohort. Before that: a Research Scholar at IIIT-H’s Lab for Spatial Informatics (2018–2021) and a Web Developer building an online-classes platform during COVID (2020).',
    tool: { name: 'get_experience', args: 'order="desc"', detail: '3 roles · 1 promotion · ~4 years' },
  },
  {
    id: 'education',
    source: 'data/education.ts',
    keywords: ['education', 'college', 'university', 'degree', 'iiit', 'school', 'academic', 'gpa', 'jee', 'entrance', 'board', 'higher secondary', 'ms', 'b.tech', 'coursework'],
    answer:
      'IIIT Hyderabad, 2016–2021: dual degree, B.Tech (Civil) + MS by Research (Building Science), at one of India’s premier CS research institutes, with the full CS curriculum — DSA (Java), OS, OOP, DBMS & SQL, computer networks, ML, AI and software engineering. He entered via JEE Main 2016 AIR 5460 (top ~0.5% of 1.2M), after 98.1% in intermediate and a 9.3/10 GPA with a school-topper spot in mathematics.',
    tool: { name: 'get_education', args: 'include="ranks"', detail: 'AIR 5460 · 98.1% · GPA 9.3' },
  },
  {
    id: 'research',
    source: 'data/publications.ts',
    keywords: ['research', 'publication', 'publications', 'paper', 'papers', 'krishna', 'dissolved oxygen', 'water', 'environment', 'environmental', 'air2stream', 'gis', 'qgis', 'published', 'ms thesis', 'sewage', 'watershed'],
    answer:
      'Two peer-reviewed, applied-ML papers: “Effects of Dissolved Oxygen Saturation and Water Temperature using Air2Stream over the Krishna River Basin” (2023) and “Performance Analysis of a 339 MLD Sewage Treatment Plant using Machine Learning” (2022), both from IIIT-H’s Lab for Spatial Informatics. Around them: an automated QGIS + Python watershed-delineation pipeline, gradient-boosted water-temperature models, paraphrase detection with Word Mover’s Distance, a real-time OpenCV hand-tracking pipeline and a UNIX shell in C.',
    tool: { name: 'search_publications', args: 'venue="IIIT-H LSI"', detail: '2 papers · research 2018–2021' },
  },
  {
    id: 'projects',
    source: 'data/projects.ts',
    keywords: ['project', 'projects', 'built', 'portfolio', 'work samples', 'shipped', 'case study', 'case studies', 'demo', 'github', 'personal', 'side project'],
    answer:
      'Headline builds: ABL Platform (Studio + Workflow Engine + Runtime, MCP connector surface, Restate durable execution), ProcessAI (4 Angular microfrontends, 5,800+ file Nx monorepo, visual flow designer), Document Intelligence + Browser Automation (4 OCR engines, 75% → 91%), the WebSDK performance overhaul (−60% bundle), the SmartAssist contact centre (10K+ agents, sub-200 ms routing) and the Campaign Dialer. Personal projects: MockMate (LangGraph voice interview coach), ShopSphere (agentic refund copilot with a policy guard) and Emma (AI voice receptionist with provider failover).',
    tool: { name: 'list_projects', args: 'take=8', detail: '16 projects · 6 professional · 3 personal' },
  },
  {
    id: 'skills',
    source: 'data/skills.ts',
    keywords: ['skill', 'skills', 'stack', 'tech', 'technology', 'technologies', 'tools', 'languages', 'frameworks', 'proficient', 'expertise', 'database', 'databases', 'python', 'typescript', 'patterns', 'solid', 'system design'],
    answer:
      'Nine grouped areas: languages (TypeScript, JavaScript, Java, Python, SQL, Bash); AI & LLMs (OpenAI, Anthropic, Azure AI, Bedrock, Gemini, Groq, LangChain, LangGraph, MCP, RAG, prompt engineering, Docling OCR); voice & conversational; frontend (React, Next.js, Angular, RxJS, NgRx, Module Federation, Monaco, ELK.js, Quill, ReteJS, D3.js, Three.js); backend & APIs; data & messaging (MongoDB, PostgreSQL, MySQL, Redis, Kafka, BullMQ, Restate); cloud, DevOps & observability; testing (Jest, Vitest, Playwright); and architecture & practice (distributed systems, HLD/LLD, OOP, design patterns, SOLID).',
    tool: { name: 'list_stack', args: 'grouped=true', detail: '9 groups · 100+ technologies' },
  },
  {
    id: 'hiring',
    source: 'data/site.ts#contact',
    keywords: ['hire', 'hiring', 'contact', 'email', 'reach', 'available', 'availability', 'resume', 'cv', 'interview', 'relocate', 'relocation', 'remote', 'hybrid', 'notice', 'salary', 'phone', 'call', 'meeting', 'opportunity', 'role', 'opening'],
    answer:
      'He is open to senior full-stack and AI-platform roles. Fastest channel: santhoshvishalveerannapet@gmail.com — or +91 770-277-1465 for a call. The résumé PDF downloads from the hero, and LinkedIn (in/santhosh-vishal) is current. Based in Hyderabad, India; happy to discuss remote, hybrid or relocation for the right team.',
    tool: { name: 'get_contact', args: 'channel="all"', detail: 'email · phone · LinkedIn · résumé' },
  },
];

/** Starter prompts rendered as chips inside the console. */
export const suggestedPrompts: string[] = [
  'What has he shipped at Kore.ai?',
  'Show me the impact numbers',
  'What is his tech stack?',
  'Tell me about the ABL platform',
  'What recognition has he earned?',
  'How do I contact him?',
];
