import './index.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import MobileNavbar from './components/MobileNavbar'
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'
import Experiencia from './components/Experiencia'
import Contacto from './components/Contacto'
import SakuraPetals from './components/SakuraPetals'

function App() {
  return (
    <main className="pb-24 lg:pb-0">
      <SakuraPetals />
      <Navbar />
      <MobileNavbar />
      <Hero />
      <SobreMi />
      <Proyectos />
      <Experiencia />
      <Contacto />
    </main>
  )
}

export default App
