import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../test-utils'
import SobreMi from '../SobreMi'

describe('SobreMi', () => {
  it('renders section with id sobre-mi', () => {
    renderWithProviders(<SobreMi />)
    expect(document.getElementById('sobre-mi')).toBeInTheDocument()
  })

  it('renders the title', () => {
    renderWithProviders(<SobreMi />)
    expect(screen.getByRole('heading', { name: /sobre mí/i })).toBeInTheDocument()
  })

  it('renders personal description paragraphs', () => {
    renderWithProviders(<SobreMi />)
    expect(screen.getByText(/patricio garcía/i)).toBeInTheDocument()
    expect(screen.getByText(/videojuegos/i)).toBeInTheDocument()
  })

  it('renders the four value cards', () => {
    renderWithProviders(<SobreMi />)
    expect(screen.getByText('Quién soy')).toBeInTheDocument()
    expect(screen.getByText('Misión')).toBeInTheDocument()
    expect(screen.getByText('Visión')).toBeInTheDocument()
    expect(screen.getByText('Valores')).toBeInTheDocument()
  })

  it('renders gaming ranks', () => {
    renderWithProviders(<SobreMi />)
    expect(screen.getByText('Overwatch')).toBeInTheDocument()
    expect(screen.getByText('Master')).toBeInTheDocument()
    expect(screen.getByText('Rocket League')).toBeInTheDocument()
    expect(screen.getByText('Diamond III')).toBeInTheDocument()
  })
})
