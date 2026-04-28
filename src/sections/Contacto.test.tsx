import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LanguageProvider } from '../context/LanguageContext'
import Contacto from './Contacto'

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <MemoryRouter>
      <LanguageProvider>{ui}</LanguageProvider>
    </MemoryRouter>
  )
}

describe('Contacto', () => {
  it('renders the contact section', () => {
    renderWithProviders(<Contacto />)
    expect(screen.getByRole('heading', { name: /contacto/i })).toBeInTheDocument()
  })

  it('has a disabled submit button', () => {
    renderWithProviders(<Contacto />)
    const submitBtn = screen.getByRole('button', { name: /enviar mensaje/i })
    expect(submitBtn).toBeDisabled()
  })

  it('shows the disabled hint text', () => {
    renderWithProviders(<Contacto />)
    expect(
      screen.getByText(/el envío de mensajes estará disponible pronto/i)
    ).toBeInTheDocument()
  })
})
