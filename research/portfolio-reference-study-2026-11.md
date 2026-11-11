# Portfolio design R&D — November 2026

## Decision
Keep **Aurora**: editorial type, dark/light tokens, interactive engineering demos, keyboard palette, and the current portrait. The original design already establishes technical credibility. Improve the reading path before adding more effects.

## Public open-source references reviewed

| Reference | Repository | License (as listed in repository) | Adapt / reject |
|---|---|---|---|
| Chan Dai, design engineer | https://github.com/ncdai/chanhdai.com | MIT; trademark/name/logo excepted | Adopt precision, hierarchy, accessible component-showcase framing; never reuse identity/branding |
| Magic UI portfolio | https://github.com/magicuidesign/portfolio | MIT | Adopt short, recruiter-readable intro and selective highlights; not a Next.js migration |
| Ryan Fitzgerald DevPortfolio | https://github.com/RyanFitzgerald/devportfolio | MIT | Adopt clear project grouping and readable detail; not a theme replacement |
| Motion Primitives | https://github.com/ibelick/motion-primitives | MIT | Only purposeful disclosure and focus feedback; do not bundle more motion libraries |
| Brittany Chiang v4 | https://github.com/bchiang7/v4 | MIT; author requests attribution for forks | Excellent project hierarchy; avoid cloning personal branding/style |
| vinitshahdeo portfolio | https://github.com/vinitshahdeo/portfolio | MIT code, CC BY-NC-SA 4.0 content/images | Useful reminder to separate content/image rights; do not copy photos or text |

All implemented UI in this change set is original React/Tailwind code. Sources are design research and not imported source, assets, or screenshots.

## Findings from our own code review

1. The `src/components/sections/Projects.tsx` archive showed all **23** projects at once, including seven professional entries, independent builds, and research/academic work. Visitors had to parse too much before identifying the strongest examples.
2. Project entries were mostly long text in equal cards; there was no **problem → engineering decision → outcome** narrative.
3. The primary hero CTA went to the simulated AI console, not the actual work. The first click should support a hiring manager's due diligence.
4. The current React + Vite + Tailwind + Motion stack already supports selective, purposeful interactivity, without adding a UI framework.
5. Enterprise customer screenshots and source code should not be assumed shareable.

## Implemented

- Three high-signal, editorial case studies (ProcessAI, Artemis, WebSDK) based solely on the existing project dataset.
- Original HTML/CSS **conceptual** diagrams, explicitly labeled not customer screenshots, with accessible text equivalents.
- Short summary and measurable/grounded signal; detailed technical breakdown available with native keyboard-accessible `<details>` disclosure.
- Full 23-project archive remains available but is initially collapsed; the existing category filter still works.
- Hero primary action points to selected work; résumé remains prominent; craft demo and AI remain one click away.
- Keyboard skip-to-content and deep-link support from command-palette project search.
- Desktop/mobile Chromium smoke assertions for case-study disclosure, archive, filters and horizontal overflow.

## Future media (only after ownership and permission review)

For the biggest improvement after this release, collect *real* short clips, not stock or AI stand-ins:

1. **ProcessAI**: 15–25 second sanitized UI capture of node creation, connection, execution trace; blur tenant names, customer prompts, tokens and environment identifiers.
2. **Artemis**: 15–25 second sanitized authoring/canvas demo plus a separate hand-authored schematic of durable execution. Never show production secrets, customer data, or internal telemetry without approval.
3. **WebSDK**: 10–15 second before/after page load recording using identical conditions with genuine build outputs and an accompanying reproducible bundle-size report.
4. **Portrait**: use a real, consented high-resolution headshot (natural light, simple background). Do not synthesize or alter facial identity.

Implementation rule: videos lazy-load with `poster`, `preload="none"`, controls, captions/transcript, `prefers-reduced-motion` support, and static fallback. No autoplay with sound and no videos on the critical first paint.

## Deferred on purpose

- More WebGL/shaders, a second UI kit, 3D spinning objects, custom cursor gimmicks, auto-playing media, and decorative bento grids: all add complexity without improving evaluation of engineering work.
- Public client demos or case-study screenshots until disclosure is approved.
- New impact numbers or adoption claims without verified evidence.
- Rebuilding in Next.js/Astro just to mimic a portfolio template.

## Review criteria

- A hiring manager should understand role, strengths, top three examples, and résumé path in ~30 seconds.
- Every featured claim must map to the existing project data or explicitly marked illustrative schematic.
- Archive remains accessible by keyboard, touch and command palette.
- Desktop and mobile Chromium visual smoke tests, lint, native tests and production build remain green.
