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
      {/* Background handled by ScrollBackground component */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="sticky top-0 h-screen z-10 flex flex-col items-center justify-center"
      >
        <div className="relative flex items-center justify-center">
          <BrushText />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 1.8, ease: 'easeOut' }}
            className="absolute -right-8 md:-right-10 lg:-right-14 top-0 md:top-2 lg:top-4"
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
