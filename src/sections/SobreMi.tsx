import { User, Target, Eye, Heart, type LucideIcon } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import ValueCard from '../components/ValueCard'
import GamingRanks from '../components/GamingRanks'
import { useLanguage } from '../context/LanguageContext'

const icons: LucideIcon[] = [User, Target, Eye, Heart]

function SobreMi() {
  const { t } = useLanguage()

  return (
    <section
      id="sobre-mi"
      className="relative z-10 min-h-screen overflow-hidden flex flex-col items-center"
    >
      {/* Mobile-only background — desktop uses ScrollBackground */}
      <div className="absolute inset-0 md:hidden bg-color-papel" />

      {/* Content */}
      <div className="relative z-20 w-full px-6 py-28 md:py-32 lg:py-36 md:px-12 lg:px-24 flex flex-col items-center">
        <SectionHeader title={t.sobreMi.title} stamp={t.sobreMi.stamp} size="lg" />

        <div className="max-w-3xl mt-12 text-center">
          <p className="text-color-tinta/90 text-fluid-body bg-color-papel/50 backdrop-blur-sm rounded-xl px-6 py-4">{t.sobreMi.para1}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 mt-16 w-full max-w-5xl">
          {t.sobreMi.values.map((v, i) => (
            <ValueCard
              key={v.title}
              icon={icons[i]}
              title={v.title}
              description={v.description}
            />
          ))}
        </div>

        <div className="max-w-3xl mt-16 text-center space-y-6">
          <p className="text-color-tinta/90 text-fluid-body bg-color-papel/50 backdrop-blur-sm rounded-xl px-6 py-4">{t.sobreMi.para2}</p>
          <GamingRanks />
        </div>
      </div>
    </section>
  )
}

export default SobreMi
