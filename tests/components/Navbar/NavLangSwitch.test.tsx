import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavLangSwitch } from '../../../src/components/Navbar/NavLangSwitch'
import { renderWithI18n } from '../../utils/renderWithI18n'

describe('NavLangSwitch', () => {
  it('renders EN and ES buttons', () => {
    renderWithI18n(<NavLangSwitch />)
    expect(screen.getByTestId('lang-en')).toBeInTheDocument()
    expect(screen.getByTestId('lang-es')).toBeInTheDocument()
  })

  describe('when browser language is English', () => {
    beforeEach(() => {
      renderWithI18n(<NavLangSwitch />, 'en')
    })

    it('EN is active by default', () => {
      expect(screen.getByTestId('lang-en')).toHaveAttribute('aria-pressed', 'true')
    })

    it('ES is inactive by default', () => {
      expect(screen.getByTestId('lang-es')).toHaveAttribute('aria-pressed', 'false')
    })
  })

  describe('when browser language is Spanish', () => {
    beforeEach(() => {
      renderWithI18n(<NavLangSwitch />, 'es')
    })

    it('ES is active by default', () => {
      expect(screen.getByTestId('lang-es')).toHaveAttribute('aria-pressed', 'true')
    })

    it('EN is inactive by default', () => {
      expect(screen.getByTestId('lang-en')).toHaveAttribute('aria-pressed', 'false')
    })
  })

  it('switches to ES when ES button is clicked', async () => {
    renderWithI18n(<NavLangSwitch />, 'en')
    await userEvent.click(screen.getByTestId('lang-es'))
    expect(screen.getByTestId('lang-es')).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByTestId('lang-en')).toHaveAttribute('aria-pressed', 'false')
  })

  it('switches back to EN when EN button is clicked', async () => {
    renderWithI18n(<NavLangSwitch />, 'es')
    await userEvent.click(screen.getByTestId('lang-en'))
    expect(screen.getByTestId('lang-en')).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByTestId('lang-es')).toHaveAttribute('aria-pressed', 'false')
  })
})
