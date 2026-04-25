import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'

type Props = {
  images: string[]
  title: string
  /** Milliseconds between auto-advance. Pass 0 to disable auto-play. */
  autoPlayMs?: number
}

/**
 * Small image carousel for project cards.
 *
 * - Empty `images` → renders an elegant "coming soon" placeholder.
 * - 1 image      → renders it static (no controls).
 * - 2+ images    → auto-rotates every `autoPlayMs`, with dot indicators and
 *                  hover-revealed arrows. Click dots/arrows to navigate.
 *
 * Drop the image files into `src/assets/projects/<project-id>/` (or `public/`)
 * and list their paths in `projectsData[*].images`. That's all that's needed —
 * no further wiring.
 */
function ProjectCarousel({ images, title, autoPlayMs = 5000 }: Props) {
  const [index, setIndex] = useState(0)
  const hasImages = images.length > 0
  const multiple = images.length > 1

  // Clamp index if the images array ever shrinks
  useEffect(() => {
    if (index >= images.length && images.length > 0) setIndex(0)
  }, [images.length, index])

  useEffect(() => {
    if (!multiple || !autoPlayMs) return
    const timer = window.setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      autoPlayMs,
    )
    return () => window.clearInterval(timer)
  }, [images.length, multiple, autoPlayMs])

  const go = (delta: number) => {
    setIndex((i) => (i + delta + images.length) % images.length)
  }

  if (!hasImages) {
    return (
      <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-color-papel via-color-papel to-color-tinta/10 border-b border-color-tinta/10 flex items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center gap-2 text-color-tinta/40">
          <ImageIcon className="w-9 h-9" strokeWidth={1.2} />
          <span className="text-[0.65rem] uppercase tracking-[0.35em]">
            Próximamente
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden group/carousel bg-color-tinta/5">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={`${title} — ${index + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </AnimatePresence>

      {multiple && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Imagen anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-color-papel/80 text-color-tinta/80 hover:text-color-tinta opacity-0 group-hover/carousel:opacity-100 transition-opacity backdrop-blur-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Siguiente imagen"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-color-papel/80 text-color-tinta/80 hover:text-color-tinta opacity-0 group-hover/carousel:opacity-100 transition-opacity backdrop-blur-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ir a la imagen ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? 'bg-color-tinta w-5'
                    : 'bg-color-tinta/40 w-1.5 hover:bg-color-tinta/70'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default ProjectCarousel
