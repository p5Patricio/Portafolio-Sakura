import type { TechId } from '../components/TechIcon'

export type SkillCategoryId =
  | 'frontend'
  | 'backend'
  | 'ai-ml'
  | 'devops'

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
    skills: ['react', 'next', 'vue', 'ts', 'js', 'tailwind', 'vite', 'html5', 'css3'],
    highlight: 'react',
  },
  {
    id: 'backend',
    title: { es: 'Backend & Bases de datos', en: 'Backend & Databases' },
    caption: {
      es: 'APIs robustas, modelado de datos y persistencia.',
      en: 'Robust APIs, data modeling and persistence.',
    },
    skills: ['python', 'fastapi', 'node', 'sqlalchemy', 'postgres', 'mongodb', 'mysql', 'sqlite', 'firebase'],
    highlight: 'fastapi',
  },
  {
    id: 'ai-ml',
    title: { es: 'Inteligencia Artificial', en: 'Artificial Intelligence' },
    caption: {
      es: 'LLMs en producción, machine learning y desarrollo con agentes.',
      en: 'Production LLMs, machine learning and agent-powered development.',
    },
    skills: ['gemini', 'openai', 'anthropic', 'ollama', 'whisper', 'opencv', 'tensorflow', 'scikit', 'pandas', 'numpy', 'claude-code', 'antigravity', 'kimi-code', 'gentle-ai'],
    highlight: 'gemini',
  },
  {
    id: 'devops',
    title: { es: 'DevOps y herramientas', en: 'DevOps & Tooling' },
    caption: {
      es: 'Containers, despliegues y flujo diario.',
      en: 'Containers, deployments and daily workflow.',
    },
    skills: ['docker', 'git', 'github', 'linux', 'windows', 'cloudflare', 'vercel'],
    highlight: 'docker',
  },
]
