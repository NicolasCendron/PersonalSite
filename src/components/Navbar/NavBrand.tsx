import { useTranslation } from 'react-i18next'

export function NavBrand() {
  const { t } = useTranslation()

  return (
    <a
      data-testid="nav-brand"
      href="#top"
      className="text-body font-semibold text-text hover:text-accent transition-colors duration-fast ease-brand"
    >
      {t('navbar.brand')}
    </a>
  )
}
