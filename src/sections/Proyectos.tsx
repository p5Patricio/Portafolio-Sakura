import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
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
      {/* Background handled by ScrollBackground component */}

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

      {/* Guides / Publications Sub-section */}
      {t.proyectos.guias && t.proyectos.guias.length > 0 && (
        <div className="w-full max-w-5xl mt-28 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scaleX: 0.6 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="h-px w-12 md:w-16 bg-color-tinta/20" />
            <h3 className="font-brush text-2xl md:text-3xl text-color-tinta/80 uppercase tracking-widest">
              {lang === 'es' ? 'Guías Técnicas' : 'Tech Guides'}
            </h3>
            <span className="h-px w-12 md:w-16 bg-color-tinta/20" />
          </motion.div>

          <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-3 md:gap-6">
            {t.proyectos.guias.map((guia, i) => (
              <motion.a
                key={i}
                href={guia.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                className="group relative h-full bg-color-papel/40 backdrop-blur-sm hover:bg-color-papel border border-color-tinta/10 hover:border-color-sakura/50 rounded-lg p-3 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-4 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span className="text-color-tinta/80 group-hover:text-color-tinta font-medium text-xs md:text-sm leading-tight">
                  {guia.title}
                </span>
                <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4 text-color-tinta/30 group-hover:text-color-sakura transition-colors flex-shrink-0 self-end md:self-auto" />
              </motion.a>
            ))}
          </div>
        </div>
      )}

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
