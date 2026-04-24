import { motion } from 'framer-motion'
import InkSplashes from './InkSplashes'

const words = [
  { text: 'Soy',       className: 'text-5xl md:text-7xl lg:text-8xl' },
  { text: 'Ingeniero', className: 'text-7xl md:text-9xl lg:text-[11rem]' },
  { text: 'de',        className: 'text-4xl md:text-5xl lg:text-6xl' },
  { text: 'Software',  className: 'text-7xl md:text-9xl lg:text-[11rem]' },
]

function BrushText() {
  return (
    <div className="relative flex flex-col items-center gap-1 px-6">
      <InkSplashes />
      {words.map(({ text, className }, i) => (
        <motion.span
          key={text}
          className={`font-brush text-color-tinta uppercase leading-[0.9] block ${className}`}
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
