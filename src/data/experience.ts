import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    role: 'Software Engineer (SDE 2)',
    company: 'Kore.ai Software India Pvt. Ltd.',
    period: 'Jul 2022 — Present',
    location: 'Hyderabad, India',
    grade: 'Grade A2 since December 2024 · promoted Associate SWE → SWE → SDE 2',
    summary:
      '4+ years building production enterprise AI — agentic workflow platforms with durable execution, voice and contact-centre AI, OCR document intelligence, and multi-tenant systems serving 1,000+ enterprise tenants. Transitioned into product support in 2026, ramping up on XOCC and Artemis tickets and joining the pilot team establishing Artemis platform support readiness.',
    achievements: [
      'Partner directly with enterprise customers through discovery calls, technical demos, onboarding workshops and hands-on issue triage — with 120+ tickets resolved in a single quarter.',
      'Authored HLDs and LLDs aligning four engineering teams; applied Factory, Singleton, Observer, Strategy and Facade patterns with SOLID principles across workflow engine, connector architecture and runtime services.',
      'Shipped 350+ production fixes and mentored junior engineers through code reviews across Studio, Runtime, Workflow Engine and Connectors.',
      'Recognised twice with the Kore.ai Global Spotlight — January 2026 (Browser Automation UI) and July 2026 (Artemis production support readiness).',
    ],
    stack: [
      'TypeScript',
      'Node.js',
      'Next.js',
      'Angular',
      'Express',
      'Restate',
      'Kafka',
      'RabbitMQ',
      'MongoDB',
      'Redis',
      'Kubernetes',
      'AWS',
    ],
    phases: [
      {
        name: 'Artemis — Production Agentic AI Workflow Platform',
        period: 'Feb 2026 — Present',
        summary:
          'Multi-tenant agent platform spanning Studio authoring, workflow execution, MCP/tools and connectors, durable Restate orchestration, triggers, runtime integrations and platform reliability — engineered for replay-safe execution across Studio, Runtime, Workflow Engine and Connector boundaries.',
        bullets: [
          'Built workflow capabilities: expression resolution, step-context schemas, output-mapping validation, function execution, triggers, continuation/resume handling and reverse-proxy middleware.',
          'Designed the reliability layer — Redis atomic queue claim and deduplication, BullMQ continuation workers, scheduler reconciliation watchdogs, Mongo execution persistence with a transactional outbox, bounded retries, durable timers, recovery, reconciliation and tenant-aware state.',
          'Added service-token JWT authentication, authorization boundaries, correlation IDs, structured errors, data-flow audits and Vitest coverage.',
          'Shipped MCP integration with connection catalog, OAuth authentication profiles and onboarding flows, cron/webhook/app triggers and typed tool contracts — exposing 50+ third-party services as agent-callable capabilities.',
          'Kept permissions, business rules and irreversible operations in typed backend services instead of prompts.',
          'Built the Next.js/TypeScript authoring and debugging surface: Monaco IntelliSense over agent context, ELK auto-layout for multi-handle graphs and WebSocket streaming of step execution.',
        ],
        stack: ['Next.js', 'TypeScript', 'Monaco', 'ELK.js', 'Restate', 'Express', 'MongoDB', 'Kafka', 'Kubernetes', 'OAuth2', 'JWT'],
      },
      {
        name: 'ProcessAI — Generative AI Studio',
        period: 'Sep 2025 — Jan 2026',
        summary:
          'Generative-AI studio for designing enterprise AI workflows, from drag-and-drop authoring to document intelligence and browser automation.',
        bullets: [
          'Led distributed frontend architecture across four Angular microfrontends in an Nx monorepo with Module Federation; built a visual flow designer with 15+ node categories, stepwise debugging and live WebSocket monitoring.',
          'Integrated four OCR providers — Docling, Azure, OpenAI and Anthropic — with confidence-based routing by file type, improving internal extraction accuracy from 75% to 91% for PDF, DOCX and PPTX files up to 512 MB.',
          'Delivered Browser Automation Studio with AI instruction parsing, a custom Quill Delta-API editor, variable highlighting, undo/redo and cross-browser stability — recognised with the Kore.ai Global Spotlight in January 2026.',
          'Shipped a Kubernetes pod-deployment wizard supporting 1–10 replica autoscaling.',
        ],
        stack: ['Angular', 'Nx', 'Module Federation', 'ReteJS', 'Canvas API', 'NgRx', 'Quill', 'WebSockets', 'Kubernetes'],
      },
      {
        name: 'Kore.ai XO Platform',
        period: '2024 — 2025',
        summary: 'Customer-facing AI chat agents, campaign tooling and the shared component library behind them.',
        bullets: [
          'Reduced the AI chat-agent WebSDK bundle from 2.3 MB to 920 KB (60%) via route-level code splitting and lazy loading across 15+ modules, deployed to 1,000+ enterprise tenants.',
          'Built Proactive Web Campaigns with rule-based targeting, goal tracking, template selection and campaign configuration.',
          'Reduced bot/agent setup from 2 hours to 15 minutes (8×) with a modular Bot Builder UI.',
          'Created the Unified-XO Angular component library — 25+ reusable Material components across three product suites.',
          'Reduced deployment time 60% and MTTD 35% through centralised Grafana/Prometheus/ELK observability and hardened Jenkins/Docker CI/CD.',
        ],
        stack: ['Angular', 'TypeScript', 'Node.js', 'NgRx', 'Angular Material', 'Grafana', 'Prometheus', 'Jenkins', 'Docker'],
      },
      {
        name: 'SmartAssist — AI-Powered Contact Center Platform',
        period: '2023 — 2024',
        summary:
          'Enterprise AI contact centre serving 10,000+ concurrent agents at peak across WhatsApp, Telegram, Microsoft Teams and voice channels.',
        bullets: [
          'Built ASR/TTS pipelines, intent detection, entity extraction and multi-turn dialogue management for production agents and customers.',
          'Implemented low-latency LLM routing, summarisation and sentiment analysis — improving CSAT and reducing post-call documentation.',
        ],
        stack: ['Angular', 'Node.js', 'MongoDB', 'Redis', 'OpenSearch', 'Trino/Presto', 'Kafka', 'RabbitMQ', 'WebSockets', 'NgRx'],
      },
      {
        name: 'Campaign Dialer — Outbound Voice-Bot Campaign System',
        period: 'Jul 2022 — 2023',
        summary: 'Campaign management and operator UI for high-volume outbound voice campaigns.',
        bullets: [
          'Engineered campaign management and operator UI supporting 10,000+ concurrent calls on event-driven microservices.',
          'Shipped Progressive/Predictive dialing, DNC list management, caller ID, calling hours, retry mechanisms and disposition-code handling.',
          'Built D3.js dashboards for pickup, abandon, ROI and agent metrics, plus LLM summarisation and sentiment analysis; mentored engineers and ran code reviews.',
        ],
        stack: ['Angular', 'NgRx', 'D3.js', 'WebSockets', 'Kafka', 'RabbitMQ'],
      },
    ],
  },
  {
    role: 'Research Scholar',
    company: 'Lab for Spatial Informatics, IIIT-H',
    period: '2018 — 2021',
    location: 'Hyderabad, India',
    summary:
      'Applied ML and geospatial tooling for water-quality and environmental monitoring — two peer-reviewed publications.',
    achievements: [
      'Water-temperature modelling on the Krishna Basin dataset using regression and gradient boosting in Python.',
      'Optimised sewage-treatment-plant capacity (339 MLD) using ML for spatial demand forecasting.',
      'Automated watershed delineation in QGIS + Python, replacing manual GIS analysis.',
      'Built NLP paraphrase detection with Word Mover’s Distance over embeddings, and a real-time OpenCV hand-tracking pipeline.',
      'Implemented a UNIX shell in C — process control, I/O redirection and signal handling.',
    ],
    stack: ['Python', 'MATLAB', 'Machine Learning', 'QGIS', 'OpenCV', 'NLP', 'C'],
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
