import { screen } from '@testing-library/react'
import { HeroHeadline } from '../../../src/sections/Hero/HeroHeadline'
import { renderWithI18n } from '../../utils/renderWithI18n'

describe('HeroHeadline', () => {
  beforeEach(() => {
    renderWithI18n(<HeroHeadline />)
  })

  it('renders the name', () => {
    expect(screen.getByTestId('hero-name')).toBeInTheDocument()
  })

  it('renders the availability badge', () => {
    expect(screen.getByTestId('hero-availability')).toBeInTheDocument()
  })

  it('renders the location and EU Citizen signal', () => {
    expect(screen.getByTestId('hero-location')).toBeInTheDocument()
  })

  it('renders the h1 headline', () => {
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders the sub-headline', () => {
    expect(screen.getByTestId('hero-subheadline')).toBeInTheDocument()
  })

  it('renders the languages line', () => {
    expect(screen.getByTestId('hero-languages')).toBeInTheDocument()
  })
})
