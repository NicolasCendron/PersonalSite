import type { Config } from 'tailwindcss'
import { colors, fontSizes, motion } from './src/styles/tokens'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: colors.bg,
        surface: colors.surface,
        surface2: colors.surface2,
        border: colors.border,
        text: colors.text,
        'text-muted': colors.textMuted,
        accent: colors.accent,
        'accent-dim': colors.accentDim,
        available: colors.available,
      },
      fontSize: {
        display: fontSizes.display,
        heading: fontSizes.heading,
        subhead: fontSizes.subhead,
        body: fontSizes.body,
        caption: fontSizes.caption,
      },
      transitionDuration: {
        fast: motion.fast,
        normal: motion.normal,
      },
      transitionTimingFunction: {
        brand: motion.easing,
      },
    },
  },
} satisfies Config
