import { motion } from 'framer-motion'
import { ExternalLink, Globe, Lock } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import type { Repo } from '../data/repos'
import type { Lang } from '../data/translations'
import ProjectCarousel from './ProjectCarousel'
import TechIcon from './TechIcon'
import SakuraIcon from './SakuraIcon'
import PillButton from './PillButton'

type Props = {
  repo: Repo
  lang: Lang
  /** Localized "View project" button label. */
  viewProjectLabel: string
  /** Localized "Visit site" button label. */
  visitSiteLabel: string
  index?: number
}

function ProjectCard({ repo, lang, viewProjectLabel, visitSiteLabel, index = 0 }: Props) {
  const subtitle = repo.subtitle[lang]
  const description = repo.description[lang]
  const images = repo.images ?? []
  // Prefer the live URL when available; otherwise the repo URL is the CTA.
  const hasLiveUrl = !!repo.liveUrl
  const primaryUrl = repo.liveUrl ?? repo.repoUrl
  const ctaLabel = hasLiveUrl ? visitSiteLabel : viewProjectLabel
  const CtaIcon = hasLiveUrl ? Globe : ExternalLink

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.12, ease: 'easeOut' }}
      className="group relative flex flex-col rounded-2xl bg-color-papel/40 backdrop-blur-sm border border-color-tinta/10 shadow-[0_8px_24px_-16px_rgba(26,26,26,0.35)] overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_-16px_rgba(26,26,26,0.45)]"
    >
      {/* Image carousel — fills up once `repo.images` is populated */}
      <div className="relative">
        <ProjectCarousel images={images} title={repo.name} />
        {/* Sakura accent top-left */}
        <SakuraIcon className="absolute top-3 left-3 z-10 w-5 h-5 text-color-sakura drop-shadow-sm pointer-events-none" />

        {/* Private badge if the repo is not public */}
        {repo.isPrivate && (
          <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 rounded-full bg-color-tinta/85 text-color-papel text-[0.6rem] uppercase tracking-[0.25em] font-semibold px-2.5 py-1 backdrop-blur-sm">
            <Lock className="w-3 h-3" strokeWidth={2.2} />
            {lang === 'es' ? 'Privado' : 'Private'}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col items-center text-center gap-3 px-6 pt-6 pb-7 flex-1">
        <h3 className="font-brush text-color-tinta text-3xl md:text-4xl leading-none tracking-wide">
          {repo.name}
        </h3>
        <p className="text-color-sakura text-sm tracking-wide italic">
          {subtitle}
        </p>
        <p className="text-color-tinta/75 text-fluid-sm max-w-[22rem]">
          {description}
        </p>

        {/* Sakura divider */}
        <div className="flex items-center gap-3 w-full max-w-[16rem] mt-2">
          <span className="flex-1 h-px bg-color-sakura/50" />
          <SakuraIcon className="w-3 h-3 text-color-sakura/80" />
          <span className="flex-1 h-px bg-color-sakura/50" />
        </div>

        {/* Tech icons — wrap if more than ~6 */}
        <ul className="flex items-center justify-center gap-4 flex-wrap mt-3 mb-5 max-w-[22rem]">
          {repo.technologies.map((techId) => (
            <li key={techId}>
              <TechIcon
                id={techId}
                className="w-6 h-6 text-color-tinta/80 hover:text-color-sakura transition-colors"
              />
            </li>
          ))}
        </ul>

        {/* CTA row — pushes to the bottom of the card */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-auto">
          <PillButton
            href={primaryUrl}
            ariaLabel={`${ctaLabel}: ${repo.name}`}
          >
            {ctaLabel}
            <CtaIcon className="w-3.5 h-3.5" strokeWidth={2} />
          </PillButton>

          {/* Secondary GitHub link — only when public AND there's a live URL
              (so we don't show two buttons pointing to the same repo). */}
          {!repo.isPrivate && hasLiveUrl && (
            <a
              href={repo.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub: ${repo.name}`}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-color-tinta/65 hover:text-color-tinta transition-colors"
            >
              <SiGithub className="w-4 h-4 fill-current" />
              <span>Repo</span>
              <ExternalLink className="w-3 h-3" strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
