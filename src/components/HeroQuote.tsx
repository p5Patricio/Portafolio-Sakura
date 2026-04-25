import { motion } from 'framer-motion'
import SakuraIcon from './SakuraIcon'
import { useLanguage } from '../context/LanguageContext'

const QUOTE_DELAY = 2.4

function HeroQuote() {
  const { t } = useLanguage()

  return (
    <motion.div
      className="flex flex-col items-center gap-3 mt-10"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: QUOTE_DELAY, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-4 md:gap-6">
        <span className="h-px w-10 md:w-16 bg-color-sakura/70" />
        <p className="text-[0.65rem] md:text-xs text-color-tinta/80 uppercase tracking-[0.25em] text-center leading-relaxed">
          {t.hero.quoteLine1}
          <br />
          {t.hero.quoteLine2}
        </p>
        <span className="h-px w-10 md:w-16 bg-color-sakura/70" />
      </div>
      <SakuraIcon className="w-4 h-4 text-color-sakura/90" />
    </motion.div>
  )
}

export default HeroQuote
