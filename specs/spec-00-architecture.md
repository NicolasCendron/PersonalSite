# Spec 00 — Architecture

## Purpose
Lock the stack, folder structure, and development constraints for the personal site.

---

## Identity
- **Owner**: Nicolas Cendron (Nicolas Cendron Fernandes)
- **Domain**: `nicolascendron.dev`
- **Audience**: European frontend market (hiring managers, tech leads, agencies)

---

## Stack

| Layer        | Choice                        | Version  |
|--------------|-------------------------------|----------|
| Framework    | React                         | 19.x     |
| Build Tool   | Vite                          | Latest   |
| Language     | TypeScript                    | 5.x      |
| Styling      | Tailwind CSS                  | v4       |
| Routing      | React Router                  | v7       |
| Testing      | Jest + React Testing Library  | Latest   |
| Linting      | ESLint + Prettier             | Latest   |
| i18n         | i18next + react-i18next       | Latest   |
| Deployment   | Vercel (GitHub CD)            | —        |

---

## Methodology
- **Spec Driven Development**: every feature has a spec before code.
- **TDD**: tests written before or alongside implementation, never after.
- **Small steps**: one spec → one feature → one PR. No big rewrites.

---

## Routing Strategy

| Route              | Description                              |
|--------------------|------------------------------------------|
| `/`                | Main single-page site (scroll sections)  |
| `/projects/:slug`  | Individual project module / sub-site     |

---

## Folder Structure

```
src/
  components/         # Reusable UI components
  sections/           # Page sections (Hero, Projects, Contact)
  projects/           # Project modules — each is a sub-route
    project-name/
      index.tsx
      components/
  assets/             # Images, icons, fonts
  styles/             # Global CSS / Tailwind base + tokens.ts
  types/              # Shared TypeScript types
  data/               # Static content (projects list, metadata)
  i18n/
    index.ts          # i18next setup
    locales/
      en.json         # English strings
      es.json         # Spanish strings
  router.tsx          # Route definitions
specs/                # Feature specs (this folder)
tests/                # Mirrors src/ structure
  __mocks__/          # File mocks for Jest
```

---

## Deployment Pipeline
```
git push main
  → GitHub Actions: lint + build check
  → Vercel: auto-deploy
  → nicolascendron.dev (custom domain)
```

## Deployment Notes
- `.dev` TLD is on the HSTS preload list — HTTPS is mandatory and enforced.
- SSL: free Let's Encrypt cert via Vercel (handled automatically).
- No HTTP fallback needed; Vercel enforces HTTPS by default.

---

## i18n Rules
- Languages: **English** and **Spanish**
- No hardcoded text strings in components — all through translation keys
- Key format: `section.component.element` (e.g. `hero.headline.title`)
- Language switcher: future component (spec TBD)
- Detection: browser language (`navigator.language`) — Spanish (`es-*`) → ES, everything else → EN
- Override: manual language switch persisted to `localStorage`

---

## Status
- [x] Scaffold project (React 19 + Vite + TS + Tailwind v4 + Jest + React Router v7)
- [x] Verify lint and test pipeline run clean
- [ ] Write spec-01-design-system.md
- [ ] Write spec-02-hero-section.md
- [ ] Write spec-03-projects-section.md
- [ ] Write spec-04-deployment.md
