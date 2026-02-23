import { useTranslation } from 'react-i18next'

export function HeroCTAs() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-wrap gap-4 mt-8">
      <a
        data-testid="cta-contact"
        href="#contact"
        className="px-6 py-3 rounded-md bg-accent text-text font-medium text-body transition-colors duration-fast ease-brand hover:bg-accent-dim"
      >
        {t('hero.cta.contact')}
      </a>
    </div>
  )
}
