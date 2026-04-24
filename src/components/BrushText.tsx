import { motion } from 'framer-motion'

function BrushText() {
  return (
    <motion.h1
      className="font-brush text-color-tinta text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-center px-6 uppercase tracking-wide"
      initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
      animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
      transition={{
        clipPath: { duration: 2.4, ease: [0.33, 1, 0.68, 1], delay: 0.4 },
        opacity: { duration: 0.4, delay: 0.4 },
      }}
    >
      Soy Ingeniero de Software
    </motion.h1>
  )
}

export default BrushText
