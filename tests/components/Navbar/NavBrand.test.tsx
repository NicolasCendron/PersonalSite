import { screen } from '@testing-library/react'
import { NavBrand } from '../../../src/components/Navbar/NavBrand'
import { renderWithI18n } from '../../utils/renderWithI18n'

describe('NavBrand', () => {
  beforeEach(() => {
    renderWithI18n(<NavBrand />)
  })

  it('renders the brand element', () => {
    expect(screen.getByTestId('nav-brand')).toBeInTheDocument()
  })

  it('links to the top of the page', () => {
    expect(screen.getByTestId('nav-brand')).toHaveAttribute('href', '#top')
  })

  it('displays the name', () => {
    expect(screen.getByTestId('nav-brand')).toHaveTextContent('Nicolas Cendron')
  })
})
