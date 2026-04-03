import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './index.css'
import logo from '../../../assets/img/logo-minimizado.png'
import flagGl from '../../../assets/img/flag-gl.svg'
import flagEs from '../../../assets/img/flag-es.svg'

export const Header = () => {
  const { t, i18n } = useTranslation()

  const resolved = (i18n.resolvedLanguage || i18n.language || 'gl').split('-')[0]
  const isGl = resolved === 'gl'
  const isEs = resolved === 'es'

  const setLang = (lng) => {
    void i18n.changeLanguage(lng)
  }

  return (
    <header className="header" role="banner">
      <Link to="/" className="header-brand" aria-label={t('header.brandAria')}>
        <img src={logo} alt="" className="header-logo" width={48} height={48} decoding="async" />
        <div className="header-brand-text">
          <span className="header-brand-acronym">{t('header.acronym')}</span>
          <span className="header-brand-loc">{t('header.location')}</span>
        </div>
      </Link>

      <div className="header-lang" role="group" aria-label={t('lang.selectorAria')}>
        <button
          type="button"
          className={`header-lang-btn${isGl ? ' header-lang-btn--active' : ''}`}
          onClick={() => setLang('gl')}
          aria-pressed={isGl}
          aria-label={t('lang.gl')}
        >
          <img src={flagGl} alt="" className="header-lang-flag" width={28} height={21} decoding="async" />
        </button>
        <button
          type="button"
          className={`header-lang-btn${isEs ? ' header-lang-btn--active' : ''}`}
          onClick={() => setLang('es')}
          aria-pressed={isEs}
          aria-label={t('lang.es')}
        >
          <img src={flagEs} alt="" className="header-lang-flag" width={28} height={21} decoding="async" />
        </button>
      </div>
    </header>
  )
}
