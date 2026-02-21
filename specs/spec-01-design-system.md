# Spec 01 — Design System

## Purpose
Define the visual tokens that the entire site consumes.
No component writes a color, font, or spacing value that isn't defined here.
Single source of truth: `src/styles/tokens.ts` — consumed by both Tailwind config and TypeScript.

---

## Color Palette

### Base
| Token              | Hex       | Usage                        |
|--------------------|-----------|------------------------------|
| `bg`               | `#070d1a` | Page background              |
| `surface`          | `#0d1b2a` | Cards, panels                |
| `surface2`         | `#132336` | Hover states, elevated cards |
| `border`           | `#1e3a5f` | Subtle borders               |

### Text
| Token              | Hex       | Usage                        |
|--------------------|-----------|------------------------------|
| `text`             | `#e8f0fe` | Primary text                 |
| `textMuted`        | `#6b8cae` | Secondary / captions         |

### Accent
| Token              | Hex       | Usage                        |
|--------------------|-----------|------------------------------|
| `accent`           | `#3b82f6` | CTAs, links, highlights      |
| `accentDim`        | `#1d4ed8` | Accent hover / pressed       |

---

## Typography

**Font**: Inter — clean, legible, standard in EU product design.

| Token       | Size     | Weight | Usage           |
|-------------|----------|--------|-----------------|
| `display`   | 4rem     | 700    | Hero headline   |
| `heading`   | 2rem     | 600    | Section titles  |
| `subhead`   | 1.25rem  | 500    | Card titles     |
| `body`      | 1rem     | 400    | Body copy       |
| `caption`   | 0.875rem | 400    | Labels, meta    |

---

## Motion
Subtle and purposeful — no autoplay animations.

| Token          | Value      | Usage                      |
|----------------|------------|----------------------------|
| `fast`         | `150ms`    | Hover states               |
| `normal`       | `300ms`    | Transitions, scroll entry  |
| `easing`       | `ease-out` | All transitions            |

---

## Implementation

### `src/styles/tokens.ts`
Single source of truth. Exports a typed object with all token values.
Consumed by `tailwind.config.ts` (theme extension) and optionally by components for inline logic.

### `tailwind.config.ts`
Imports from `tokens.ts` and maps values into `theme.extend`.
Tailwind class names reflect token names (e.g. `bg-surface`, `text-accent`).

### In components
Use Tailwind classes derived from tokens. Never hardcode hex.

---

## Breakpoints (Tailwind defaults, mobile-first)
Primary design target: `lg` (1024px+).

---

## Status
- [ ] Create `src/styles/tokens.ts`
- [ ] Wire into `tailwind.config.ts`
- [ ] Smoke-test: render all color tokens visually
