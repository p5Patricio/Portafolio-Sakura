import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const sizeMap = {
  xs: 'text-4xl md:text-5xl lg:text-6xl',
  sm: 'text-5xl md:text-7xl lg:text-8xl',
  lg: 'text-6xl md:text-8xl lg:text-[9rem]',
  xl: 'text-7xl md:text-9xl lg:text-[11rem]',
} as const

function BrushText() {
  const { t, lang } = useLanguage()

  return (
    <div className="flex flex-col items-center gap-1 px-6">
      {t.hero.words.map(({ text, size }, i) => (
        <motion.span
          // key includes lang so the animation re-plays on language swap
          key={`${lang}-${i}-${text}`}
          className={`font-brush text-color-tinta uppercase leading-[0.9] block ${sizeMap[size]}`}
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
          animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
          transition={{
            clipPath: { duration: 1.6, ease: [0.33, 1, 0.68, 1], delay: 0.3 + i * 0.35 },
            opacity:  { duration: 0.3, delay: 0.3 + i * 0.35 },
          }}
        >
          {text}
        </motion.span>
      ))}
    </div>
  )
}

export default BrushText
