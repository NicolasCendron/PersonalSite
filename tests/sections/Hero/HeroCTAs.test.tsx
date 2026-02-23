import { screen } from '@testing-library/react'
import { HeroCTAs } from '../../../src/sections/Hero/HeroCTAs'
import { renderWithI18n } from '../../utils/renderWithI18n'

describe('HeroCTAs', () => {
  beforeEach(() => {
    renderWithI18n(<HeroCTAs />)
  })

  it('renders the contact CTA', () => {
    expect(screen.getByTestId('cta-contact')).toBeInTheDocument()
  })

  it('contact CTA links to the contact section', () => {
    expect(screen.getByTestId('cta-contact')).toHaveAttribute('href', '#contact')
  })
})
