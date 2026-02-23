import { screen } from '@testing-library/react'
import { Contact } from '../../../src/sections/Contact'
import { renderWithI18n } from '../../utils/renderWithI18n'
import { contact } from '../../../src/data/contact'
import { social } from '../../../src/data/social'

describe('Contact', () => {
  beforeEach(() => {
    renderWithI18n(<Contact />)
  })

  it('renders the section with correct id', () => {
    expect(screen.getByTestId('contact-section')).toHaveAttribute('id', 'contact')
  })

  it('renders the heading', () => {
    expect(screen.getByTestId('contact-heading')).toBeInTheDocument()
  })

  it('renders the subheading', () => {
    expect(screen.getByTestId('contact-subheading')).toBeInTheDocument()
  })

  it('renders the email link with correct href', () => {
    expect(screen.getByTestId('contact-email')).toHaveAttribute('href', `mailto:${contact.email}`)
  })

  it('renders the LinkedIn link with correct href', () => {
    expect(screen.getByTestId('contact-linkedin')).toHaveAttribute('href', social.linkedin)
  })

  it('renders the GitHub link with correct href', () => {
    expect(screen.getByTestId('contact-github')).toHaveAttribute('href', social.github)
  })
})
