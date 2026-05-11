import { useEffect, useState } from 'react'

/**
 * Determines which section is currently "active" by checking which one
 * occupies the vertical center of the viewport. Uses a passive scroll
 * listener + getBoundingClientRect() — more reliable than
 * IntersectionObserver with tricky rootMargin/threshold combos.
 */
function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState<string>(sectionIds[0])

  useEffect(() => {
    function findActive() {
      const center = window.innerHeight / 2
      let current = sectionIds[0]

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const { top, bottom } = el.getBoundingClientRect()
        // The section that contains the viewport center is "active"
        if (top <= center && bottom > center) {
          current = id
          break
        }
      }

      setActive(current)
    }

    window.addEventListener('scroll', findActive, { passive: true })
    findActive() // initial check

    return () => window.removeEventListener('scroll', findActive)
  }, [sectionIds])

  return active
}

export default useActiveSection
