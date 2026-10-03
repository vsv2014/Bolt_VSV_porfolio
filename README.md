# Santhosh Veerannapet — Portfolio

A modern, minimal portfolio built with React 19, Vite, Tailwind CSS v4 and Motion.
Live at **[vsv2014.github.io/Bolt_VSV_porfolio](https://vsv2014.github.io/Bolt_VSV_porfolio/)**.

Positioned as a **frontend-heavy full-stack** portfolio: the résumé content (Kore.ai SDE 2,
Grade A2, 4+ years, 5 product phases) is presented through interfaces that are themselves
the proof — three of the sections are working software, hand-built with no UI kit.

## What makes it different

| Feature | Where | What it does |
| ------- | ----- | ------------ |
| **Ask my agent** | `#agent` | A scripted RAG console (embed → retrieve → tool → compose) that answers questions about the résumé, streams the answer and cites its sources. 100% client-side: no API key, no network request. |
| **Frontend craft** | `#craft` | Three live demos built for this page with no UI kit and no canvas library: a **node-graph flow designer** (pointer events, pointer capture, SVG bézier edges, longest-path auto-layout, arrow-key nudging, keyboard-only port linking), a **virtualised table** windowing 10,000 rows with rAF-batched scroll, and a **live PerformanceObserver panel** reading LCP, CLS, long tasks and FPS — plus the craft checklist (keyboard, reduced motion, one-token theming, JS budget). |
| **⌘K command palette** | everywhere | Search sections, projects and links, or type a question and send it straight to the agent console. `/` also opens it, `↑↓` + `↵` navigate. |
| **Impact ledger** | `#impact` | Six production metrics with scroll-triggered counters and before/after bars, alongside the recognition they earned (Global Spotlight, Shining Star, promotion). |
| **Live skill filter** | `#skills` | Type `kafka`, `mcp` or `angular` and the 150+ technologies filter instantly, with the matching slice highlighted. |
| **Hero that performs** | `#home` | Aurora gradient backdrop, pointer-tracking spotlight, rotating typewriter headline, orbiting capability chips, counting stats and a keyword marquee. |
| **Reading progress + active nav** | global | Gradient scroll-progress bar, animated active-section pill, and a pre-paint theme switch that respects the OS setting. |

Everything degrades gracefully: `prefers-reduced-motion` disables the animation
layer (aurora, marquee, typewriter, counters, card tilt) without hiding any content,
and every interactive element is reachable by keyboard — including the flow canvas,
where arrow keys nudge nodes and ports link with `Enter`.

### Keyboard shortcuts

| Keys | Action |
| ---- | ------ |
| `⌘K` / `Ctrl+K` | Toggle the command palette |
| `/` | Open the command palette |
| `↑` `↓` `↵` | Navigate / run the highlighted command |
| `Esc` | Close the palette |

## Design system — "Aurora"

| Layer | Choice |
| ----- | ------ |
| Display type | **Bricolage Grotesque** (variable 400–800, tight tracking) |
| Accent type | **Instrument Serif italic** — accent words inside every section title |
| Body / mono | Inter · JetBrains Mono (tabular numerals for metrics) |
| Palette (dark) | near-black indigo `#05060a` with **violet `#7c5cff`**, **rose `#ff4d9d`**, **electric cyan `#35e0ff`** and a signature **chartreuse `#c8f65d`** |
| Palette (light) | warm paper `#f7f5f0` with ink type and contrast-tuned accents |
| Background | **Hand-written WebGL aurora** — one fullscreen triangle, one fragment shader: domain-warped fBm (4 octaves) folded into the palette with a pointer-following ember. Rendered at 45 fps, below device resolution (hard cap 1100 px) and paused when the tab is hidden; a single static frame under reduced motion. CSS orbs take over when WebGL is unavailable, blocked or lost mid-session. |
| Texture | SVG `feTurbulence` film grain (soft-light), fading dot grid, vignette |
| Cursor | Difference-blended ring + dot that contracts over interactive elements and can print a label (`data-cursor-label`); `data-magnetic` targets lean toward the pointer. Additive only — the native cursor stays, and touch/reduced-motion users see none of it. |
| Intro | One-time 1.15 s sequence (per session) that counts up behind a translucent panel — translucent on purpose so the hero remains the LCP element. Skipped for reduced motion or when storage is unavailable. |
| Details | Scroll-velocity skew on marquees, scroll-linked timeline rail, terminal-style eyebrow decode, editorial outlined section numerals. |
| Motion | Cinematic blur-and-rise reveals, word-split clip reveals on every section title, pointer spotlight, scroll parallax in the hero |

**Theme flip:** where the browser supports the View Transitions API the new theme
blooms as a circle from the toggle button (`--vt-x` / `--vt-y` set from the button's
rect); otherwise it swaps instantly. Reduced motion opts out of the animation.

**Bundle:** below-the-fold sections (`Projects`, `FrontendCraft`, `AgentConsole`,
`Research`, `Awards`) are `React.lazy` — entry is ~472 kB (151 kB gzip) with
five small async chunks, so the hero paints from a lean bundle.

## Tech stack

| Area        | Choice                                  |
| ----------- | --------------------------------------- |
| Framework   | React 19 + TypeScript 6                 |
| Build       | Vite 8                                  |
| Styling     | Tailwind CSS v4 (CSS-first `@theme`)    |
| Animation   | Motion (`motion/react`)                 |
| Icons       | lucide-react + custom brand SVGs        |
| Linting     | ESLint 9 (flat config) + typescript-eslint |
| Deploy      | GitHub Pages (GitHub Actions)           |

## Quick start

```bash
git clone https://github.com/vsv2014/Bolt_VSV_porfolio.git
cd Bolt_VSV_porfolio
npm install
npm run dev          # http://localhost:3001
```

## Scripts

| Script              | Description                          |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Start the dev server                 |
| `npm run build`     | Type-check (`tsc -b`) + production build |
| `npm run preview`   | Preview the production build         |
| `npm run lint`      | Lint with ESLint                     |
| `npm run typecheck` | Type-check without emitting          |
| `npm run deploy`    | Build + publish to GitHub Pages      |

## Architecture

Content is fully separated from presentation: edit the files in `src/data` to
update the site — no component changes required.

```
src/
├── main.tsx                # Entry point
├── App.tsx                 # Page composition
├── styles/index.css        # Tailwind v4 + design tokens (@theme) + utilities
├── lib/
│   ├── utils.ts            # cn() class helper
│   ├── theme.ts             # Theme store
│   └── agent.ts            # Lexical retriever + trace builder + cross-component events
├── types/index.ts          # Shared types
├── data/                   # All content (profile, experience, projects, agent KB, …)
└── components/
    ├── demo/               # Hand-built demos (FlowCanvas, VirtualList, PerfPanel)
    ├── ui/                 # Primitives (Section, Card, Tag, CountUp, Typewriter, …)
    ├── layout/             # Navbar, Footer, FloatingSocials, ScrollProgress, CommandPalette
    └── sections/           # Page sections (Hero, About, …, Impact, AgentConsole, …)
```

### Design tokens

The theme lives in `src/styles/index.css` under `@theme` — colors, fonts and
motion are defined once and consumed as Tailwind utilities (`text-fg`,
`border-line`, `text-brand-cyan`, `font-mono`, …).

### Adding project links

Project cards hide their links until you provide them. Add `githubUrl` and/or
`demoUrl` to any entry in `src/data/projects.ts` and the buttons appear
automatically.

### Editing the agent console

The console is intentionally data-driven (19 documents covering Artemis, reliability,
contact centre, research, solo builds, hiring). To teach it something new, append a document
to `src/data/agent.ts`:

```ts
{
  id: 'my-new-topic',
  source: 'data/projects.ts#my-new-topic', // shown on the citation chip
  keywords: ['my topic', 'my-topic', 'related phrase'], // longer phrases score higher
  answer: 'The grounded answer the console streams back.',
  tool: { name: 'get_fact', args: 'x="y"', detail: 'what the trace row reports' },
}
```

`src/lib/agent.ts` scores the query against every document's keywords and picks
the best match (or refuses politely when nothing clears the similarity floor),
so there is no model, key or backend to configure. Chip prompts live in the same
file as `suggestedPrompts`.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/` to GitHub Pages.

## License

MIT.
