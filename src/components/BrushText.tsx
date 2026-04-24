import { motion } from 'framer-motion'

const words = [
  { text: 'Soy',        className: 'text-4xl md:text-5xl lg:text-6xl' },
  { text: 'Ingeniero',  className: 'text-6xl md:text-8xl lg:text-9xl' },
  { text: 'de',         className: 'text-3xl md:text-4xl lg:text-5xl'  },
  { text: 'Software',   className: 'text-6xl md:text-8xl lg:text-9xl' },
]

function BrushText() {
  return (
    <div className="flex flex-col items-center gap-1 px-6">
      {words.map(({ text, className }, i) => (
        <motion.span
          key={text}
          className={`font-brush text-color-tinta uppercase leading-none block ${className}`}
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
          animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
          transition={{
            clipPath: { duration: 1.6, ease: [0.33, 1, 0.68, 1], delay: 0.3 + i * 0.35 },
            opacity:   { duration: 0.3, delay: 0.3 + i * 0.35 },
          }}
        >
          {text}
        </motion.span>
      ))}
    </div>
  )
}

export default BrushText
