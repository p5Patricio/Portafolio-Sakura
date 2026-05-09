import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../test-utils'
import SectionHeader from '../SectionHeader'

describe('SectionHeader', () => {
  it('renders title and stamp', () => {
    renderWithProviders(<SectionHeader title="Proyectos" stamp="開発" />)
    expect(screen.getByRole('heading', { name: /proyectos/i })).toBeInTheDocument()
    expect(screen.getByText('開')).toBeInTheDocument()
  })

  it('renders intro when provided', () => {
    renderWithProviders(
      <SectionHeader title="Contacto" stamp="問" intro="Hablemos pronto." />
    )
    expect(screen.getByText('Hablemos pronto.')).toBeInTheDocument()
  })

  it('does not render intro when omitted', () => {
    renderWithProviders(<SectionHeader title="Hero" stamp="私" />)
    expect(screen.queryByText(/hablemos/i)).not.toBeInTheDocument()
  })

  it('renders sakura divider', () => {
    const { container } = renderWithProviders(
      <SectionHeader title="Test" stamp="試" />
    )
    // The divider contains two horizontal lines
    const lines = container.querySelectorAll('.h-px')
    expect(lines.length).toBeGreaterThanOrEqual(2)
  })
})
