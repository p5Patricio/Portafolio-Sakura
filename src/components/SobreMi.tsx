import { User, Target, Eye, Heart, type LucideIcon } from 'lucide-react'
import SakuraIcon from './SakuraIcon'
import ValueCard from './ValueCard'
import { useLanguage } from '../context/LanguageContext'

const icons: LucideIcon[] = [User, Target, Eye, Heart]

function SobreMi() {
  const { t } = useLanguage()

  return (
    <section
      id="sobre-mi"
      className="relative min-h-screen bg-color-papel px-6 py-32 md:py-36 lg:py-40 md:px-12 lg:px-24 flex flex-col items-center"
    >
      <h2 className="font-brush text-color-tinta text-7xl md:text-8xl lg:text-[10rem] uppercase leading-none tracking-wide text-center">
        {t.sobreMi.title}
      </h2>

      <div className="flex items-center gap-4 md:gap-6 mt-8">
        <span className="h-px w-16 md:w-24 bg-color-sakura/70" />
        <SakuraIcon className="w-4 h-4 text-color-sakura" />
        <span className="h-px w-16 md:w-24 bg-color-sakura/70" />
      </div>

      <div className="max-w-3xl mt-12 text-center space-y-6">
        <p className="text-color-tinta/85 leading-relaxed">{t.sobreMi.para1}</p>
        <p className="text-color-tinta/85 leading-relaxed">{t.sobreMi.para2}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 mt-20 w-full max-w-5xl">
        {t.sobreMi.values.map((v, i) => (
          <ValueCard
            key={v.title}
            icon={icons[i]}
            title={v.title}
            description={v.description}
          />
        ))}
      </div>
    </section>
  )
}

export default SobreMi
