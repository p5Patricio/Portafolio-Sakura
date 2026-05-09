import { useState, useEffect } from 'react'

/**
 * Returns true when the user has requested reduced motion.
 * Mirrors Framer Motion's useReducedMotion() but without importing the hook
 * (keeps bundle slightly smaller if we only need the boolean).
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mql.matches)

    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  return reduced
}
