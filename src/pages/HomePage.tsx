import Hero from '../sections/Hero'
import SobreMi from '../sections/SobreMi'
import Experiencia from '../sections/Experiencia'
import Proyectos from '../sections/Proyectos'
import Herramientas from '../sections/Herramientas'
import Contacto from '../sections/Contacto'
import ScrollBackground from '../components/ScrollBackground'

/**
 * Single-page home — every section in the original order from the design
 * roadmap:
 *   Inicio → Sobre mí → Experiencia → Proyectos → Herramientas → Contacto
 *
 * The Navbar / MobileNavbar are mounted at the App level so they persist
 * across route transitions.
 */
function HomePage() {
  return (
    <ScrollBackground>
      <Hero />
      <Experiencia />
      <Proyectos />
      <Herramientas />
      <SobreMi />
      <Contacto />
    </ScrollBackground>
  )
}

export default HomePage
