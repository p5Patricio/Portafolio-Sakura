import Hero from '../components/Hero'
import SobreMi from '../components/SobreMi'
import Experiencia from '../components/Experiencia'
import Proyectos from '../components/Proyectos'
import Habilidades from '../components/Habilidades'
import Contacto from '../components/Contacto'

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
