import Hero from '../sections/Hero'
import SobreMi from '../sections/SobreMi'
import Experiencia from '../sections/Experiencia'
import Proyectos from '../sections/Proyectos'
import Habilidades from '../sections/Habilidades'
import Contacto from '../sections/Contacto'

/**
 * Single-page home — every section in the original order from the design
 * roadmap:
 *   Inicio → Sobre mí → Experiencia → Proyectos → Habilidades → Contacto
 *
 * The Navbar / MobileNavbar are mounted at the App level so they persist
 * across route transitions.
 */
function HomePage() {
  return (
    <>
      <Hero />
      <SobreMi />
      <Experiencia />
      <Proyectos />
      <Habilidades />
      <Contacto />
    </>
  )
}

export default HomePage
