<div align="center">

# Santhosh Vishal — Interactive Engineering Portfolio

**Interactive frontend engineering, production AI platforms, and the implementation details behind them.**

Hand-built workflow editor · 10,000-row virtualized table · live performance metrics · keyboard command palette · accessible motion

[**Explore the live site**](https://santhoshvishal.vercel.app/) · [**See the source**](https://github.com/vsv2014/Bolt_VSV_porfolio) · [**Report an issue**](https://github.com/vsv2014/Bolt_VSV_porfolio/issues/new/choose)

[![Portfolio quality](https://github.com/vsv2014/Bolt_VSV_porfolio/actions/workflows/quality.yml/badge.svg)](https://github.com/vsv2014/Bolt_VSV_porfolio/actions/workflows/quality.yml)
[![License: MIT (code)](https://img.shields.io/badge/code_license-MIT-blue.svg)](LICENSE)

</div>

**Engineering notes:** [Flow editor](https://santhoshvishal.vercel.app/notes/react-flow-editor.html) · [10K-row virtualization](https://santhoshvishal.vercel.app/notes/virtualized-10000-rows.html) · [Honest AI console](https://santhoshvishal.vercel.app/notes/honest-ai-console.html) · [RSS feed](https://santhoshvishal.vercel.app/feed.xml)

## Why explore this project?

[**Read the engineering notes**](https://santhoshvishal.vercel.app/#notes) — practical breakdowns of a lightweight node editor, 10,000-row windowing and a truthful local AI demo.

Most portfolio templates *describe* frontend skills. This portfolio makes several of them **interactive**: move nodes in the workflow editor, scroll ten thousand simulated tenant rows without rendering them all, inspect performance readings in your own browser, or navigate the whole experience from the keyboard.

It's also a real professional portfolio for [Santhosh Vishal](https://www.linkedin.com/in/santhosh-vishal/), a software engineer working across enterprise interfaces, AI platforms, and full-stack systems.

| Try it | What you can inspect in the source |
| --- | --- |
| [**Visual flow designer**](https://santhoshvishal.vercel.app/#craft) | Pointer capture, SVG edges, responsive auto-layout, node manipulation, keyboard controls |
| [**Virtualized 10,000-row table**](https://santhoshvishal.vercel.app/#craft) | Fixed-height windowing, overscan, `requestAnimationFrame` scroll batching |
| [**Performance panel**](https://santhoshvishal.vercel.app/#craft) | `PerformanceObserver` (where supported), layout shifts, long tasks, frame-rate sampling |
| [**Command palette**](https://santhoshvishal.vercel.app/) | ⌘K / Ctrl+K, fuzzy-ish keyword matching, links and section navigation |
| [**Portfolio AI-console simulation**](https://santhoshvishal.vercel.app/#agent) | Deterministic **lexical retrieval** against curated facts and an *illustrative* embed → retrieve → tool → compose trace. **No real embedding model, vector database, LLM API or hosted service.** |
| [**Light and dark themes**](https://santhoshvishal.vercel.app/) | CSS-first Tailwind design tokens, pre-paint theme selection, reduced-motion fallbacks |

> **Note on screenshots:** The live demo is the source of truth. The editor and synthetic tenant data are portfolio demonstrations, not screenshots of employer or customer products.

## Technical decisions

- **React 19 + TypeScript + Vite 8** with viewport-deferred sections and recovery boundaries.
- **Tailwind CSS v4** and an original dark/light token system, internally named *Aurora*.
- **Motion** for transitions, with `prefers-reduced-motion` respected.
- **Native browser APIs** for flow editing, virtual scroll, performance readings, and the WebGL background. No node editor or component UI kit is bundled.
- **Accessibility-first interactions:** visible keyboard focus, skip link, command palette, keyboard graph editing, descriptive labels, and a static-motion fallback.
- **Tests:** Node regression tests plus Chromium desktop/mobile smoke checks in GitHub Actions.

## Run it locally

Requirements: **Node.js 24** (see `.nvmrc`) and npm.

```bash
git clone https://github.com/vsv2014/Bolt_VSV_porfolio.git
cd Bolt_VSV_porfolio
npm ci
npm run dev
```

Open **http://localhost:3001**. To validate a change:

```bash
npm run lint
npm run typecheck
npm test
npm run audit:prod
npm run build
npm run preview
```

The production build uses a relative asset base. **Vercel is the only canonical host.** The old GitHub Pages site serves a minimal noindex redirect (including legacy article URLs), not a second compiled portfolio. No workflow commits generated output to `main`.

## Customize responsibly

This repository is primarily **my own portfolio and engineering showcase**, not yet a sanitized one-click portfolio template. Before republishing it as yours, replace personal data and project claims:

| What to change | File |
| --- | --- |
| Name, contact details, biography, availability, social links | `src/data/site.ts` |
| Experience, technical projects, awards, skills and research | `src/data/*.ts` |
| Curated facts and answers used by the simulated agent | `src/data/agent.ts` |
| Portrait and any other personal visuals | `src/assets/`, `public/` |
| Page title, canonical URL, Open Graph tags, structured data | `index.html` |
| GitHub Pages URL / project path | `package.json`, `vite.config.ts`, `public/` |

**Never copy personal contact data, photographs, employer/client material, résumé claims, or research descriptions into another person's portfolio.** The code is reusable under the license below; the personal content is not included in that permission.

## Explore the architecture

```text
src/
├── App.tsx              # section composition and lazy loading
├── styles/index.css     # Aurora tokens, themes, typography and motion
├── components/
│   ├── demo/            # FlowCanvas, VirtualList, PerfPanel
│   ├── layout/          # navbar, command palette, footer, cursor
│   ├── sections/        # experience, work, craft, impact, agent...
│   └── ui/              # reusable presentation primitives
├── data/                # portfolio content and simulated agent knowledge
├── lib/                 # layout, virtual window, theme, search and helpers
└── types/               # shared TypeScript contracts
tests/                   # unit, Chromium and WebKit smoke tests
```

**Keyboard:** `⌘K` / `Ctrl+K` opens the palette, `/` opens it from a non-input field, arrows select options, Enter runs one, Escape closes.

## Contribute and discuss

Bug reports, accessibility findings, reproducible performance measurements, documentation improvements, and focused frontend engineering PRs are welcome. Start with [CONTRIBUTING.md](CONTRIBUTING.md), or [open an issue](https://github.com/vsv2014/Bolt_VSV_porfolio/issues/new/choose). Please don't submit screenshots or code copied from proprietary employer/client systems.

If an implementation was useful to learn from, you can **star the repository** to find it again, or share the live interactive demos with another engineer. Genuine feedback and reproducible reports are more helpful than inflated star counts.

## Deployment

`.github/workflows/quality.yml` validates lint, unit tests, production build, and desktop/mobile browser interactions. The historic GitHub Pages mirror is retired to a redirect; deploy changes only to the connected Vercel project after validation.

## License and attribution

**Source code:** [MIT License](LICENSE). **Personal content:** photographs, personal biography/contact information, professional résumé claims, research text, and third-party trademarks/assets are **not** licensed for copying by this repository's MIT code license. Replace them before adapting the code. Attribution is appreciated where appropriate.

Built and maintained by [Santhosh Vishal](https://github.com/vsv2014).
