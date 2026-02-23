import { useTranslation } from 'react-i18next'

export function NavLangSwitch() {
  const { t, i18n } = useTranslation()
  const current = i18n.language?.startsWith('es') ? 'es' : 'en'

  function switchTo(lang: 'en' | 'es') {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="flex items-center gap-1" aria-label={t('navbar.langSwitch.ariaLabel')}>
      {(['en', 'es'] as const).map((lang) => (
        <button
          key={lang}
          data-testid={`lang-${lang}`}
          aria-pressed={current === lang}
          onClick={() => switchTo(lang)}
          className={`px-2 py-0.5 rounded text-caption font-medium cursor-pointer transition-colors duration-fast ease-brand
            ${current === lang
              ? 'text-accent bg-surface2'
              : 'text-text-muted hover:text-text'
            }`}
        >
          {t(`navbar.langSwitch.${lang}`)}
        </button>
      ))}
    </div>
  )
}
