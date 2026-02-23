import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { createInstance } from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../../src/i18n/locales/en.json'
import es from '../../src/i18n/locales/es.json'

function createI18n(lng: 'en' | 'es' = 'en') {
  const instance = createInstance()
  instance.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })
  return instance
}

export function renderWithI18n(ui: React.ReactElement, lng: 'en' | 'es' = 'en') {
  const i18n = createI18n(lng)
  return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>)
}
