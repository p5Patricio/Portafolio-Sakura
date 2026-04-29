import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { SKILL_CATEGORIES, type SkillCategory } from '../data/skills'
import SakuraIcon from '../components/SakuraIcon'
import HankoStamp from '../components/HankoStamp'
import TechIcon, { TECH_LABELS } from '../components/TechIcon'
import type { TechId } from '../components/TechIcon'
import type { Lang } from '../data/translations'

// ---------- Sub-components ----------

type SkillChipProps = {
  id: TechId
  highlighted?: boolean
}

/** Individual tech card — icon + label, with optional sakura accent. */
function SkillChip({ id, highlighted }: SkillChipProps) {
  return (
    <li
      className={`group relative flex flex-col items-center gap-2 px-3 py-3 sm:px-4 sm:py-4 rounded-xl bg-color-papel border border-color-tinta/10 hover:border-color-sakura/40 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_4px_12px_-8px_rgba(26,26,26,0.25)] hover:shadow-[0_8px_20px_-10px_rgba(201,91,100,0.3)]`}
    >
      <TechIcon
        id={id}
        className={`w-7 h-7 sm:w-9 sm:h-9 transition-colors duration-300 ${
          highlighted
            ? 'text-color-sakura'
            : 'text-color-tinta/75 group-hover:text-color-sakura'
        }`}
      />
      <span className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.15em] text-color-tinta/65 group-hover:text-color-tinta text-center leading-tight">
        {TECH_LABELS[id]}
      </span>

      {highlighted && (
        <SakuraIcon
          aria-hidden="true"
          className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 text-color-sakura drop-shadow-sm"
        />
      )}
    </li>
  )
}

type CategoryBlockProps = {
  category: SkillCategory
  lang: Lang
  index: number
}

function CategoryBlock({ category, lang, index }: CategoryBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: 'easeOut' }}
      className="relative w-full"
    >
      {/* Category header */}
      <div className="flex items-baseline gap-3 md:gap-4 mb-6">
        <h3 className="font-brush text-color-tinta text-3xl md:text-4xl uppercase leading-none tracking-wide">
          {category.title[lang]}
        </h3>
        <span className="flex-1 h-px bg-color-sakura/30" />
        <SakuraIcon className="w-3.5 h-3.5 text-color-sakura/80 shrink-0" />
      </div>

      <p className="text-sm md:text-[0.95rem] text-color-tinta/70 italic mb-6 max-w-3xl">
        {category.caption[lang]}
      </p>

      {/* Skill grid */}
      <ul className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3 md:gap-4">
        {category.skills.map((skillId) => (
          <SkillChip
            key={skillId}
            id={skillId}
            highlighted={skillId === category.highlight}
          />
        ))}
      </ul>
    </motion.div>
  )
}

// ---------- Section ----------

function Habilidades() {
  const { t, lang } = useLanguage()
  const h = t.habilidades

  return (
    <section
      id="habilidades"
      className="relative bg-color-papel px-6 py-32 md:py-36 lg:py-40 md:px-12 lg:px-24 flex flex-col items-center overflow-hidden"
    >
      {/* Title + hanko */}
      <div className="relative flex items-start justify-center gap-4 md:gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-brush text-color-tinta text-6xl md:text-8xl lg:text-[9rem] uppercase leading-none tracking-wide text-center"
        >
          {h.title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mt-3 md:mt-6 lg:mt-10"
        >
          <HankoStamp
            text={h.stamp}
            className="w-7 h-12 md:w-8 md:h-14 lg:w-10 lg:h-16 text-[0.6rem] md:text-xs lg:text-sm"
          />
        </motion.div>
      </div>

      {/* Sakura divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.6 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        className="flex items-center gap-4 md:gap-6 mt-8"
      >
        <span className="h-px w-16 md:w-24 bg-color-sakura/70" />
        <SakuraIcon className="w-4 h-4 text-color-sakura" />
        <span className="h-px w-16 md:w-24 bg-color-sakura/70" />
      </motion.div>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        className="max-w-2xl mt-10 text-center text-color-tinta/80 leading-relaxed"
      >
        {h.intro}
      </motion.p>

      {/* Categories stack */}
      <div className="w-full max-w-6xl mt-20 flex flex-col gap-16 md:gap-20">
        {SKILL_CATEGORIES.map((category, i) => (
          <CategoryBlock
            key={category.id}
            category={category}
            lang={lang}
            index={i}
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

export default Habilidades
