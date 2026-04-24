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
      className="fixed top-6 left-1/2 -translate-x-1/2 z-40 hidden lg:flex items-center gap-1 px-2 py-2 rounded-full backdrop-blur-md bg-color-papel/30 border border-color-tinta/10 shadow-[0_4px_24px_-8px_rgba(26,26,26,0.15)]"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
    >
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="px-4 py-1.5 rounded-full text-sm text-color-tinta/85 hover:text-color-tinta hover:bg-color-tinta/5 transition-colors tracking-wide"
        >
          {label}
        </a>
      ))}
    </motion.nav>
  )
}

export default Navbar
