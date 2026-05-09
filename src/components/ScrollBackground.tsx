import { useRef, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

/**
 * Desktop-only continuous scroll background.
 *
 * The full vertical image covers the viewport (no side cropping).
 * As the user scrolls, background-position-y moves from top (0%)
 * to bottom (100%), revealing the full painting.
 *
 * Strategy:
 *   1. Modern browsers (Chrome/Edge 115+, Safari 18.2+) use
 *      CSS scroll-driven animations — the compositor thread handles
 *      the update with zero main-thread work and zero jank.
 *   2. Older browsers fall back to a lightweight JS scroll listener
 *      that writes background-position-y directly.
 */
function ScrollBackground({ children }: { children: ReactNode }) {
  const bgRef = useRef<HTMLDivElement>(null)
  const [supportsScrollTimeline, setSupportsScrollTimeline] = useState(false)

  useEffect(() => {
    // Detect support for CSS scroll-driven animations
    let supported = false
    try {
      supported =
        typeof CSS !== 'undefined' &&
        typeof CSS.supports === 'function' &&
        CSS.supports('animation-timeline', 'scroll(root)')
    } catch {
      supported = false
    }
    setSupportsScrollTimeline(supported)

    if (supported) return // CSS drives the animation; no JS needed

    // Fallback: JS-driven updates for Safari / Firefox
    const handleScroll = () => {
      if (!bgRef.current) return
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      bgRef.current.style.backgroundPositionY = `${progress * 100}%`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div
        ref={bgRef}
        className={`fixed inset-0 z-0 hidden md:block ${
          supportsScrollTimeline ? 'scroll-bg-driven' : ''
        }`}
        style={{
          backgroundImage: "url('/scroll-full.webp')",
          backgroundSize: 'cover',
          backgroundPositionX: 'center',
          backgroundPositionY: '0%',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {children}
    </>
  )
}

export default ScrollBackground
