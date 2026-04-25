import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo'
import LanguageSelector from './LanguageSelector'
import { useLanguage } from '../context/LanguageContext'

const linkDefs = [
  { id: 'inicio',      href: '#inicio',      labelKey: 'inicio' },
  { id: 'sobre-mi',    href: '#sobre-mi',    labelKey: 'sobreMi' },
  { id: 'proyectos',   href: '#proyectos',   labelKey: 'proyectos' },
  { id: 'experiencia', href: '#experiencia', labelKey: 'experiencia' },
  { id: 'habilidades', href: '#habilidades', labelKey: 'habilidades' },
  { id: 'contacto',    href: '#contacto',    labelKey: 'contacto' },
] as const

function useActiveSection(): string {
  const [active, setActive] = useState<string>('inicio')

  useEffect(() => {
    const sections = linkDefs
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return active
}

// Shared glass capsule styling — keeps the three desktop nav elements visually
// consistent (same height, blur, border, shadow). Height is fixed so the brand,
// nav links, and language selector all line up perfectly.
const CAPSULE =
  'h-12 rounded-full bg-color-papel/70 backdrop-blur-xl border border-color-tinta/15 shadow-[0_10px_30px_-12px_rgba(26,26,26,0.45)]'

function Navbar() {
  const active = useActiveSection()
  const { t } = useLanguage()

  return (
    <>
      {/* ---------- Desktop / large screens ---------- */}
      {/* Three floating glass elements: brand (left), links capsule (center), language selector (right) */}

      {/* Brand */}
      <motion.a
        href="#inicio"
        className={`hidden lg:flex fixed top-7 left-8 xl:left-12 z-40 items-center gap-3 group pl-1.5 pr-5 ${CAPSULE}`}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        aria-label={t.brand.title}
      >
        <Logo
          alt={t.brand.title}
          className="w-9 h-9 transition-transform duration-300 group-hover:scale-110"
        />
        <div className="leading-tight">
          <p className="font-bold text-color-tinta tracking-[0.2em] text-sm">
            {t.brand.title}
          </p>
          <p className="text-[0.65rem] text-color-tinta/60 tracking-wide">
            {t.brand.subtitle}
          </p>
        </div>
      </motion.a>

      {/* Center nav links capsule */}
      <motion.nav
        className="hidden lg:block fixed top-7 left-1/2 -translate-x-1/2 z-40"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        aria-label="Primary"
      >
        <ul className={`flex items-center gap-0.5 px-2 ${CAPSULE}`}>
          {linkDefs.map(({ id, href, labelKey }) => {
            const isActive = active === id
            return (
              <li key={id} className="relative">
                <a
                  href={href}
                  className={`relative block whitespace-nowrap px-3.5 xl:px-4 py-1.5 text-[0.7rem] xl:text-[0.75rem] tracking-[0.2em] uppercase font-semibold rounded-full transition-colors ${
                    isActive
                      ? 'text-color-papel'
                      : 'text-color-tinta/70 hover:text-color-tinta'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-color-tinta shadow-[0_4px_12px_-4px_rgba(26,26,26,0.5)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{t.nav[labelKey]}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </motion.nav>

      {/* Language selector — right floating */}
      <motion.div
        className="hidden lg:block fixed top-7 right-8 xl:right-12 z-40"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
      >
        <LanguageSelector size="lg" layoutKey="lang-pill-desktop" />
      </motion.div>

      {/* ---------- Mobile / tablet language selector (top-right) ---------- */}
      <motion.div
        className="fixed top-6 right-6 md:top-7 md:right-8 z-40 lg:hidden"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
      >
        <LanguageSelector size="md" layoutKey="lang-pill-mobile" />
      </motion.div>
    </>
  )
}

export default Navbar
