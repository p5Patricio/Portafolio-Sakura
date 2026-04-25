import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Home,
  User,
  FolderGit2,
  Sparkles,
  Briefcase,
  Mail,
  type LucideIcon,
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

type NavItem = {
  id: string
  href: string
  icon: LucideIcon
  labelKey: keyof ReturnType<typeof useLanguage>['t']['nav']
}

const items: NavItem[] = [
  { id: 'inicio',      href: '#inicio',      icon: Home,       labelKey: 'inicio' },
  { id: 'sobre-mi',    href: '#sobre-mi',    icon: User,       labelKey: 'sobreMi' },
  { id: 'proyectos',   href: '#proyectos',   icon: FolderGit2, labelKey: 'proyectos' },
  { id: 'habilidades', href: '#habilidades', icon: Sparkles,   labelKey: 'habilidades' },
  { id: 'experiencia', href: '#experiencia', icon: Briefcase,  labelKey: 'experiencia' },
  { id: 'contacto',    href: '#contacto',    icon: Mail,       labelKey: 'contacto' },
]

function useActiveSection(): string {
  const [active, setActive] = useState<string>('inicio')

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
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

function MobileNavbar() {
  const active = useActiveSection()
  const { t } = useLanguage()

  return (
    <motion.nav
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 lg:hidden"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
      aria-label="Mobile navigation"
    >
      <ul className="flex items-center gap-1 px-3 py-2 rounded-full bg-color-papel/70 backdrop-blur-xl border border-color-tinta/15 shadow-[0_10px_30px_-10px_rgba(26,26,26,0.4)]">
        {items.map(({ id, href, icon: Icon, labelKey }) => {
          const isActive = active === id
          const label = t.nav[labelKey]
          return (
            <li key={id} className="relative">
              <a
                href={href}
                aria-label={label}
                aria-current={isActive ? 'page' : undefined}
                className={`relative flex items-center justify-center w-11 h-11 rounded-full transition-colors ${
                  isActive
                    ? 'text-color-papel'
                    : 'text-color-tinta/70 hover:text-color-tinta'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="mobile-nav-pill"
                    className="absolute inset-0 rounded-full bg-color-tinta"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon
                  className="relative z-10 w-5 h-5"
                  strokeWidth={isActive ? 2 : 1.75}
                />
              </a>
            </li>
          )
        })}
      </ul>
    </motion.nav>
  )
}

export default MobileNavbar
