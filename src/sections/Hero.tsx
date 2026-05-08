import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import BrushText from '../components/BrushText'
import HankoStamp from '../components/HankoStamp'
import { useLanguage } from '../context/LanguageContext'

function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const { t } = useLanguage()

  const contentY  = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative z-10 min-h-[120vh] overflow-hidden"
    >
      {/* Mobile background */}
      <div className="absolute inset-0 md:hidden bg-color-papel" />
      {/* Desktop background handled by ScrollBackground component */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="sticky top-0 h-screen z-10 flex flex-col items-center justify-center"
      >
        <div className="relative flex items-start justify-center gap-4 md:gap-6">
          <BrushText />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 1.8, ease: 'easeOut' }}
            className="mt-2 md:mt-4 lg:mt-6"
          >
            <HankoStamp
              text={t.hero.stamp}
              className="w-7 h-12 md:w-8 md:h-14 lg:w-10 lg:h-16 text-[0.55rem] md:text-xs lg:text-sm"
            />
          </motion.div>
        </div>
      </motion.div>
      {/* No gradient — seamless transition to next section */}
    </section>
  )
}

export default Hero
