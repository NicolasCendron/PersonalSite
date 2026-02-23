# Spec 05 — Contact Section

## Purpose
Let recruiters and collaborators reach Nicolas directly.
No form — direct contact links only. Simpler, more honest, no backend needed.

---

## Contact Details
Stored in `src/data/contact.ts` — single source of truth.

| Channel   | Value                        |
|-----------|------------------------------|
| Email     | nicolas.cendron@gmail.com    |
| Phone/WhatsApp | +34 661 445 801         |

---

## Layout

```
┌─────────────────────────────────────────┐
│                                         │
│  Let's work together.                   │
│  ──────────────────────                 │
│  I'm open to frontend roles,            │
│  tech lead positions, and               │
│  consulting across Europe.              │
│                                         │
│  [✉ nicolas.cendron@gmail.com]          │
│  [📱 +34 661 445 801]                   │
│  [in LinkedIn]  [⌥ GitHub]              │
│                                         │
└─────────────────────────────────────────┘
```

- Section id: `contact` (target for hero CTA)
- Full width, centered content, `max-w-2xl`
- Contact items use icons from `lucide-react` (`Mail`, `Phone`)
- Social links reuse `src/data/social.ts`

---

## i18n keys
```json
{
  "contact": {
    "heading": "Let's work together.",
    "subheading": "I'm open to frontend roles, tech lead positions, and consulting across Europe.",
    "email": "Email",
    "phone": "Phone / WhatsApp",
    "linkedin": "LinkedIn",
    "github": "GitHub"
  }
}
```

---

## Accessibility
- `<section id="contact">` with `aria-label`
- Contact links: descriptive `aria-label` on each
- Phone link uses `tel:` protocol
- WhatsApp link uses `https://wa.me/` — opens WhatsApp

---

## Component Structure
```
src/sections/Contact/
  index.tsx         # Full section
```
Single component — no sub-components needed at this scale.

---

## Tests (TDD)
```
tests/sections/Contact/
  Contact.test.tsx   # renders heading, email link, phone link, social links
```

---

## Status
- [ ] Create `src/data/contact.ts`
- [ ] Add i18n keys
- [ ] Write tests
- [ ] Implement Contact section
- [ ] Wire into App
