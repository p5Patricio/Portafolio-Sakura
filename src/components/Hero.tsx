import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import BrushText from './BrushText'
import HeroQuote from './HeroQuote'

function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY       = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const bgScale   = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const bgOpacity = useTransform(scrollYProgress, [0.3, 0.75], [1, 0])
  const contentY  = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative min-h-[120vh] overflow-hidden"
    >
      <motion.div
        style={{ y: bgY, scale: bgScale, opacity: bgOpacity }}
        className="absolute inset-0 bg-[url('/src/assets/bg-mobile.webp')] md:bg-[url('/src/assets/bg-desktop.webp')] bg-cover bg-center will-change-transform"
      />
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="sticky top-0 h-screen z-10 flex flex-col items-center justify-center"
      >
        <BrushText />
        <HeroQuote />
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-color-papel via-color-papel/80 to-transparent z-20 pointer-events-none" />
    </section>
  )
}

export default Hero
