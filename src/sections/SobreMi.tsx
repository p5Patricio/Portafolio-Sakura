import { User, Target, Eye, Heart, type LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import SakuraIcon from '../components/SakuraIcon'
import HankoStamp from '../components/HankoStamp'
import ValueCard from '../components/ValueCard'
import GamingRanks from '../components/GamingRanks'
import { useLanguage } from '../context/LanguageContext'

const icons: LucideIcon[] = [User, Target, Eye, Heart]

function SobreMi() {
  const { t } = useLanguage()

  return (
    <section
      id="sobre-mi"
      className="relative z-10 min-h-screen overflow-hidden flex flex-col items-center"
    >
      {/* Mobile-only background — desktop uses ScrollBackground */}
      <div className="absolute inset-0 md:hidden bg-color-papel" />

      {/* Content */}
      <div className="relative z-20 w-full px-6 py-28 md:py-32 lg:py-36 md:px-12 lg:px-24 flex flex-col items-center">
        <div className="relative flex items-start justify-center gap-4 md:gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-brush text-color-tinta text-7xl md:text-8xl lg:text-[10rem] uppercase leading-none tracking-wide text-center"
          >
            {t.sobreMi.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="mt-3 md:mt-6 lg:mt-10"
          >
            <HankoStamp
              text={t.sobreMi.stamp}
              className="w-8 h-14 md:w-10 md:h-16 lg:w-12 lg:h-20 text-xs md:text-sm lg:text-base"
            />
          </motion.div>
        </div>

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

        <div className="max-w-3xl mt-12 text-center">
          <p className="text-color-tinta/90 leading-relaxed bg-color-papel/50 backdrop-blur-sm rounded-xl px-6 py-4">{t.sobreMi.para1}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 mt-16 w-full max-w-5xl">
          {t.sobreMi.values.map((v, i) => (
            <ValueCard
              key={v.title}
              icon={icons[i]}
              title={v.title}
              description={v.description}
            />
          ))}
        </div>

        <div className="max-w-3xl mt-16 text-center space-y-6">
          <p className="text-color-tinta/90 leading-relaxed bg-color-papel/50 backdrop-blur-sm rounded-xl px-6 py-4">{t.sobreMi.para2}</p>
          <GamingRanks />
        </div>
      </div>
    </section>
  )
}

export default SobreMi
