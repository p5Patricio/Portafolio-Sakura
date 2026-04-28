import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import App from './App'

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <MemoryRouter>
      <LanguageProvider>{ui}</LanguageProvider>
    </MemoryRouter>
  )
}

describe('App', () => {
  it('renders without crashing', () => {
    renderWithProviders(<App />)
    expect(document.body).toBeInTheDocument()
  })

  it('includes skip-to-content link', () => {
    renderWithProviders(<App />)
    const skipLink = screen.getByText(/saltar al contenido/i)
    expect(skipLink).toBeInTheDocument()
    expect(skipLink.tagName).toBe('A')
  })
})
