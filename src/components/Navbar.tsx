import { motion } from 'framer-motion'

const links = [
  { href: '#inicio',      label: 'Inicio' },
  { href: '#sobre-mi',    label: 'Sobre mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos',   label: 'Proyectos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#contacto',    label: 'Contacto' },
]

function Navbar() {
  return (
    <motion.nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-40 hidden lg:flex items-center gap-1 px-3 py-2 rounded-full backdrop-blur-xl bg-color-papel/60 border border-color-tinta/20 shadow-[0_8px_32px_-8px_rgba(26,26,26,0.25)]"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
    >
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="px-4 py-2 rounded-full text-sm font-medium text-color-tinta/85 hover:text-color-tinta hover:bg-color-tinta/10 transition-colors tracking-wide whitespace-nowrap"
        >
          {label}
        </a>
      ))}
    </motion.nav>
  )
}

export default Navbar
