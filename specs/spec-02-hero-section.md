# Spec 02 — Hero Section

## Purpose
First impression. Communicate who Nicolas is, what he builds, and invite the visitor into his work.
Must load instantly, require no interaction to read, and work on all viewports.

---

## Positioning Strategy

Nicolas has 8 years of frontend experience:
- Deep Vue expertise (5 years)
- 4 years leading frontend teams, driving project direction
- Negotiating and collaborating with POs, Directors, and Designers
- Actively expanding into React and Angular ecosystem
- Specialist in browser-native performance: WebSockets, IndexedDB, HTML Canvas, WebAssembly
- BFF pattern, Docker, process/system thinking — bridges frontend and infrastructure

**Profile**: Performance-obsessed frontend lead who builds at the edge of the browser.
Not CRUD UIs — real-time data, offline-first, compute-heavy, browser-native systems.

**Framing principle**: Lead with technical depth + leadership. Frameworks are secondary.
He is a **Frontend Systems Lead** — someone who goes where most frontend devs stop.
Vue depth is a foundation, not a limitation. React/Angular expansion is in progress and visible (this site).

**Differentiator for the EU market**: Deep browser platform knowledge (WASM, Canvas, WebSockets)
is rare. Docker + BFF awareness signals he can collaborate with backend and infra teams as an equal.

**Tone**: Direct, confident, European-professional. No buzzwords. No "passionate about".

---

## Content

### Name + meta line (above headline)
```
Nicolas Cendron
● Open to opportunities · Spain · EU Citizen
```

- Availability: small green dot (`#22c55e`) + text — recruiter-visible signal
- Spain: location context for EU employers
- EU Citizen: removes the right-to-work question before it's asked — critical for cross-border roles

### Languages line (below sub-headline, caption/muted)
```
EN · PT (Fluent)  ·  ES (Intermediate)  ·  IT (Learning)
```
Displayed as subtle muted text. Signals cross-cultural range — strong for distributed EU teams.

### Headline (display)
```
Frontend Lead.
Building at the edge of the browser.
```

### Sub-headline (subhead, muted)
```
8 years of frontend. 4 years leading teams.
Real-time data, Canvas, WebAssembly, BFF —
where most UIs stop, I start.
Vue specialist. Expanding into React & Angular.
```

### Languages (caption, muted — below sub-headline)
```
EN · PT  Fluent   ·   ES  Intermediate   ·   IT  Learning
```

### Tech chips (caption, surface2 bg)
Two rows — **Platform** skills first (differentiators), then **Frameworks**.

Row 1 (platform):
`WebSockets` · `WebAssembly` · `Canvas` · `IndexedDB` · `BFF` · `Docker`

Row 2 (frameworks/lang):
`React` · `Angular` · `Vue` · `TypeScript`

### CTAs
- Primary: **See my work** → scrolls to `#projects`
- Secondary: **Get in touch** → scrolls to `#contact`

---

## Layout

### Desktop (`lg+`) — two-column

```
┌──────────────────────────────┬──────────────┐
│                              │              │
│  Nicolas Cendron             │  ╭────────╮  │
│  ● Open to opps · Spain      │  │        │  │
│    · EU Citizen              │  │ PHOTO  │  │
│  ─────────────────────────   │  │        │  │
│  Frontend Lead.              │  ╰────────╯  │
│  Building at the edge        │              │
│  of the browser.             │              │
│                              │              │
│  8 years of frontend.        │              │
│  4 years leading teams.      │              │
│  Where most UIs stop,        │              │
│  I start.                    │              │
│  Vue specialist. Expanding   │              │
│  into React & Angular.       │              │
│                              │              │
│  EN·PT Fluent · ES Mid       │              │
│  · IT Learning               │              │
│                              │              │
│  [WebSockets][WASM][Canvas]  │              │
│  [IndexedDB][BFF][Docker]    │              │
│  [React][Angular][Vue][TS]   │              │
│                              │              │
│  [See my work ↓] [Contact]   │              │
│                              │              │
└──────────────────────────────┴──────────────┘
```

### Mobile — single column, photo above text

```
┌──────────────────────┐
│       ╭──────╮       │
│       │PHOTO │       │
│       ╰──────╯       │
│                      │
│  Nicolas Cendron     │
│  ● Open to opps      │
│  Frontend Lead.      │
│  Building at the     │
│  edge of the browser.│
│  ...                 │
│  [chips]             │
│  [CTA] [CTA]         │
└──────────────────────┘
```

### Layout rules
- Full viewport height (`min-h-screen`) on desktop.
- Left column: content. Right column: avatar — fixed ratio, does not grow.
- Avatar: circle, `accent`-colored ring border, no background fill (photo only).
- `● Open to opportunities` — small green dot (`#22c55e`) + caption text, below name.
- Mobile: photo centered above text, smaller size.

---

## Behaviour
- No autoplay animation.
- CTA buttons scroll smoothly to target section.
- On scroll past hero → nav bar appears (future spec).

---

## Accessibility
- `<section>` with `aria-label="Introduction"`
- Name in `<p>` (caption), headline in `<h1>`, sub-headline in `<p>`
- Tech chips as `<ul>` / `<li>`
- CTAs as `<a href="#projects">` / `<a href="#contact">` for semantic correctness

---

## Component Structure
```
src/sections/Hero/
  index.tsx            # Section entry point, assembles sub-components
  HeroHeadline.tsx     # Name + meta line (availability · Spain · EU Citizen) + h1 + sub-headline + languages
  HeroAvatar.tsx       # Circle photo with accent ring border
  TechChips.tsx        # Two-row pill badge list (platform + frameworks)
  HeroCTAs.tsx         # Two CTA anchor buttons
```

---

## Tests (TDD — write first)
```
tests/sections/Hero/
  HeroHeadline.test.tsx   # renders name, availability badge, headline, sub-headline
  HeroAvatar.test.tsx     # renders img with alt text + accent ring
  TechChips.test.tsx      # renders platform row + framework row, all labels present
  HeroCTAs.test.tsx       # renders both CTAs with correct href targets
```

---

## Identity Reference
- **Name**: Nicolas Cendron (Nicolas Cendron Fernandes)
- **Nationality**: Italo-Brazilian · EU Citizen
- **Location**: Spain (city optional — Spain-level is sufficient for EU signal)
- **Languages**: EN/PT Fluent · ES Intermediate · IT Learning
- **Right to Work**: Full EU — no visa sponsorship needed

## Open Questions
- [ ] Specific city in Spain? Or keep it as "Spain" only?
- [ ] Photo: placeholder in dev, real photo before launch
- [ ] Avatar / photo: future consideration for more elaborate treatment

---

## Status
- [ ] Write tests
- [ ] Implement HeroHeadline
- [ ] Implement TechChips
- [ ] Implement HeroCTAs
- [ ] Assemble Hero section in index.tsx
- [ ] Verify on mobile + desktop viewports
