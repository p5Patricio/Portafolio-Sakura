import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../test-utils'
import Herramientas from '../Herramientas'
import { SKILL_CATEGORIES } from '../../data/skills'

describe('Herramientas', () => {
  it('renders section with id herramientas', () => {
    renderWithProviders(<Herramientas />)
    expect(document.getElementById('herramientas')).toBeInTheDocument()
  })

  it('renders the title', () => {
    renderWithProviders(<Herramientas />)
    const headings = screen.getAllByRole('heading', { name: /herramientas/i })
    expect(headings.length).toBeGreaterThanOrEqual(1)
  })

  it('renders all tool categories', () => {
    renderWithProviders(<Herramientas />)
    SKILL_CATEGORIES.forEach((cat) => {
      const els = screen.getAllByText(cat.title.es)
      expect(els.length).toBeGreaterThanOrEqual(1)
    })
  })

  it('renders narrative descriptions', () => {
    renderWithProviders(<Herramientas />)
    // Both desktop and mobile layouts render in DOM, so text appears twice
    expect(screen.getAllByText(/React 19 \+ TypeScript \+ Tailwind/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Python \+ FastAPI para APIs/i).length).toBeGreaterThanOrEqual(1)
  })

  it('renders tech icons for each category', () => {
    renderWithProviders(<Herramientas />)
    // Both desktop and mobile layouts are in the DOM
    expect(screen.getAllByLabelText('React').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByLabelText('Python').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByLabelText('Claude Code').length).toBeGreaterThanOrEqual(1)
  })
})
