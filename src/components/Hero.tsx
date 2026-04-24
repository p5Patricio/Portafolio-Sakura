import BrushText from './BrushText'

function Hero() {
  return (
    <section className="relative min-h-screen bg-[url('/src/assets/bg-mobile.webp')] md:bg-[url('/src/assets/bg-desktop.webp')] bg-cover bg-center flex items-center justify-center">
      <BrushText />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-color-papel to-transparent" />
    </section>
  )
}

export default Hero
