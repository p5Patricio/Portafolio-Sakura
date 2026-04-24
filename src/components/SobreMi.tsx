import { User, Target, Eye, Heart } from 'lucide-react'
import SakuraIcon from './SakuraIcon'
import ValueCard from './ValueCard'

const values = [
  {
    icon: User,
    title: 'Quién soy',
    description: 'Apasionado por la tecnología y el aprendizaje continuo.',
  },
  {
    icon: Target,
    title: 'Misión',
    description: 'Crear soluciones que generen impacto y valor real.',
  },
  {
    icon: Eye,
    title: 'Visión',
    description: 'Seguir creciendo y dejando huella a través del código.',
  },
  {
    icon: Heart,
    title: 'Valores',
    description: 'Compromiso, creatividad, respeto y perseverancia.',
  },
]

function SobreMi() {
  return (
    <section
      id="sobre-mi"
      className="relative min-h-screen bg-color-papel px-6 py-24 md:px-12 lg:px-24 flex flex-col items-center"
    >
      <h2 className="font-brush text-color-tinta text-7xl md:text-8xl lg:text-[10rem] uppercase leading-none tracking-wide text-center">
        Sobre mí
      </h2>

      <div className="flex items-center gap-4 md:gap-6 mt-8">
        <span className="h-px w-16 md:w-24 bg-color-sakura/70" />
        <SakuraIcon className="w-4 h-4 text-color-sakura" />
        <span className="h-px w-16 md:w-24 bg-color-sakura/70" />
      </div>

      <div className="max-w-3xl mt-12 text-center space-y-6">
        <p className="text-color-tinta/85 leading-relaxed">
          Soy un ingeniero de software apasionado por la creación de soluciones
          tecnológicas que mejoren la vida de las personas. Me especializo en el
          desarrollo de aplicaciones web y disfruto convertir ideas en productos
          funcionales, escalables y eficientes.
        </p>
        <p className="text-color-tinta/85 leading-relaxed">
          Me motiva aprender constantemente, trabajar en equipo y afrontar nuevos
          desafíos que me permitan crecer tanto personal como profesionalmente.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 mt-20 w-full max-w-5xl">
        {values.map((v) => (
          <ValueCard key={v.title} {...v} />
        ))}
      </div>
    </section>
  )
}

export default SobreMi
