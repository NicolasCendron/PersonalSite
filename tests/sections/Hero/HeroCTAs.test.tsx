import { screen } from '@testing-library/react'
import { HeroCTAs } from '../../../src/sections/Hero/HeroCTAs'
import { renderWithI18n } from '../../utils/renderWithI18n'

describe('HeroCTAs', () => {
  beforeEach(() => {
    renderWithI18n(<HeroCTAs />)
  })

  it('renders the primary CTA', () => {
    expect(screen.getByTestId('cta-primary')).toBeInTheDocument()
  })

  it('renders the secondary CTA', () => {
    expect(screen.getByTestId('cta-secondary')).toBeInTheDocument()
  })

  it('primary CTA links to the projects section', () => {
    expect(screen.getByTestId('cta-primary')).toHaveAttribute('href', '#projects')
  })

  it('secondary CTA links to the contact section', () => {
    expect(screen.getByTestId('cta-secondary')).toHaveAttribute('href', '#contact')
  })
})
