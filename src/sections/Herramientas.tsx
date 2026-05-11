import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { SKILL_CATEGORIES, type SkillCategory } from '../data/skills'
import SakuraIcon from '../components/SakuraIcon'
import SectionHeader from '../components/SectionHeader'
import TechIcon, { TECH_LABELS } from '../components/TechIcon'
import type { Lang } from '../data/translations'

// ---------- Desktop: animated tool stack ----------

const stackVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const chipVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

function DesktopToolStack({
  category,
  lang,
  index,
}: {
  category: SkillCategory
  lang: Lang
  index: number
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={stackVariants}
      className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-10 border-b border-color-tinta/10 last:border-b-0"
    >
      {/* Left: narrative */}
      <div className={`flex flex-col gap-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
        <div className="flex items-baseline gap-3 md:gap-4">
          <h3 className="font-brush text-color-tinta text-3xl md:text-4xl uppercase leading-none tracking-wide">
            {category.title[lang]}
          </h3>
          <span className="flex-1 h-px bg-color-sakura/30" />
          <SakuraIcon className="w-3.5 h-3.5 text-color-sakura/80 shrink-0" />
        </div>
        <p className="text-sm md:text-[0.95rem] text-color-tinta/70 italic max-w-xl">
          {category.caption[lang]}
        </p>
        <p className="text-sm md:text-base text-color-tinta/85 leading-relaxed max-w-xl bg-color-papel/40 backdrop-blur-sm rounded-xl px-5 py-4 border border-color-tinta/10">
          {category.narrative[lang]}
        </p>
      </div>

      {/* Right: animated tool pile */}
      <div className={`flex flex-wrap items-center justify-center gap-3 md:gap-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
        {category.skills.map((skillId) => (
          <motion.div
            key={skillId}
            variants={chipVariants}
            className={`group relative flex flex-col items-center gap-2 px-3 py-3 sm:px-4 sm:py-4 rounded-xl bg-color-papel/60 backdrop-blur-md border transition-all duration-300 shadow-[0_4px_12px_-8px_rgba(26,26,26,0.25)] hover:shadow-[0_8px_20px_-10px_rgba(201,91,100,0.3)] ${
              skillId === category.highlight
                ? 'border-color-sakura/40 -translate-y-1 shadow-[0_8px_20px_-10px_rgba(201,91,100,0.3)]'
                : 'border-color-tinta/10 hover:border-color-sakura/40 hover:-translate-y-0.5'
            }`}
          >
            <TechIcon
              id={skillId}
              className={`w-7 h-7 sm:w-9 sm:h-9 transition-colors duration-300 ${
                skillId === category.highlight
                  ? 'text-color-sakura'
                  : 'text-color-tinta/75 group-hover:text-color-sakura'
              }`}
            />
            <span className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.15em] text-color-tinta/65 group-hover:text-color-tinta text-center leading-tight">
              {TECH_LABELS[skillId]}
            </span>

            {skillId === category.highlight && (
              <SakuraIcon
                aria-hidden="true"
                className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 text-color-sakura drop-shadow-sm"
              />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// ---------- Mobile: accordion with ink reveal ----------

const accordionContentVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
}

const inkStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
}

const inkItem: Variants = {
  hidden: { opacity: 0, scaleY: 0, originY: 0 },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

function MobileAccordion({
  category,
  lang,
  isOpen,
  onToggle,
}: {
  category: SkillCategory
  lang: Lang
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-color-tinta/10 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-baseline gap-3">
          <h3 className="font-brush text-color-tinta text-2xl uppercase leading-none tracking-wide">
            {category.title[lang]}
          </h3>
          {category.highlight && (
            <SakuraIcon className="w-3 h-3 text-color-sakura" />
          )}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-center w-8 h-8 rounded-lg bg-color-papel/50 backdrop-blur-sm border border-color-tinta/10"
        >
          <ChevronDown className="w-5 h-5 text-color-tinta" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={category.id}
            variants={accordionContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden"
          >
            <div className="pb-6 space-y-4">
              <p className="text-sm text-color-tinta/70 italic">
                {category.caption[lang]}
              </p>

              <motion.ul
                variants={inkStagger}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-2 pt-2"
              >
                {category.skills.map((skillId) => (
                  <motion.li
                    key={skillId}
                    variants={inkItem}
                    className={`group relative flex flex-col items-center gap-1.5 px-2.5 py-2.5 rounded-lg bg-color-papel/60 backdrop-blur-md border transition-colors duration-300 ${
                      skillId === category.highlight
                        ? 'border-color-sakura/40'
                        : 'border-color-tinta/10'
                    }`}
                  >
                    <TechIcon
                      id={skillId}
                      className={`w-6 h-6 ${
                        skillId === category.highlight
                          ? 'text-color-sakura'
                          : 'text-color-tinta/75'
                      }`}
                    />
                    <span className="text-[0.55rem] uppercase tracking-[0.12em] text-color-tinta/60 text-center leading-tight">
                      {TECH_LABELS[skillId]}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ---------- Section ----------

function Herramientas() {
  const { t, lang } = useLanguage()
  const h = t.herramientas
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <section
      id="herramientas"
      className="relative z-10 px-6 py-28 md:py-32 lg:py-36 md:px-12 lg:px-24 flex flex-col items-center overflow-hidden"
    >
      {/* Background handled by ScrollBackground component */}

      <SectionHeader title={h.title} stamp={h.stamp} intro={h.intro} />

      {/* Desktop: workbench layout */}
      <div className="hidden lg:block w-full max-w-6xl mt-20">
        {SKILL_CATEGORIES.map((category, i) => (
          <DesktopToolStack
            key={category.id}
            category={category}
            lang={lang}
            index={i}
          />
        ))}
      </div>

      {/* Mobile: accordion */}
      <div className="lg:hidden w-full max-w-xl mt-14">
        {SKILL_CATEGORIES.map((category, i) => (
          <MobileAccordion
            key={category.id}
            category={category}
            lang={lang}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>

      {/* Bottom sakura ornament */}
      <div className="flex items-center gap-3 mt-20">
        <span className="h-px w-10 bg-color-sakura/60" />
        <SakuraIcon className="w-3 h-3 text-color-sakura" />
        <span className="h-px w-10 bg-color-sakura/60" />
      </div>
    </section>
  )
}

export default Herramientas
