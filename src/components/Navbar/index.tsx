import { useTranslation } from 'react-i18next'
import { NavBrand } from './NavBrand'
import { NavSocials } from './NavSocials'
import { NavLangSwitch } from './NavLangSwitch'

interface NavbarProps {
  scrolled: boolean
}

export function Navbar({ scrolled }: NavbarProps) {
  const { t } = useTranslation()

  return (
    <nav
      data-testid="navbar"
      data-mode={scrolled ? 'full' : 'minimal'}
      aria-label={t('navbar.ariaLabel')}
      className="fixed top-0 left-0 right-0 z-50 h-12"
      style={{
        background: scrolled ? '#0d1b2a' : 'transparent',
        borderBottom: scrolled ? '1px solid #1e3a5f' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: 'background 300ms ease-out, border-color 300ms ease-out, backdrop-filter 300ms ease-out',
      }}
    >
      <div className="h-full max-w-6xl mx-auto px-6 lg:px-16 flex items-center justify-between">
        {scrolled ? <NavBrand /> : <div />}
        <div className="flex items-center gap-6">
          {scrolled && <NavSocials />}
          <NavLangSwitch />
        </div>
      </div>
    </nav>
  )
}
