import { useTranslation } from 'react-i18next'

export function HeroHeadline() {
  const { t } = useTranslation()

  return (
    <div>
      <p data-testid="hero-name" className="text-subhead font-semibold text-text">
        {t('hero.name')}
      </p>

      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
        <span
          data-testid="hero-availability"
          className="flex items-center gap-1.5 text-caption text-text-muted"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-available" aria-hidden="true" />
          {t('hero.availability')}
        </span>
        <span aria-hidden="true" className="text-text-muted text-caption">·</span>
        <span data-testid="hero-location" className="text-caption text-text-muted">
          {t('hero.location')}
        </span>
      </div>

      <h1 className="text-display font-bold text-text leading-tight mt-6 whitespace-pre-line">
        {t('hero.headline')}
      </h1>

      <p
        data-testid="hero-subheadline"
        className="text-subhead text-text-muted mt-4 leading-relaxed whitespace-pre-line"
      >
        {t('hero.subheadline')}
      </p>

      <p data-testid="hero-languages" className="text-caption text-text-muted mt-3">
        {t('hero.languages')}
      </p>
    </div>
  )
}
