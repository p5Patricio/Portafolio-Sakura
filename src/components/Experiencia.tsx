import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, ImageIcon, type LucideIcon } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import SakuraIcon from './SakuraIcon'
import HankoStamp from './HankoStamp'

// ---------- Data shape ----------
//
// User will fill in the actual image paths later. The `image` field is left as
// `null` for both entries so the slot renders an empty placeholder window.
// When ready, swap `image: null` for `image: '/path/to/img.jpg'` and the slot
// will pick up the photo automatically.

type TimelineEntry = {
  id: string
  icon: LucideIcon
  /** Path to image inside /public — leave null until the user supplies it. */
  image: string | null
}

const ENTRIES: TimelineEntry[] = [
  {
    id: 'universidad',
    icon: GraduationCap,
    image: null, // TODO: agregar imagen de graduación universidad
  },
  {
    id: 'mazda',
    icon: Briefcase,
    image: null, // TODO: agregar imagen de prácticas Mazda
  },
]

// ---------- Sub-components ----------

type ImageSlotProps = {
  src: string | null
  alt: string
  placeholderLabel: string
}

/** Empty / filled image window styled like a sumi-e paper frame. */
function ImageSlot({ src, alt, placeholderLabel }: ImageSlotProps) {
  return (
    <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-color-papel border border-color-tinta/15 shadow-[0_8px_24px_-12px_rgba(26,26,26,0.4)]">
      {/* Inner washi-paper border */}
      <div className="absolute inset-1.5 border border-color-tinta/10 rounded-[1px] pointer-events-none z-10" />

      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        // Placeholder — washi gradient + camera icon + label
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-[radial-gradient(ellipse_at_center,rgba(201,91,100,0.06),transparent_70%)]">
          <ImageIcon
            aria-hidden="true"
            className="w-8 h-8 text-color-tinta/30"
            strokeWidth={1.5}
          />
          <span className="text-[0.65rem] uppercase tracking-[0.3em] text-color-tinta/40">
            {placeholderLabel}
          </span>
        </div>
      )}

      {/* Subtle sakura petal in the corner for warmth */}
      <SakuraIcon
        aria-hidden="true"
        className="absolute top-2 right-2 w-3 h-3 text-color-sakura/60 z-10"
      />
    </div>
  )
}

type TimelineCardProps = {
  index: number
  align: 'left' | 'right'
  icon: LucideIcon
  period: string
  title: string
  institution: string
  description: string
  image: string | null
  imageAlt: string
  placeholderLabel: string
}

function TimelineCard({
  index,
  align,
  icon: Icon,
  period,
  title,
  institution,
  description,
  image,
  imageAlt,
  placeholderLabel,
}: TimelineCardProps) {
  // Mobile: card always on the right of the spine. Desktop: alternates.
  const desktopOrder =
    align === 'left'
      ? 'lg:flex-row-reverse'
      : 'lg:flex-row'

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      className={`relative flex flex-col gap-6 ${desktopOrder} lg:items-center lg:gap-0`}
    >
      {/* ---------- Card content ---------- */}
      <div
        className={`relative w-full lg:w-[44%] pl-16 lg:pl-0 ${
          align === 'left' ? 'lg:pr-14 lg:text-right' : 'lg:pl-14 lg:text-left'
        }`}
      >
        {/* Period brush label */}
        <span className="inline-block text-xs uppercase tracking-[0.4em] text-color-sakura font-semibold mb-3">
          {period}
        </span>

        {/* Title */}
        <h3 className="font-brush text-2xl md:text-3xl lg:text-4xl text-color-tinta uppercase leading-tight tracking-wide">
          {title}
        </h3>

        {/* Institution */}
        <p className="mt-2 text-sm text-color-tinta/70 italic">
          {institution}
        </p>

        {/* Description */}
        <p className="mt-4 text-color-tinta/80 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>

      {/* ---------- Image slot ---------- */}
      <div
        className={`w-full lg:w-[44%] pl-16 lg:pl-0 ${
          align === 'left' ? 'lg:pl-14' : 'lg:pr-14'
        }`}
      >
        <ImageSlot
          src={image}
          alt={imageAlt}
          placeholderLabel={placeholderLabel}
        />
      </div>

      {/* ---------- Center node (sakura medallion with icon) ---------- */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10"
      >
        <div className="relative w-10 h-10 rounded-full bg-color-papel border border-color-tinta/25 shadow-[0_4px_12px_-4px_rgba(26,26,26,0.4)] flex items-center justify-center">
          <Icon className="w-4 h-4 text-color-tinta" strokeWidth={1.8} />
          {/* Sakura accent floating on the node */}
          <SakuraIcon className="absolute -top-1.5 -right-1.5 w-3 h-3 text-color-sakura drop-shadow-sm" />
        </div>
      </div>
    </motion.div>
  )
}

// ---------- Section ----------

function Experiencia() {
  const { t } = useLanguage()
  const e = t.experiencia

  return (
    <section
      id="experiencia"
      className="relative bg-color-papel px-6 py-32 md:py-36 lg:py-40 md:px-12 lg:px-24 flex flex-col items-center overflow-hidden"
    >
      {/* Title + hanko */}
      <div className="relative flex items-start justify-center gap-4 md:gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-brush text-color-tinta text-6xl md:text-8xl lg:text-[9rem] uppercase leading-none tracking-wide text-center"
        >
          {e.title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mt-3 md:mt-6 lg:mt-10"
        >
          <HankoStamp
            text={e.stamp}
            className="w-7 h-12 md:w-8 md:h-14 lg:w-10 lg:h-16 text-[0.6rem] md:text-xs lg:text-sm"
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
        {e.intro}
      </motion.p>

      {/* Timeline */}
      <div className="relative w-full max-w-5xl mt-20">
        {/* Vertical spine — left on mobile, centered on lg */}
        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-5 lg:left-1/2 lg:-translate-x-1/2 w-px bg-gradient-to-b from-transparent via-color-tinta/20 to-transparent"
        />

        <div className="flex flex-col gap-24 lg:gap-32">
          {ENTRIES.map((entry, i) => {
            const item = e.items[i]
            if (!item) return null
            return (
              <TimelineCard
                key={entry.id}
                index={i}
                align={i % 2 === 0 ? 'right' : 'left'}
                icon={entry.icon}
                period={item.period}
                title={item.title}
                institution={item.institution}
                description={item.description}
                image={entry.image}
                imageAlt={item.title}
                placeholderLabel={e.placeholderImage}
              />
            )
          })}
        </div>
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

export default Experiencia
