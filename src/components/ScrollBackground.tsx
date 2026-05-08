import { useRef, useEffect } from 'react'
import type { ReactNode } from 'react'

/**
 * Desktop-only continuous scroll background.
 *
 * The full vertical image covers the viewport (no side cropping).
 * As the user scrolls, background-position-y moves from top (0%)
 * to bottom (100%), revealing the full painting.
 *
 * Uses native scroll events for maximum compatibility.
 * Mobile falls back to individual section backgrounds.
 */
function ScrollBackground({ children }: { children: ReactNode }) {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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
        className="fixed inset-0 z-0 hidden md:block"
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
