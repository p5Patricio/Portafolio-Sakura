import '@testing-library/jest-dom'

// Mock IntersectionObserver for components that use scroll detection
globalThis.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords() {
    return []
  }
} as unknown as typeof IntersectionObserver

// Mock window.scrollTo for components that reset scroll
globalThis.scrollTo = vi.fn()

// Silence Framer Motion warnings in tests and disable animations for determinism
// This mock enforces prefers-reduced-motion, which is equivalent to
// wrapping every render with <MotionConfig reducedMotion="always" />.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: query.includes('prefers-reduced-motion'),
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})
