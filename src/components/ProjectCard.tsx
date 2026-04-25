import { motion } from 'framer-motion'
import type { ProjectMeta } from '../data/projects'
import ProjectCarousel from './ProjectCarousel'
import TechIcon from './TechIcon'
import SakuraIcon from './SakuraIcon'
import BrushButton from './BrushButton'

type Props = {
  meta: ProjectMeta
  title: string
  subtitle: string
  description: string
  viewProjectLabel: string
  index?: number
}

function ProjectCard({
  meta,
  title,
  subtitle,
  description,
  viewProjectLabel,
  index = 0,
}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.12, ease: 'easeOut' }}
      className="group relative flex flex-col rounded-2xl bg-color-papel/70 backdrop-blur-sm border border-color-tinta/15 shadow-[0_8px_24px_-16px_rgba(26,26,26,0.35)] overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_-16px_rgba(26,26,26,0.45)]"
    >
      {/* Image carousel — fills up once `meta.images` is populated */}
      <div className="relative">
        <ProjectCarousel images={meta.images} title={title} />
        {/* Sakura accent top-left */}
        <SakuraIcon className="absolute top-3 left-3 z-10 w-5 h-5 text-color-sakura drop-shadow-sm pointer-events-none" />
      </div>

      {/* Body */}
      <div className="flex flex-col items-center text-center gap-3 px-6 pt-6 pb-7">
        <h3 className="font-brush text-color-tinta text-3xl md:text-4xl leading-none tracking-wide">
          {title}
        </h3>
        <p className="text-color-sakura text-sm tracking-wide italic">
          {subtitle}
        </p>
        <p className="text-color-tinta/75 text-sm leading-relaxed max-w-[22rem]">
          {description}
        </p>

        {/* Sakura divider */}
        <div className="flex items-center gap-3 w-full max-w-[16rem] mt-2">
          <span className="flex-1 h-px bg-color-sakura/50" />
          <SakuraIcon className="w-3 h-3 text-color-sakura/80" />
          <span className="flex-1 h-px bg-color-sakura/50" />
        </div>

        {/* Tech icons */}
        <ul className="flex items-center justify-center gap-5 mt-3 mb-5">
          {meta.technologies.map((techId) => (
            <li key={techId}>
              <TechIcon id={techId} className="w-7 h-7" />
            </li>
          ))}
        </ul>

        {/* Brush button */}
        <BrushButton
          href={meta.url}
          ariaLabel={`${viewProjectLabel}: ${title}`}
        >
          {viewProjectLabel}
        </BrushButton>
      </div>
    </motion.article>
  )
}

export default ProjectCard
