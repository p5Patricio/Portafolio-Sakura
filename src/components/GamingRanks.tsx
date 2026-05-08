import { motion } from 'framer-motion'

function GamingRanks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      className="flex items-center justify-center gap-10 md:gap-16 mt-8"
    >
      {/* Overwatch — Master */}
      <div className="flex flex-col items-center gap-2">
        <img
          src="/ranks/overwatch.png"
          alt="Overwatch — Master"
          className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-md"
          loading="lazy"
        />
        <span className="text-[0.65rem] md:text-xs uppercase tracking-[0.25em] text-color-sakura font-semibold">
          Overwatch
        </span>
        <span className="text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.2em] text-color-tinta/60">
          Master
        </span>
      </div>

      {/* Rocket League — Diamond III */}
      <div className="flex flex-col items-center gap-2">
        <img
          src="/ranks/rocket-league.png"
          alt="Rocket League — Diamond III"
          className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-md"
          loading="lazy"
        />
        <span className="text-[0.65rem] md:text-xs uppercase tracking-[0.25em] text-color-sakura font-semibold">
          Rocket League
        </span>
        <span className="text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.2em] text-color-tinta/60">
          Diamond III
        </span>
      </div>
    </motion.div>
  )
}

export default GamingRanks
