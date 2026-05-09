import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../test-utils'
import MobileNavbar from '../MobileNavbar'

describe('MobileNavbar', () => {
  it('renders mobile navigation', () => {
    renderWithProviders(<MobileNavbar />)
    expect(screen.getByRole('navigation', { name: /mobile/i })).toBeInTheDocument()
  })

  it('renders all nav icons with aria labels', () => {
    renderWithProviders(<MobileNavbar />)
    expect(screen.getByRole('link', { name: /inicio/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /experiencia/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /proyectos/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /herramientas/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sobre mí/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contacto/i })).toBeInTheDocument()
  })
})
