import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import BrushText from '../components/BrushText'
import HeroQuote from '../components/HeroQuote'

function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const contentY  = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative min-h-[120vh] overflow-hidden"
    >
      {/* Static background — no parallax so the image is never cropped by movement */}
      <div
        className="absolute inset-0 bg-[url('/src/assets/bg-mobile.webp')] md:bg-[url('/src/assets/scroll-01-hero.png')] bg-cover bg-center"
      />
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="sticky top-0 h-screen z-10 flex flex-col items-center justify-center"
      >
        <BrushText />
        <HeroQuote />
      </motion.div>
      {/* No gradient — seamless transition to next section */}
    </section>
  )
}

export default Hero
