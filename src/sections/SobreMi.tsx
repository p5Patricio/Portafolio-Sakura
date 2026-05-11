import { Quote } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import GamingRanks from '../components/GamingRanks'
import { useLanguage } from '../context/LanguageContext'

function SobreMi() {
  const { t } = useLanguage()

  return (
    <section
      id="sobre-mi"
      className="relative z-10 min-h-screen overflow-hidden flex flex-col items-center"
    >
      {/* Background handled by ScrollBackground component */}

      {/* Content */}
      <div className="relative z-20 w-full px-6 py-28 md:py-32 lg:py-36 md:px-12 lg:px-24 flex flex-col items-center">
        <SectionHeader title={t.sobreMi.title} stamp={t.sobreMi.stamp} size="lg" />

        <div className="max-w-4xl mt-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
          {/* Logo container */}
          <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 relative flex items-center justify-center p-6 bg-color-papel/80 backdrop-blur-sm rounded-full border border-color-tinta/15 shadow-[0_8px_24px_-12px_rgba(26,26,26,0.3)]">
            <div className="absolute inset-2 border border-color-tinta/10 rounded-full pointer-events-none z-10" />
            <img src="/LogoDark.png" alt="Logo de Patricio García" className="w-full h-full object-contain relative z-20" />
          </div>

          {/* Text container */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-color-tinta/90 text-fluid-body leading-relaxed bg-color-papel/40 backdrop-blur-sm border border-color-tinta/10 rounded-xl px-6 py-5">
              {t.sobreMi.para1}
            </p>
          </div>
        </div>

        {/* Philosophy / Homage (Minimalist) */}
        <div className="max-w-2xl mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 px-6 group">
          {/* Avatar / Portrait Container */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 flex items-center justify-center bg-color-tinta/5 rounded-full overflow-hidden border border-color-tinta/10 transition-colors group-hover:border-color-sakura/30 z-10">
              <img
                src="/garou-2.jpg"
                alt="Garou"
                className="w-full h-full object-cover object-top mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500 scale-110 group-hover:scale-125"
              />
            </div>
            {/* Mobile Quote Icon (floating right) */}
            <Quote className="absolute -right-8 sm:hidden w-6 h-6 text-color-sakura/50" />
          </div>

          {/* Quote Text */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            {/* Desktop Quote Icon */}
            <Quote className="hidden sm:block w-5 h-5 text-color-sakura/50 mb-3" />
            <blockquote className="font-brush text-xl sm:text-2xl text-color-tinta tracking-wide leading-relaxed">
              {t.sobreMi.philosophyQuote}
            </blockquote>
            <span className="mt-3 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-color-tinta/60 font-semibold">
              {t.sobreMi.philosophyAuthor}
            </span>
          </div>
        </div>

        <div className="max-w-3xl mt-16 text-center space-y-6">
          <p className="text-color-tinta/90 text-fluid-body bg-color-papel/40 backdrop-blur-sm border border-color-tinta/10 rounded-xl px-6 py-4">{t.sobreMi.para2}</p>
          <GamingRanks />
        </div>
      </div>
    </section>
  )
}

export default SobreMi
