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

## Social Links
Stored in `src/data/social.ts` — single source of truth for all components.

| Platform  | URL                                                        |
|-----------|------------------------------------------------------------|
| LinkedIn  | https://www.linkedin.com/in/nicolas-cendron-fernandes/     |
| GitHub    | https://github.com/NicolasCendron                          |

---

## Status
- [x] Scaffold project (React 19 + Vite + TS + Tailwind v4 + Jest + React Router v7)
- [x] Verify lint and test pipeline run clean
- [x] spec-01 — Design system tokens
- [x] spec-02 — Hero section (with i18n)
- [ ] spec-03 — Navbar (LinkedIn + GitHub + language switcher)
- [ ] spec-04 — Projects section (Netflix-style)
- [ ] spec-05 — Contact section
- [ ] spec-06 — Deployment (GitHub Actions + Vercel + domain)

## Backlog / Wishlist
Items to spec and build — not yet prioritised.

- [ ] **Navbar** — sticky after hero scroll, LinkedIn + GitHub icon links, language switcher (EN/ES)
- [ ] **Projects section** — Netflix-style, main projects row + minor projects row
- [ ] **Contact section** — form or direct links
- [ ] **Project sub-pages** — `/projects/:slug` module routes
- [ ] **CV / Resume download** — PDF export link in navbar or hero
- [ ] **Dark/light mode** — optional, low priority
- [ ] **GitHub Actions CI** — lint + build on every PR
- [ ] **Vercel deployment** — custom domain `nicolascendron.dev`
