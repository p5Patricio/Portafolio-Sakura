import { useRef, useEffect } from 'react'
import type { ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function supportsScrollTimeline(): boolean {
  try {
    return (
      typeof CSS !== 'undefined' &&
      typeof CSS.supports === 'function' &&
      CSS.supports('animation-timeline', 'scroll(root)')
    )
  } catch {
    return false
  }
}

/**
 * Dual scroll background.
 *
 * Desktop (md+):
 *   The full vertical image covers the viewport (no side cropping).
 *   As the user scrolls, background-position-y moves from top (0%)
 *   to bottom (100%), revealing the full painting.
 *
 *   Strategy:
 *     1. Modern browsers (Chrome/Edge 115+, Safari 18.2+) use
 *        CSS scroll-driven animations — the compositor thread handles
 *        the update with zero main-thread work and zero jank.
 *     2. Older browsers fall back to a lightweight JS scroll listener
 *        that writes background-position-y directly.
 *
 * Mobile (< md):
 *   Same image shown with a subtle parallax effect using framer-motion.
 *   The image is slightly taller than the viewport and translates as
 *   the user scrolls, creating a gentle depth illusion.
 */
function ScrollBackground({ children }: { children: ReactNode }) {
  const bgRef = useRef<HTMLDivElement>(null)
  const cssScrollTimelineSupported = supportsScrollTimeline()

  // --- Desktop: CSS scroll-driven or JS fallback ---
  useEffect(() => {
    if (cssScrollTimelineSupported) return

    const handleScroll = () => {
      if (!bgRef.current) return
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      bgRef.current.style.backgroundPositionY = `${progress * 100}%`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [cssScrollTimelineSupported])

  // --- Mobile parallax ---
  const { scrollYProgress } = useScroll()
  // Shift the image by ~15% of the viewport as the user scrolls
  const mobileY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])

  return (
    <>
      {/* Desktop scroll background */}
      <div
        ref={bgRef}
        className={`fixed inset-0 z-0 hidden md:block ${
          cssScrollTimelineSupported ? 'scroll-bg-driven' : ''
        }`}
        style={{
          backgroundImage: "url('/scroll-full.webp')",
          backgroundSize: 'cover',
          backgroundPositionX: 'center',
          backgroundPositionY: '0%',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Mobile parallax background */}
      <motion.div
        className="fixed inset-0 z-0 md:hidden"
        style={{ y: mobileY }}
      >
        <img
          src="/scroll-full.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-[120vh] object-cover object-top"
        />
      </motion.div>

      {children}
    </>
  )
}

export default ScrollBackground
