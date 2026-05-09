import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { FEATURED_REPOS } from '../data/repos'
import SakuraIcon from '../components/SakuraIcon'
import SectionHeader from '../components/SectionHeader'
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
        <SectionHeader
          title={t.proyectos.title}
          stamp={t.proyectos.stamp}
          size="lg"
          intro={t.proyectos.intro}
        />

      {/* Cards grid — only the 3 featured projects */}
      <div className="w-full max-w-6xl mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {FEATURED_REPOS.map((repo, i) => (
          <ProjectCard
            key={repo.id}
            repo={repo}
            lang={lang}
            viewProjectLabel={t.proyectos.viewProject}
            visitSiteLabel={t.proyectos.visitSite}
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
