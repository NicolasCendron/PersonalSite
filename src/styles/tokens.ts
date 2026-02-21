export const colors = {
  bg: '#070d1a',
  surface: '#0d1b2a',
  surface2: '#132336',
  border: '#1e3a5f',
  text: '#e8f0fe',
  textMuted: '#6b8cae',
  accent: '#3b82f6',
  accentDim: '#1d4ed8',
  available: '#22c55e',
} as const

export const fontSizes = {
  display: '4rem',
  heading: '2rem',
  subhead: '1.25rem',
  body: '1rem',
  caption: '0.875rem',
} as const

export const motion = {
  fast: '150ms',
  normal: '300ms',
  easing: 'ease-out',
} as const

export const tokens = { colors, fontSizes, motion } as const

export type Tokens = typeof tokens
