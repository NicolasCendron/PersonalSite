import { useTranslation } from 'react-i18next'

export function HeroCTAs() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-wrap gap-4 mt-8">
      <a
        data-testid="cta-primary"
        href="#projects"
        className="px-6 py-3 rounded-md bg-accent text-text font-medium text-body transition-colors duration-fast ease-brand hover:bg-accent-dim"
      >
        {t('hero.cta.primary')}
      </a>
      <a
        data-testid="cta-secondary"
        href="#contact"
        className="px-6 py-3 rounded-md border border-border text-text-muted font-medium text-body transition-colors duration-fast ease-brand hover:border-accent hover:text-text"
      >
        {t('hero.cta.secondary')}
      </a>
    </div>
  )
}
