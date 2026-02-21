import { render, screen } from '@testing-library/react'
import { TechChips } from '../../../src/sections/Hero/TechChips'

const PLATFORM_CHIPS = ['WebSockets', 'WebAssembly', 'Canvas', 'IndexedDB', 'BFF', 'Docker']
const FRAMEWORK_CHIPS = ['React', 'Angular', 'Vue', 'TypeScript']

describe('TechChips', () => {
  beforeEach(() => {
    render(<TechChips />)
  })

  it('renders the platform chips row', () => {
    expect(screen.getByTestId('tech-chips-platform')).toBeInTheDocument()
  })

  it('renders the framework chips row', () => {
    expect(screen.getByTestId('tech-chips-frameworks')).toBeInTheDocument()
  })

  it.each(PLATFORM_CHIPS)('renders platform chip: %s', (label) => {
    expect(screen.getByTestId(`chip-${label}`)).toBeInTheDocument()
  })

  it.each(FRAMEWORK_CHIPS)('renders framework chip: %s', (label) => {
    expect(screen.getByTestId(`chip-${label}`)).toBeInTheDocument()
  })
})
