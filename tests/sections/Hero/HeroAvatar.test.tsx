import { render, screen } from '@testing-library/react'
import { HeroAvatar } from '../../../src/sections/Hero/HeroAvatar'

describe('HeroAvatar', () => {
  beforeEach(() => {
    render(<HeroAvatar src="/photo.jpg" alt="Nicolas Cendron" />)
  })

  it('renders the avatar container', () => {
    expect(screen.getByTestId('hero-avatar')).toBeInTheDocument()
  })

  it('renders the avatar image with correct alt text', () => {
    expect(screen.getByTestId('hero-avatar-img')).toHaveAttribute('alt', 'Nicolas Cendron')
  })

  it('renders the avatar image with correct src', () => {
    expect(screen.getByTestId('hero-avatar-img')).toHaveAttribute('src', '/photo.jpg')
  })
})
