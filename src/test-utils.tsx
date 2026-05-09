import type { ReactElement } from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'

export function renderWithProviders(
  ui: ReactElement,
  { route = '/' } = {}
) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <LanguageProvider>{ui}</LanguageProvider>
    </MemoryRouter>
  )
}
