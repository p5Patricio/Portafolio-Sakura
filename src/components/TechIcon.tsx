import type { ComponentType, SVGProps } from 'react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiVite,
  SiVuedotjs,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiSqlalchemy,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiRedis,
  SiCelery,
  SiSpacy,
  SiGooglegemini,
  SiOpenai,
  SiAnthropic,
  SiOllama,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinux,
  SiCloudflare,
  SiHtml5,
  SiCss,
  SiPhp,
  SiLaravel,
  SiGreensock,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiOpencv,
  SiBoost,
  SiPostman,
  SiFigma,
  SiVercel,
  SiNotion,
  SiClaude,
} from 'react-icons/si'

import { FaWindows, FaMicrochip, FaTerminal, FaRobot, FaBrain } from 'react-icons/fa6'

// ----- Tech ID registry -----
//
// Pulled from the repos detected in the user's GitHub:
//   reyasesino (FastAPI + Next.js + PostgreSQL + Cloudflare R2 + Pillow)
//   d-mox (FastAPI + Celery + Redis + spaCy + Gemini + Next.js + Postgres)
//   windows-assistant (Python + Gemini + Gemma + UIA + COM + pyautogui)
//   wisprlocal (Python + Whisper + GPU)
//   voiceagenda (TypeScript)
//   portafolio-sakura (Vite + React + TS + Tailwind + Framer)
//
// Plus the AI dev tools the user explicitly mentioned (Claude Code, Antigravity,
// Kimi Code, Gentle-AI). Some have no Simple Icons brand asset — we map those
// to a generic AI icon.

// eslint-disable-next-line react-refresh/only-export-components
export type TechId =
  // Frontend
  | 'react'
  | 'next'
  | 'vue'
  | 'ts'
  | 'js'
  | 'html5'
  | 'css3'
  | 'tailwind'
  | 'framer'
  | 'gsap'
  | 'vite'
  // Backend
  | 'node'
  | 'python'
  | 'fastapi'
  | 'flask'
  | 'django'
  | 'php'
  | 'laravel'
  | 'sqlalchemy'
  // Databases
  | 'postgres'
  | 'mysql'
  | 'sqlite'
  | 'redis'
  // Data / ML / AI infra
  | 'celery'
  | 'spacy'
  | 'pandas'
  | 'numpy'
  | 'scikit'
  | 'tensorflow'
  | 'opencv'
  | 'whisper'
  // AI / LLMs
  | 'gemini'
  | 'openai'
  | 'anthropic'
  | 'ollama'
  // DevOps / tooling
  | 'docker'
  | 'git'
  | 'github'
  | 'linux'
  | 'windows'
  | 'cloudflare'
  | 'vercel'
  | 'postman'
  | 'figma'
  | 'notion'
  // AI dev tools (developer side)
  | 'claude-code'
  | 'antigravity'
  | 'kimi-code'
  | 'gentle-ai'

// ----- Display labels -----

// eslint-disable-next-line react-refresh/only-export-components
export const TECH_LABELS: Record<TechId, string> = {
  react: 'React',
  next: 'Next.js',
  vue: 'Vue.js',
  ts: 'TypeScript',
  js: 'JavaScript',
  html5: 'HTML5',
  css3: 'CSS3',
  tailwind: 'Tailwind CSS',
  framer: 'Framer Motion',
  gsap: 'GSAP',
  vite: 'Vite',
  node: 'Node.js',
  python: 'Python',
  fastapi: 'FastAPI',
  flask: 'Flask',
  django: 'Django',
  php: 'PHP',
  laravel: 'Laravel',
  sqlalchemy: 'SQLAlchemy',
  postgres: 'PostgreSQL',
  mysql: 'MySQL',
  sqlite: 'SQLite',
  redis: 'Redis',
  celery: 'Celery',
  spacy: 'spaCy',
  pandas: 'Pandas',
  numpy: 'NumPy',
  scikit: 'scikit-learn',
  tensorflow: 'TensorFlow',
  opencv: 'OpenCV',
  whisper: 'Whisper',
  gemini: 'Gemini',
  openai: 'OpenAI',
  anthropic: 'Claude (Anthropic)',
  ollama: 'Ollama',
  docker: 'Docker',
  git: 'Git',
  github: 'GitHub',
  linux: 'Linux',
  windows: 'Windows',
  cloudflare: 'Cloudflare',
  vercel: 'Vercel',
  postman: 'Postman',
  figma: 'Figma',
  notion: 'Notion',
  'claude-code': 'Claude Code',
  antigravity: 'Antigravity',
  'kimi-code': 'Kimi Code',
  'gentle-ai': 'Gentle-AI',
}

// ----- Icon registry (react-icons) -----

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

const ICONS: Record<TechId, IconComponent> = {
  react: SiReact,
  next: SiNextdotjs,
  vue: SiVuedotjs,
  ts: SiTypescript,
  js: SiJavascript,
  html5: SiHtml5,
  css3: SiCss,
  tailwind: SiTailwindcss,
  framer: SiFramer,
  gsap: SiGreensock,
  vite: SiVite,
  node: SiNodedotjs,
  python: SiPython,
  fastapi: SiFastapi,
  flask: SiFlask,
  django: SiDjango,
  php: SiPhp,
  laravel: SiLaravel,
  sqlalchemy: SiSqlalchemy,
  postgres: SiPostgresql,
  mysql: SiMysql,
  sqlite: SiSqlite,
  redis: SiRedis,
  celery: SiCelery,
  spacy: SiSpacy,
  pandas: SiPandas,
  numpy: SiNumpy,
  scikit: SiScikitlearn,
  tensorflow: SiTensorflow,
  opencv: SiOpencv,
  whisper: FaMicrochip, // No official Whisper icon — chip glyph reads as "speech-to-text on hardware"
  gemini: SiGooglegemini,
  openai: SiOpenai,
  anthropic: SiClaude,
  ollama: SiOllama,
  docker: SiDocker,
  git: SiGit,
  github: SiGithub,
  linux: SiLinux,
  windows: FaWindows,
  cloudflare: SiCloudflare,
  vercel: SiVercel,
  postman: SiPostman,
  figma: SiFigma,
  notion: SiNotion,
  // No brand assets exist for these AI tools — use semantic generics that
  // visually read as "AI / agentic":
  'claude-code': SiAnthropic,
  antigravity: FaRobot,
  'kimi-code': FaBrain,
  'gentle-ai': SiBoost,
}

// Fallback for any future ID we forget to register
const FallbackIcon: IconComponent = FaTerminal

type Props = {
  id: TechId
  className?: string
  /** Override the rendered tooltip label (defaults to TECH_LABELS[id]). */
  label?: string
}

/**
 * Monochromatic tech icon. Inherits its color from currentColor so it picks up
 * the surrounding text color (e.g. text-color-tinta or text-color-sakura).
 *
 * Usage:
 *   <TechIcon id="react" className="w-7 h-7 text-color-sakura" />
 */
function TechIcon({ id, className = 'w-7 h-7', label }: Props) {
  const Icon = ICONS[id] ?? FallbackIcon
  const accessibleLabel = label ?? TECH_LABELS[id]

  return (
    <Icon
      role="img"
      aria-label={accessibleLabel}
      className={`${className} fill-current`}
    />
  )
}

export default TechIcon
