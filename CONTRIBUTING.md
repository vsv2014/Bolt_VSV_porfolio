# Contributing to Aurora

Thanks for taking an interest in the portfolio's interactive frontend implementations.

## Where contributions help most

- Accessibility: keyboard, focus visibility, reduced-motion support, screen-reader labeling
- Correctness: node editing, virtualization boundaries, cross-browser rendering
- Performance: measurable rendering, loading and animation regressions with a baseline
- Tests and docs: small, reproducible examples and clear explanations

This repository contains a **real person's portfolio**, not a generic dataset. Do **not** replace project facts, résumé claims, identity, contact details, or employer/product information as part of general improvements.

## Report a bug

Use [Bug report](https://github.com/vsv2014/Bolt_VSV_porfolio/issues/new/choose) and include:

1. Desktop/mobile device, browser and version
2. Actual result versus expected result
3. Minimal reproduction steps, screenshots or a short screen recording where useful
4. Whether dark/light theme and reduced-motion preferences change the result

Please remove secrets, personal data, customer identifiers and proprietary source material from screenshots or logs. For possible security vulnerabilities, contact the maintainer privately rather than posting proof-of-concept details in a public issue.

## Development workflow

Node.js 22+ and npm required.

```bash
npm ci
npm run dev
# visit http://localhost:3001

npm run lint
npm test
npm run build
```

When changing a browser interaction, run the Chromium smoke suite through CI and verify at narrow mobile width as well as desktop. Include a test covering your regression when feasible.

Keep PRs scoped to one issue or improvement. Include before/after behavior, screenshots for visible UI changes, and the tests you ran. Ensure the console's retrieval trace is represented accurately as a client-side simulation; do not describe it as real LLM/vector inference.

## Design guardrails

- Preserve Aurora's typography and token-driven dark/light modes.
- Prefer browser APIs and existing libraries over more dependencies.
- Do not add auto-playing or heavy media to the critical loading path.
- Support keyboard, touch and reduced-motion behavior.
- Keep employer/customer imagery and code out of the public repository.

## Content and licensing

Original source code is MIT-licensed (see [LICENSE](LICENSE)). Personal photographs, individual identifying details, CV/resume claims, research descriptions, trademarks and any third-party content are not offered as reusable template assets. Replace them if adapting the implementation.

Maintainers review contributions when available; opening a PR does not guarantee merging.
