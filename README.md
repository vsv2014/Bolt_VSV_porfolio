# Santhosh Veerannapet — Portfolio

A modern, minimal portfolio built with React 19, Vite, Tailwind CSS v4 and Motion.
Live at **[vsv2014.github.io/Bolt_VSV_porfolio](https://vsv2014.github.io/Bolt_VSV_porfolio/)**.

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
├── styles/index.css        # Tailwind v4 + design tokens (@theme)
├── lib/utils.ts            # cn() class helper
├── types/index.ts          # Shared types
├── data/                   # All content (profile, experience, projects, …)
└── components/
    ├── ui/                 # Design-system primitives (Section, Card, Tag, …)
    ├── layout/             # Navbar, Footer, FloatingSocials
    └── sections/           # Page sections (Hero, About, Experience, …)
```

### Design tokens

The theme lives in `src/styles/index.css` under `@theme` — colors, fonts and
motion are defined once and consumed as Tailwind utilities (`text-fg`,
`border-line`, `text-brand-cyan`, `font-mono`, …).

### Adding project links

Project cards hide their links until you provide them. Add `githubUrl` and/or
`demoUrl` to any entry in `src/data/projects.ts` and the buttons appear
automatically.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/` to GitHub Pages.

## License

MIT.
