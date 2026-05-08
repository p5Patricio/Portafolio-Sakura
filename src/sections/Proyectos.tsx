import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { FEATURED_REPOS } from '../data/repos'
import SakuraIcon from '../components/SakuraIcon'
import HankoStamp from '../components/HankoStamp'
import PillButton from '../components/PillButton'
import ProjectCard from '../components/ProjectCard'

function Proyectos() {
  const { t, lang } = useLanguage()

  return (
    <section
      id="proyectos"
      className="relative z-10 min-h-screen px-6 py-28 md:py-32 lg:py-36 md:px-12 lg:px-24 flex flex-col items-center overflow-hidden"
    >
      {/* Mobile-only background — desktop uses ScrollBackground */}
      <div className="absolute inset-0 md:hidden bg-color-papel" />

      {/* Content wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Title row with hanko stamp */}
        <div className="relative flex items-start justify-center gap-4 md:gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-brush text-color-tinta text-6xl md:text-8xl lg:text-[9rem] uppercase leading-none tracking-wide text-center"
        >
          {t.proyectos.title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mt-3 md:mt-6 lg:mt-10"
        >
          <HankoStamp
            text={t.proyectos.stamp}
            className="w-8 h-14 md:w-10 md:h-16 lg:w-12 lg:h-20 text-xs md:text-sm lg:text-base"
          />
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

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        className="max-w-2xl mt-10 text-center text-color-tinta/80 leading-relaxed bg-color-papel/50 backdrop-blur-sm rounded-xl px-6 py-4"
      >
        {t.proyectos.intro}
      </motion.p>

      {/* Cards grid — only the 3 featured projects */}
      <div className="w-full max-w-6xl mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {FEATURED_REPOS.map((repo, i) => (
          <ProjectCard
            key={repo.id}
            repo={repo}
            lang={lang}
            viewProjectLabel={t.proyectos.viewProject}
            index={i}
          />
        ))}
      </div>

      {/* CTA → full project gallery page */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        className="mt-14"
      >
        <PillButton to="/galeria">
          <span>{t.proyectos.viewAll}</span>
          <ArrowRight
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={2}
          />
        </PillButton>
      </motion.div>

      {/* Bottom sakura ornament */}
      <div className="flex items-center gap-3 mt-20">
        <span className="h-px w-10 bg-color-sakura/60" />
        <SakuraIcon className="w-3 h-3 text-color-sakura" />
        <span className="h-px w-10 bg-color-sakura/60" />
      </div>
      </div>{/* end content wrapper */}
    </section>
  )
}

export default Proyectos
