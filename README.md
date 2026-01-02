# Nicholas Ho — Dual Persona Portfolio

Backend Developer & IT Support Specialist portfolio built with Next.js 14 (App Router), Tailwind, and Framer Motion. The site supports two personas (Dev / IT) and light/dark appearance toggles, with section filtering and animated transitions.

## Features
- Dual persona toggle (Developer vs IT): content, timeline, and skills filter automatically.
- Light/dark appearance toggle with accent theming (blue/emerald).
- Multi-page structure: Overview, About, Experience, Projects, Services, Contact.
- Floating contact bar for quick email/phone/LinkedIn/GitHub actions.
- Framer Motion transitions and Tailwind styling (CDN fallback is enabled while the local Tailwind pipeline is flaky).

## Getting Started
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Building
```bash
npm run build
npm run start
```

## Linting
`npm run lint` currently errors because the default `eslint.config.mjs` imports a non-exported path from ESLint 8. I can patch it to a working config (e.g., using `eslint/config` replacement) if you want.

## Deploying to GitHub Pages
- GitHub Pages itself doesn’t require a LICENSE file.  
- If you want others to use/modify the code, add a LICENSE (MIT is common) and commit it. If the code is private or closed-source, you can skip a LICENSE.
- For static export, set up `next export` or use a GitHub Actions workflow that builds and publishes `out/` to `gh-pages`.

## Notes
- `.gitignore` includes Node/Next artifacts, env files, and editor cruft.
- Contact bar anchors: email `nicholasriven717@gmail.com`, phone `437-660-3280`, LinkedIn `linkedin.com/in/nicholaschho`, GitHub `github.com/eipi717`.
