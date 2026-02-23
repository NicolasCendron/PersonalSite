# Spec 03 — Navbar

## Purpose
Persistent navigation that appears after the user scrolls past the hero.
Provides identity anchor, social links, and language switcher.

---

## Behaviour
- **Hidden** while hero section is visible (at top of page)
- **Appears** with a smooth fade+slide-down once user scrolls past the hero
- **Fixed** to top of viewport (`position: fixed`)
- Background: `surface` with a subtle bottom border — not fully opaque to avoid heaviness

## Scroll detection
Uses `IntersectionObserver` on the Hero `<section>` element.
When hero leaves viewport → navbar becomes visible.
No scroll event listeners (performance — uses browser-native IO).

---

## Layout

```
┌─────────────────────────────────────────────────────┐
│  Nicolas Cendron          [EN|ES]  [GitHub] [LinkedIn] │
└─────────────────────────────────────────────────────┘
```

- Left: name as text link → scrolls to `#top` / `/`
- Right: language switcher + GitHub icon link + LinkedIn icon link
- Height: `48px` (`h-12`)
- Max width: same as hero (`max-w-6xl mx-auto`)
- Padding: `px-6 lg:px-16`

---

## Components
```
src/components/Navbar/
  index.tsx          # Navbar shell — handles visibility state via IntersectionObserver
  NavBrand.tsx       # Name text link on the left
  NavSocials.tsx     # GitHub + LinkedIn icon links
  NavLangSwitch.tsx  # EN / ES toggle button
```

---

## Social links
Imported from `src/data/social.ts` — no hardcoded URLs in components.

## Icons
Use `lucide-react` for GitHub and LinkedIn icons (`Github`, `Linkedin`).

---

## i18n
```json
{
  "navbar": {
    "brand": "Nicolas Cendron",
    "ariaLabel": "Main navigation",
    "github": "GitHub profile",
    "linkedin": "LinkedIn profile",
    "langSwitch": {
      "en": "EN",
      "es": "ES",
      "ariaLabel": "Switch language"
    }
  }
}
```

---

## Accessibility
- `<nav>` with `aria-label` from i18n
- Social links: `aria-label` describing destination
- Language switcher: `aria-label` + `aria-pressed` on active language
- `role="button"` not needed — use `<button>` natively

---

## Tests (TDD — write first)
```
tests/components/Navbar/
  NavBrand.test.tsx        # renders name, has correct href
  NavSocials.test.tsx      # renders GitHub + LinkedIn links with correct href + aria-label
  NavLangSwitch.test.tsx   # renders EN and ES buttons, active state reflects current lang
  Navbar.test.tsx          # renders hidden by default, visible prop makes it visible
```

---

## Status
- [ ] Install lucide-react
- [ ] Add i18n keys (EN + ES)
- [ ] Write tests
- [ ] Implement NavBrand
- [ ] Implement NavSocials
- [ ] Implement NavLangSwitch
- [ ] Implement Navbar shell with IntersectionObserver
- [ ] Wire into App
