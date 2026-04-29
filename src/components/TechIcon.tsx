import type { ComponentType, SVGProps } from 'react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiFirebase,
  SiVite,
  SiVuedotjs,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiSqlalchemy,
  SiPostgresql,
  SiGooglegemini,
  SiGoogle,
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
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiOpencv,
  SiBoost,
  SiVercel,
  SiNotion,
  SiObsidian,
  SiClaude,
} from 'react-icons/si'

import { FaWindows, FaMicrochip, FaTerminal, FaRobot } from 'react-icons/fa6'

// ----- Official brand SVGs (not yet in react-icons) -----

function NeonIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <title>Neon</title>
      <path d="M24 0V24l-9.365-8.045V24H0V0ZM2.942 21.087h8.751V9.563l9.365 8.204V2.919L2.942 2.914Z" fill="currentColor" />
    </svg>
  )
}

function RenderIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <title>Render</title>
      <path d="M18.263.007c-3.121-.147-5.744 2.109-6.192 5.082-.018.138-.045.272-.067.405-.696 3.703-3.936 6.507-7.827 6.507-1.388 0-2.691-.356-3.825-.979a.2024.2024 0 0 0-.302.178V24H12v-8.999c0-1.656 1.338-3 2.987-3h2.988c3.382 0 6.103-2.817 5.97-6.244-.12-3.084-2.61-5.603-5.682-5.75" fill="currentColor" />
    </svg>
  )
}

function KimiIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <title>Kimi</title>
      <path d="M21.7202 0.939941C22.9502 0.939941 23.9502 1.93994 23.9502 3.16994C23.9502 4.39994 22.9502 5.39994 21.7202 5.39994H19.7502C19.6002 5.39994 19.4902 5.27994 19.4902 5.13994V3.16994C19.4902 1.93994 20.4902 0.939941 21.7202 0.939941Z" fill="currentColor" />
      <path d="M9.39 13.9501L17.82 5.59012C17.98 5.43012 17.89 5.12012 17.68 5.12012H13.14C13.14 5.12012 13.04 5.14012 13 5.18012L3.92 14.1901C3.78 14.3301 3.57 14.2101 3.57 13.9801V5.39012C3.57 5.24012 3.47 5.12012 3.35 5.12012H0.219999C0.0999993 5.12012 0 5.24012 0 5.39012V23.9201C0 24.0701 0.0999993 24.1901 0.219999 24.1901H3.35C3.47 24.1901 3.57 24.0701 3.57 23.9201V20.1401C3.57 20.0601 3.6 19.9801 3.65 19.9301L6.47 17.1401C6.54 17.0701 6.63 17.0601 6.71 17.1101L14.24 22.6501C15.47 23.4801 16.85 23.9901 18.25 24.1401C18.37 24.1501 18.48 24.0301 18.48 23.8701V20.3101C18.48 20.1701 18.4 20.0601 18.29 20.0501C17.47 19.9201 16.66 19.6001 15.94 19.1101L9.42 14.3901C9.28 14.3001 9.27 14.0701 9.39 13.9501Z" fill="currentColor" />
    </svg>
  )
}

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
  | 'vite'
  // Backend
  | 'node'
  | 'python'
  | 'fastapi'
  | 'sqlalchemy'
  // Databases
  | 'postgres'
  | 'mongodb'
  | 'mysql'
  | 'sqlite'
  | 'firebase'
  // Data / ML / AI infra
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
  | 'stitch'
  // DevOps / tooling
  | 'docker'
  | 'git'
  | 'github'
  | 'linux'
  | 'windows'
  | 'cloudflare'
  | 'vercel'
  | 'neon'
  | 'render'
  | 'notion'
  | 'obsidian'
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
  vite: 'Vite',
  node: 'Node.js',
  python: 'Python',
  fastapi: 'FastAPI',
  sqlalchemy: 'SQLAlchemy',
  postgres: 'PostgreSQL',
  mongodb: 'MongoDB',
  mysql: 'MySQL',
  sqlite: 'SQLite',
  firebase: 'Firebase',
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
  stitch: 'Stitch',
  docker: 'Docker',
  git: 'Git',
  github: 'GitHub',
  linux: 'Linux',
  windows: 'Windows',
  cloudflare: 'Cloudflare',
  vercel: 'Vercel',
  neon: 'Neon',
  render: 'Render',
  notion: 'Notion',
  obsidian: 'Obsidian',
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
  vite: SiVite,
  node: SiNodedotjs,
  python: SiPython,
  fastapi: SiFastapi,
  sqlalchemy: SiSqlalchemy,
  postgres: SiPostgresql,
  mongodb: SiMongodb,
  mysql: SiMysql,
  sqlite: SiSqlite,
  firebase: SiFirebase,
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
  stitch: SiGoogle,
  docker: SiDocker,
  git: SiGit,
  github: SiGithub,
  linux: SiLinux,
  windows: FaWindows,
  cloudflare: SiCloudflare,
  vercel: SiVercel,
  neon: NeonIcon,
  render: RenderIcon,
  notion: SiNotion,
  obsidian: SiObsidian,
  // No brand assets exist for these AI tools — use semantic generics that
  // visually read as "AI / agentic":
  'claude-code': SiAnthropic,
  antigravity: FaRobot,
  'kimi-code': KimiIcon,
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
