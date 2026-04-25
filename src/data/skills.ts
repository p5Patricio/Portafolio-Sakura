import type { TechId } from '../components/TechIcon'

export type SkillCategoryId =
  | 'frontend'
  | 'backend'
  | 'databases'
  | 'ai-ml'
  | 'devops'
  | 'ai-dev-tools'

export interface SkillCategory {
  id: SkillCategoryId
  /** Localized title shown above the icon grid. */
  title: { es: string; en: string }
  /** One-line description used as a small caption under the title. */
  caption: { es: string; en: string }
  /** Tech IDs that belong to this category — drives the icon grid. */
  skills: TechId[]
  /** Featured / star skill for this category — gets a sakura accent. */
  highlight?: TechId
}

// Categorías inspiradas en mi stack real (los repos que tengo en GitHub) +
// las herramientas de IA con las que trabajo a diario.
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: { es: 'Frontend', en: 'Frontend' },
    caption: {
      es: 'Interfaces rápidas, accesibles y con personalidad.',
      en: 'Fast, accessible interfaces with character.',
    },
    skills: ['react', 'next', 'vue', 'ts', 'js', 'tailwind', 'framer', 'gsap', 'vite', 'html5', 'css3'],
    highlight: 'react',
  },
  {
    id: 'backend',
    title: { es: 'Backend', en: 'Backend' },
    caption: {
      es: 'APIs robustas, asíncronas y bien tipadas.',
      en: 'Robust, async, well-typed APIs.',
    },
    skills: ['python', 'fastapi', 'flask', 'django', 'node', 'sqlalchemy', 'celery', 'php', 'laravel'],
    highlight: 'fastapi',
  },
  {
    id: 'databases',
    title: { es: 'Bases de datos', en: 'Databases' },
    caption: {
      es: 'Modelado relacional y caches en memoria.',
      en: 'Relational modeling and in-memory caches.',
    },
    skills: ['postgres', 'mysql', 'sqlite', 'redis'],
    highlight: 'postgres',
  },
  {
    id: 'ai-ml',
    title: { es: 'IA y Machine Learning', en: 'AI & Machine Learning' },
    caption: {
      es: 'Modelos clásicos, deep learning y LLMs en producción.',
      en: 'Classical models, deep learning and LLMs in production.',
    },
    skills: ['gemini', 'openai', 'anthropic', 'ollama', 'spacy', 'whisper', 'opencv', 'tensorflow', 'scikit', 'pandas', 'numpy'],
    highlight: 'gemini',
  },
  {
    id: 'devops',
    title: { es: 'DevOps y herramientas', en: 'DevOps & Tooling' },
    caption: {
      es: 'Containers, despliegues y flujo diario.',
      en: 'Containers, deployments and daily workflow.',
    },
    skills: ['docker', 'git', 'github', 'linux', 'windows', 'cloudflare', 'vercel', 'postman', 'figma', 'notion'],
    highlight: 'docker',
  },
  {
    id: 'ai-dev-tools',
    title: { es: 'Desarrollo con IA', en: 'AI-Powered Development' },
    caption: {
      es: 'Soy experto en construir con agentes: pair programming serio.',
      en: 'Expert at building with agents — serious pair programming.',
    },
    skills: ['claude-code', 'antigravity', 'kimi-code', 'gentle-ai'],
    highlight: 'claude-code',
  },
]
