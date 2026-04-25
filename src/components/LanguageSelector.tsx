import { motion } from 'framer-motion'
import { Languages } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import type { Lang } from '../data/translations'

const OPTIONS: Lang[] = ['es', 'en']

type Size = 'md' | 'lg'

type Props = {
  size?: Size
  /** Show a small "Languages" icon at the left for extra presence. Defaults to true on lg. */
  showIcon?: boolean
  /** Unique key for the layoutId so multiple selectors don't share the same pill. */
  layoutKey?: string
}

const SIZE_STYLES: Record<Size, {
  container: string
  button: string
  text: string
  icon: string
}> = {
  md: {
    container: 'p-1.5 gap-0',
    button:    'px-5 py-2',
    text:      'text-sm tracking-[0.3em]',
    icon:      'w-4 h-4 mx-2',
  },
  lg: {
    // Force the same total height (h-12 = 48px) as the brand and nav capsules.
    container: 'h-12 px-2 gap-0',
    button:    'px-5 py-1.5',
    text:      'text-sm tracking-[0.35em]',
    icon:      'w-4 h-4 ml-2 mr-1',
  },
}

function LanguageSelector({
  size = 'md',
  showIcon,
  layoutKey = 'lang-pill',
}: Props) {
  const { lang, setLang } = useLanguage()
  const styles = SIZE_STYLES[size]
  const showIconResolved = showIcon ?? size === 'lg'

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`relative flex items-center rounded-full bg-color-papel/65 backdrop-blur-xl border border-color-tinta/20 shadow-[0_8px_24px_-10px_rgba(26,26,26,0.4)] ${styles.container}`}
    >
      {showIconResolved && (
        <Languages
          aria-hidden="true"
          className={`text-color-tinta/55 flex-shrink-0 ${styles.icon}`}
          strokeWidth={1.7}
        />
      )}
      {OPTIONS.map((opt, i) => {
        const isActive = lang === opt
        return (
          <div key={opt} className="relative flex items-center">
            {i > 0 && (
              <span
                aria-hidden="true"
                className="w-px h-4 bg-color-tinta/20 mx-0.5"
              />
            )}
            <button
              type="button"
              aria-pressed={isActive}
              onClick={() => setLang(opt)}
              className={`relative uppercase font-semibold rounded-full transition-colors ${styles.button} ${styles.text} ${
                isActive
                  ? 'text-color-papel'
                  : 'text-color-tinta/65 hover:text-color-tinta'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId={layoutKey}
                  className="absolute inset-0 rounded-full bg-color-tinta shadow-[0_4px_12px_-4px_rgba(26,26,26,0.5)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{opt}</span>
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default LanguageSelector
