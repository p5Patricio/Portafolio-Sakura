import './index.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import MobileNavbar from './components/MobileNavbar'
import SakuraPetals from './components/SakuraPetals'
import HomePage from './pages/HomePage'
import GaleriaPage from './pages/GaleriaPage'

function App() {
  const { pathname } = useLocation()
  // Hide the section-anchor navbars on the standalone gallery page —
  // it has its own "back to home" floating chip and ID-based nav links
  // (e.g. #sobre-mi) wouldn't resolve there anyway.
  const isHome = pathname === '/'

  return (
    <>
      {/* Skip-to-content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-5 focus:py-3 focus:bg-color-tinta focus:text-color-papel focus:rounded-full focus:shadow-lg focus:text-xs focus:uppercase focus:tracking-[0.2em] focus:font-semibold"
      >
        Saltar al contenido
      </a>

      <main id="main-content" className="pb-24 lg:pb-0">
        {/* Sakura petals are mounted only on Home — Gallery has its own instance
            inside the page so it can position above its own background. */}
        {isHome && <SakuraPetals />}

        {isHome && <Navbar />}
        {isHome && <MobileNavbar />}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
