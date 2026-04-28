import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { LanguageProvider, useLanguage } from './LanguageContext'

function TestComponent() {
  const { lang, toggleLang, t } = useLanguage()
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="title">{t.contacto.title}</span>
      <button onClick={toggleLang}>Toggle</button>
    </div>
  )
}

describe('LanguageContext', () => {
  it('defaults to Spanish', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )
    expect(screen.getByTestId('lang').textContent).toBe('es')
    expect(screen.getByTestId('title').textContent).toBe('Contacto')
  })

  it('toggles to English and back', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )
    const btn = screen.getByRole('button', { name: /toggle/i })

    fireEvent.click(btn)
    expect(screen.getByTestId('lang').textContent).toBe('en')
    expect(screen.getByTestId('title').textContent).toBe('Contact')

    fireEvent.click(btn)
    expect(screen.getByTestId('lang').textContent).toBe('es')
    expect(screen.getByTestId('title').textContent).toBe('Contacto')
  })
})
