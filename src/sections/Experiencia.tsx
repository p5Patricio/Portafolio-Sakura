import { motion } from 'framer-motion'
import { useState } from 'react'
import { GraduationCap, Briefcase, ImageIcon, Award, type LucideIcon } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import SakuraIcon from '../components/SakuraIcon'
import SectionHeader from '../components/SectionHeader'
import ImageModal from '../components/ImageModal'

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
    image: '/titulo.webp',
  },
  {
    id: 'mazda',
    icon: Briefcase,
    image: '/mazda.png',
  },
]

const CERTIFICACIONES = [
  { id: 'ia', image: '/certificacion-ia.webp' }
]

// ---------- Sub-components ----------

type ImageSlotProps = {
  src: string | null
  alt: string
  placeholderLabel: string
  position?: string
  onClick?: () => void
}

/** Empty / filled image window styled like a sumi-e paper frame. */
function ImageSlot({ src, alt, placeholderLabel, position = 'center', onClick }: ImageSlotProps) {
  return (
    <div 
      className={`relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-color-papel border border-color-tinta/15 shadow-[0_8px_24px_-12px_rgba(26,26,26,0.4)] ${onClick && src ? 'cursor-zoom-in hover:shadow-xl transition-shadow duration-300 group' : ''}`}
      onClick={() => { if (onClick && src) onClick() }}
    >
      {/* Hover overlay for zoom icon */}
      {onClick && src && (
        <div className="absolute inset-0 bg-color-tinta/0 group-hover:bg-color-tinta/10 transition-colors duration-300 z-20 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110 bg-color-papel/80 p-2 rounded-full backdrop-blur-sm">
            <SakuraIcon className="w-5 h-5 text-color-sakura animate-[spin_4s_linear_infinite]" />
          </div>
        </div>
      )}

      {/* Inner washi-paper border */}
      <div className="absolute inset-1.5 border border-color-tinta/10 rounded-[1px] pointer-events-none z-10" />

      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain p-3"
          style={{ objectPosition: position }}
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
  imagePosition?: string
  onImageClick?: () => void
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
  imagePosition,
  onImageClick,
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
      className={`relative flex flex-col gap-6 ${desktopOrder} lg:flex-row lg:items-stretch lg:gap-8`}
    >
      {/* ---------- Card content ---------- */}
      <div
        className={`relative w-full lg:w-[46%] pl-16 lg:pl-0 ${
          align === 'left' ? 'lg:pr-10 lg:text-right' : 'lg:pl-10 lg:text-left'
        }`}
      >
        <div className="bg-color-papel/40 backdrop-blur-sm border border-color-tinta/10 rounded-xl px-6 py-5 h-full flex flex-col justify-center">
          {/* Period brush label */}
          <span className="inline-block text-sm md:text-base uppercase tracking-[0.4em] text-color-sakura font-semibold mb-3">
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
          <p className="mt-4 text-color-tinta/80 text-fluid-body">
            {description}
          </p>
        </div>
      </div>

      {/* ---------- Image slot ---------- */}
      <div
        className={`w-full lg:w-[46%] pl-16 lg:pl-0 ${
          align === 'left' ? 'lg:pl-10' : 'lg:pr-10'
        }`}
      >
        <ImageSlot
          src={image}
          alt={imageAlt}
          placeholderLabel={placeholderLabel}
          position={imagePosition}
          onClick={onImageClick}
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

function MinimalTimelineCard({
  index,
  align,
  icon: Icon,
  period,
  title,
  institution,
  buttonLabel,
  onButtonClick,
}: {
  index: number
  align: 'left' | 'right'
  icon: LucideIcon
  period: string
  title: string
  institution: string
  buttonLabel: string
  onButtonClick: () => void
}) {
  const desktopOrder = align === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      className={`relative flex flex-col gap-6 ${desktopOrder} lg:flex-row lg:items-center lg:gap-8`}
    >
      {/* ---------- Card content ---------- */}
      <div
        className={`relative w-full lg:w-[46%] pl-16 lg:pl-0 ${
          align === 'left' ? 'lg:pr-10 lg:text-right' : 'lg:pl-10 lg:text-left'
        }`}
      >
        <div className="bg-color-papel/40 backdrop-blur-sm rounded-xl px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-color-tinta/10 w-full hover:border-color-sakura/30 transition-colors">
          <div className={`${align === 'left' ? 'sm:text-right' : 'sm:text-left'} text-left flex-1`}>
            <span className="block text-xs uppercase tracking-[0.4em] text-color-sakura font-semibold mb-1">
              {period}
            </span>
            <h3 className="font-brush text-xl text-color-tinta">{title}</h3>
            <p className="text-xs text-color-tinta/70 italic mt-1">{institution}</p>
          </div>
          <button
            onClick={onButtonClick}
            className="text-xs uppercase tracking-[0.2em] text-color-tinta/60 hover:text-color-sakura transition-colors whitespace-nowrap border border-color-tinta/20 hover:border-color-sakura/50 rounded-full px-4 py-2 shrink-0"
          >
            {buttonLabel}
          </button>
        </div>
      </div>

      {/* ---------- Empty opposite side ---------- */}
      <div className="hidden lg:block lg:w-[46%]" />

      {/* ---------- Center node ---------- */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-1/2 -translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2 z-10"
      >
        <div className="relative w-8 h-8 rounded-full bg-color-papel border border-color-tinta/25 shadow-sm flex items-center justify-center">
          <Icon className="w-4 h-4 text-color-tinta" strokeWidth={1.8} />
          <SakuraIcon className="absolute -top-1 -right-1 w-2.5 h-2.5 text-color-sakura drop-shadow-sm" />
        </div>
      </div>
    </motion.div>
  )
}

// ---------- Section ----------

function Experiencia() {
  const { t } = useLanguage()
  const e = t.experiencia
  const [selectedImg, setSelectedImg] = useState<string | null>(null)

  return (
    <section
      id="experiencia"
      className="relative z-10 min-h-screen px-6 py-28 md:py-32 lg:py-36 md:px-12 lg:px-24 flex flex-col items-center overflow-hidden"
    >
      {/* Background image */}
      {/* Background handled by ScrollBackground component */}

      {/* Content wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <SectionHeader title={e.title} stamp={e.stamp} intro={e.intro} />

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
                imagePosition={entry.id === 'universidad' ? 'top' : 'center'}
                onImageClick={() => setSelectedImg(entry.image)}
              />
            )
          })}
          
          {/* Certificaciones (Minimal on timeline) */}
          {e.certificaciones.map((cert, j) => (
            <MinimalTimelineCard
              key={`cert-${j}`}
              index={ENTRIES.length + j}
              align={(ENTRIES.length + j) % 2 === 0 ? 'right' : 'left'}
              icon={Award}
              period={cert.period}
              title={cert.name}
              institution={cert.institution}
              buttonLabel={e.viewCert}
              onButtonClick={() => setSelectedImg(CERTIFICACIONES[j].image)}
            />
          ))}
        </div>
      </div>

      {/* Bottom sakura ornament */}
      <div className="flex items-center gap-3 mt-20">
        <span className="h-px w-10 bg-color-sakura/60" />
        <SakuraIcon className="w-3 h-3 text-color-sakura" />
        <span className="h-px w-10 bg-color-sakura/60" />
      </div>
      </div>{/* end content wrapper */}

      <ImageModal src={selectedImg} onClose={() => setSelectedImg(null)} />
    </section>
  )
}

export default Experiencia
