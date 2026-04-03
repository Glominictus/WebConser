import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import gl from './locales/gl.json'
import es from './locales/es.json'

function syncDocumentLang(lng) {
  const htmlLang = lng === 'es' ? 'es' : 'gl'
  document.documentElement.lang = htmlLang
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      gl: { translation: gl },
      es: { translation: es },
    },
    fallbackLng: 'gl',
    supportedLngs: ['gl', 'es'],
    load: 'languageOnly',
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  })
  .then(() => {
    syncDocumentLang(i18n.language || 'gl')
  })

i18n.on('languageChanged', (lng) => {
  syncDocumentLang(lng)
})

export default i18n
