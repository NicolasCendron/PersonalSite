import { screen } from '@testing-library/react'
import { Navbar } from '../../../src/components/Navbar'
import { renderWithI18n } from '../../utils/renderWithI18n'

describe('Navbar', () => {
  it('always renders the nav element', () => {
    renderWithI18n(<Navbar scrolled={false} />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })

  it('always renders the lang switch in both modes', () => {
    renderWithI18n(<Navbar scrolled={false} />)
    expect(screen.getByTestId('lang-en')).toBeInTheDocument()
    expect(screen.getByTestId('lang-es')).toBeInTheDocument()
  })

  describe('minimal mode (scrolled=false)', () => {
    it('does not render the brand', () => {
      renderWithI18n(<Navbar scrolled={false} />)
      expect(screen.queryByTestId('nav-brand')).not.toBeInTheDocument()
    })

    it('does not render social links', () => {
      renderWithI18n(<Navbar scrolled={false} />)
      expect(screen.queryByTestId('nav-github')).not.toBeInTheDocument()
      expect(screen.queryByTestId('nav-linkedin')).not.toBeInTheDocument()
    })

    it('has minimal mode attribute', () => {
      renderWithI18n(<Navbar scrolled={false} />)
      expect(screen.getByTestId('navbar')).toHaveAttribute('data-mode', 'minimal')
    })
  })

  describe('full mode (scrolled=true)', () => {
    it('renders the brand', () => {
      renderWithI18n(<Navbar scrolled={true} />)
      expect(screen.getByTestId('nav-brand')).toBeInTheDocument()
    })

    it('renders social links', () => {
      renderWithI18n(<Navbar scrolled={true} />)
      expect(screen.getByTestId('nav-github')).toBeInTheDocument()
      expect(screen.getByTestId('nav-linkedin')).toBeInTheDocument()
    })

    it('has full mode attribute', () => {
      renderWithI18n(<Navbar scrolled={true} />)
      expect(screen.getByTestId('navbar')).toHaveAttribute('data-mode', 'full')
    })
  })
})
