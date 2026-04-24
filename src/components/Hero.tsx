import BrushText from './BrushText'
import HeroQuote from './HeroQuote'

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-[url('/src/assets/bg-mobile.webp')] md:bg-[url('/src/assets/bg-desktop.webp')] bg-cover bg-center flex flex-col items-center justify-center"
    >
      <BrushText />
      <HeroQuote />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-color-papel to-transparent" />
    </section>
  )
}

export default Hero
