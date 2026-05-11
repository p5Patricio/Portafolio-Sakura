import { motion } from 'framer-motion'
import SakuraIcon from './SakuraIcon'
import HankoStamp from './HankoStamp'

type Size = 'sm' | 'md' | 'lg' | 'xl'

const SIZE_MAP: Record<Size, string> = {
  sm: 'text-5xl md:text-7xl lg:text-8xl',
  md: 'text-6xl md:text-8xl lg:text-[9rem]',
  lg: 'text-7xl md:text-8xl lg:text-[10rem]',
  xl: 'text-7xl md:text-9xl lg:text-[11rem]',
}

const HANKO_SIZE_MAP: Record<Size, string> = {
  sm: 'w-6 h-10 md:w-7 md:h-12 lg:w-8 lg:h-14 text-[0.5rem] md:text-[0.6rem] lg:text-xs',
  md: 'w-7 h-12 md:w-8 md:h-14 lg:w-10 lg:h-16 text-[0.6rem] md:text-xs lg:text-sm',
  lg: 'w-8 h-14 md:w-10 md:h-16 lg:w-12 lg:h-20 text-xs md:text-sm lg:text-base',
  xl: 'w-8 h-14 md:w-10 md:h-16 lg:w-12 lg:h-20 text-xs md:text-sm lg:text-base',
}

type SectionHeaderProps = {
  title: string
  stamp: string
  size?: Size
  /** Optional intro text rendered below the sakura divider */
  intro?: string
  /** Extra delay (seconds) for the intro paragraph animation */
  introDelay?: number
}

/**
 * Reusable section header used across every major section.
 * Renders the brush title + hanko stamp + sakura divider + optional intro.
 */
function SectionHeader({
  title,
  stamp,
  size = 'md',
  intro,
  introDelay = 0.2,
}: SectionHeaderProps) {
  return (
    <>
      {/* Title + hanko */}
      <div className="relative flex items-start justify-center gap-4 md:gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`font-brush text-color-tinta ${SIZE_MAP[size]} uppercase leading-none tracking-wide text-center`}
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mt-3 md:mt-6 lg:mt-10"
        >
          <HankoStamp text={stamp} className={HANKO_SIZE_MAP[size]} />
        </motion.div>
      </div>

      {/* Sakura divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.6 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        className="flex items-center gap-4 md:gap-6 mt-8"
      >
        <span className="h-px w-16 md:w-24 bg-color-sakura/70" />
        <SakuraIcon className="w-4 h-4 text-color-sakura" />
        <span className="h-px w-16 md:w-24 bg-color-sakura/70" />
      </motion.div>

      {/* Intro paragraph */}
      {intro && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: introDelay, ease: 'easeOut' }}
          className="max-w-2xl mt-10 text-center text-color-tinta/80 text-fluid-body bg-color-papel/40 backdrop-blur-sm border border-color-tinta/10 rounded-xl px-6 py-4"
        >
          {intro}
        </motion.p>
      )}
    </>
  )
}

export default SectionHeader
