import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '../../test-utils'
import LanguageSelector from '../LanguageSelector'

describe('LanguageSelector', () => {
  it('renders both language options', () => {
    renderWithProviders(<LanguageSelector />)
    expect(screen.getByRole('button', { name: /es/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /en/i })).toBeInTheDocument()
  })

  it('toggles language on click', async () => {
    const user = userEvent.setup()
    renderWithProviders(<LanguageSelector />)

    const enBtn = screen.getByRole('button', { name: /en/i })
    await user.click(enBtn)

    // After switching to EN, the aria-pressed state should update
    expect(enBtn).toHaveAttribute('aria-pressed', 'true')
  })

  it('has correct initial active state', () => {
    renderWithProviders(<LanguageSelector />)
    const esBtn = screen.getByRole('button', { name: /es/i })
    expect(esBtn).toHaveAttribute('aria-pressed', 'true')
  })
})
