import { screen } from '@testing-library/react'
import { NavSocials } from '../../../src/components/Navbar/NavSocials'
import { renderWithI18n } from '../../utils/renderWithI18n'
import { social } from '../../../src/data/social'

describe('NavSocials', () => {
  beforeEach(() => {
    renderWithI18n(<NavSocials />)
  })

  it('renders the GitHub link', () => {
    expect(screen.getByTestId('nav-github')).toBeInTheDocument()
  })

  it('renders the LinkedIn link', () => {
    expect(screen.getByTestId('nav-linkedin')).toBeInTheDocument()
  })

  it('GitHub link points to the correct URL', () => {
    expect(screen.getByTestId('nav-github')).toHaveAttribute('href', social.github)
  })

  it('LinkedIn link points to the correct URL', () => {
    expect(screen.getByTestId('nav-linkedin')).toHaveAttribute('href', social.linkedin)
  })

  it('social links open in a new tab', () => {
    expect(screen.getByTestId('nav-github')).toHaveAttribute('target', '_blank')
    expect(screen.getByTestId('nav-linkedin')).toHaveAttribute('target', '_blank')
  })

  it('social links have aria-labels', () => {
    expect(screen.getByTestId('nav-github')).toHaveAttribute('aria-label')
    expect(screen.getByTestId('nav-linkedin')).toHaveAttribute('aria-label')
  })
})
