import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import SakuraStamp from './SakuraStamp'

const links = [
  { href: '#inicio',      label: 'Inicio' },
  { href: '#sobre-mi',    label: 'Sobre mí' },
  { href: '#proyectos',   label: 'Proyectos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#contacto',    label: 'Contacto' },
]

function useActiveSection(): string {
  const [active, setActive] = useState<string>('inicio')

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
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

function Navbar() {
  const active = useActiveSection()

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 hidden lg:flex items-center justify-between px-8 xl:px-12 py-5"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
    >
      {/* Brand */}
      <a href="#inicio" className="flex items-center gap-3 group">
        <SakuraStamp className="w-14 h-14" />
        <div className="leading-tight">
          <p className="font-bold text-color-tinta tracking-[0.2em] text-base">
            PORTAFOLIO
          </p>
          <p className="text-xs text-color-tinta/60 tracking-wide">
            Ingeniero de Software
          </p>
        </div>
      </a>

      {/* Links */}
      <ul className="flex items-center gap-8 xl:gap-10">
        {links.map(({ href, label }) => {
          const id = href.slice(1)
          const isActive = active === id
          return (
            <li key={href} className="relative">
              <a
                href={href}
                className={`text-sm tracking-[0.2em] uppercase transition-colors ${
                  isActive
                    ? 'text-color-tinta'
                    : 'text-color-tinta/75 hover:text-color-tinta'
                }`}
              >
                {label}
              </a>
              {isActive && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-color-sakura"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          )
        })}
      </ul>

      {/* Menu icon button */}
      <button
        type="button"
        aria-label="Abrir menú"
        className="w-14 h-14 rounded-full bg-color-tinta flex items-center justify-center hover:bg-color-tinta/90 transition-colors shadow-[0_4px_16px_-4px_rgba(26,26,26,0.4)]"
      >
        <Menu className="w-6 h-6 text-color-papel" strokeWidth={2} />
      </button>
    </motion.nav>
  )
}

export default Navbar
