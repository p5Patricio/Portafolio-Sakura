import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { ALL_REPOS_BY_YEAR, type Repo } from '../data/repos'
import SakuraIcon from '../components/SakuraIcon'
import HankoStamp from '../components/HankoStamp'
import ProjectCard from '../components/ProjectCard'
import SakuraPetals from '../components/SakuraPetals'

/**
 * Standalone full-gallery page at `/galeria`.
 *
 * - Lists every repo in `ALL_REPOS_BY_YEAR`, grouped by year (newest first).
 * - Reuses the same `ProjectCard` as the home so cards stay 1:1 consistent.
 * - Has its own minimal header (no main navbar) plus a "back to home" CTA so
 *   the page can stand on its own without depending on the floating navbar.
 */
function GaleriaPage() {
  const { t, lang } = useLanguage()
  const g = t.galeria

  // Group repos by year while preserving the (already sorted) order
  const byYear = useMemo(() => {
    const map = new Map<number, Repo[]>()
    for (const repo of ALL_REPOS_BY_YEAR) {
      const list = map.get(repo.year) ?? []
      list.push(repo)
      map.set(repo.year, list)
    }
    // Years sorted descending
    return Array.from(map.entries()).sort((a, b) => b[0] - a[0])
  }, [])

  // Reset scroll on mount so deep-linking lands at the top of the gallery
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [])

  return (
    <main className="relative bg-color-papel min-h-screen">
      <SakuraPetals />

      {/* "Back to home" floating chip — top-left, glass capsule */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-7 left-6 md:left-12 z-40"
      >
        <Link
          to="/"
          className="group inline-flex items-center gap-2 h-12 px-5 rounded-full bg-color-papel/70 backdrop-blur-xl border border-color-tinta/15 shadow-[0_10px_30px_-12px_rgba(26,26,26,0.45)] text-color-tinta/80 hover:text-color-tinta transition-colors"
        >
          <ArrowLeft
            className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
            strokeWidth={2}
          />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold whitespace-nowrap">
            {g.backHome}
          </span>
        </Link>
      </motion.div>

      <section className="relative px-6 py-32 md:py-36 lg:py-40 md:px-12 lg:px-24 flex flex-col items-center overflow-hidden">
        {/* Title + hanko */}
        <div className="relative flex items-start justify-center gap-4 md:gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-brush text-color-tinta text-6xl md:text-8xl lg:text-[9rem] uppercase leading-none tracking-wide text-center"
          >
            {g.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="mt-3 md:mt-6 lg:mt-10"
          >
            <HankoStamp
              text={g.stamp}
              className="w-7 h-12 md:w-8 md:h-14 lg:w-10 lg:h-16 text-[0.6rem] md:text-xs lg:text-sm"
            />
          </motion.div>
        </div>

        {/* Sakura divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          animate={{ opacity: 1, scaleX: 1 }}
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="max-w-2xl mt-10 text-center text-color-tinta/80 leading-relaxed"
        >
          {g.intro}
        </motion.p>

        {/* Year groups */}
        <div className="w-full max-w-6xl mt-20 flex flex-col gap-20">
          {byYear.map(([year, repos]) => (
            <div key={year} className="w-full">
              {/* Year heading */}
              <div className="flex items-baseline gap-3 md:gap-4 mb-10">
                <h2 className="font-brush text-color-tinta text-4xl md:text-5xl uppercase leading-none tracking-wide">
                  {year}
                </h2>
                <span className="flex-1 h-px bg-color-sakura/30" />
                <SakuraIcon className="w-3.5 h-3.5 text-color-sakura/80 shrink-0" />
              </div>

              {/* Cards grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {repos.map((repo, i) => (
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
            </div>
          ))}
        </div>

        {/* Bottom sakura ornament */}
        <div className="flex items-center gap-3 mt-24">
          <span className="h-px w-10 bg-color-sakura/60" />
          <SakuraIcon className="w-3 h-3 text-color-sakura" />
          <span className="h-px w-10 bg-color-sakura/60" />
        </div>
      </section>
    </main>
  )
}

export default GaleriaPage
