import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { projectsData } from '../data/projects'
import SakuraIcon from './SakuraIcon'
import HankoStamp from './HankoStamp'
import ProjectCard from './ProjectCard'

function Proyectos() {
  const { t } = useLanguage()

  return (
    <section
      id="proyectos"
      className="relative bg-color-papel px-6 py-32 md:py-36 lg:py-40 md:px-12 lg:px-24 flex flex-col items-center overflow-hidden"
    >
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
        className="max-w-2xl mt-10 text-center text-color-tinta/80 leading-relaxed"
      >
        {t.proyectos.intro}
      </motion.p>

      {/* Cards grid */}
      <div className="w-full max-w-6xl mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projectsData.map((project, i) => {
          const item = t.proyectos.items[i]
          if (!item) return null
          return (
            <ProjectCard
              key={project.id}
              meta={project}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              viewProjectLabel={t.proyectos.viewProject}
              index={i}
            />
          )
        })}
      </div>

      {/* Bottom sakura ornament */}
      <div className="flex items-center gap-3 mt-20">
        <span className="h-px w-10 bg-color-sakura/60" />
        <SakuraIcon className="w-3 h-3 text-color-sakura" />
        <span className="h-px w-10 bg-color-sakura/60" />
      </div>
    </section>
  )
}

export default Proyectos
