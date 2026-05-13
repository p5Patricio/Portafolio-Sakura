import type { TechId } from '../components/TechIcon'

export type ProjectIllustration = 'mountain' | 'torii' | 'pagoda'

export interface Repo {
  /** Slug used as React key and i18n key. */
  id: string
  /** Display name (same in ES and EN). */
  name: string
  /**
   * Short Spanish subtitle / role (e.g. "Plataforma e-commerce", "Asistente IA").
   * English equivalent is in i18n if needed; for now we keep it bilingual-agnostic.
   */
  subtitle: { es: string; en: string }
  /** One-paragraph elevator pitch in both languages. */
  description: { es: string; en: string }
  /** Tech stack — drives the icon row. */
  technologies: TechId[]
  /** Primary GitHub URL (front-end repo when split). */
  repoUrl: string
  /** Optional companion repo (backend / frontend split). */
  companionUrl?: string
  /** Live URL if deployed. */
  liveUrl?: string
  /** Approximate work period (free-form). */
  period: string
  /** Year for sorting / filtering. */
  year: number
  /** True if the GitHub repo is private (still listed; only the link is hidden). */
  isPrivate: boolean
  /** When true, this repo is shown on the homepage Proyectos section. */
  featured: boolean
  /**
   * Optional illustration glyph used for the carousel placeholder until images
   * are uploaded.
   */
  illustration?: ProjectIllustration
  /**
   * Optional list of image paths (from /public). Empty = show placeholder.
   */
  images?: string[]
}

// ---------- Repo registry ----------
//
// Auto-curated from `gh repo list` for the user p5Patricio. Years 2025–2026.
// Backend + Frontend pairs (Rey Asesino, D-MOX, VoiceAgenda) are merged into
// a single entry with `companionUrl` so each card represents one product, not
// two GitHub repos.

export const REPOS: Repo[] = [
  // ---- 2026 ----
  {
    id: 'd-mox',
    name: 'D-MOX',
    subtitle: {
      es: 'Plataforma de análisis político con IA',
      en: 'AI-powered political analysis platform',
    },
    description: {
      es: 'Plataforma full-stack para el análisis político de medios argentinos. El backend procesa noticias en tiempo real con NLP en español (spaCy) y razonamiento con Gemini 2.0 Flash; el frontend visualiza tendencias con dashboards reactivos.',
      en: 'Full-stack platform for analyzing Argentine political media. Backend processes news in real time with Spanish NLP (spaCy) and reasoning via Gemini 2.0 Flash; the frontend visualizes trends through reactive dashboards.',
    },
    technologies: ['python', 'fastapi', 'postgres', 'gemini', 'next', 'ts', 'tailwind', 'docker'],
    repoUrl: 'https://github.com/p5Patricio/D-MOX---Frontend',
    companionUrl: 'https://github.com/p5Patricio/D-MOX---Backend',
    period: 'Mar 2026 — presente',
    year: 2026,
    isPrivate: true,
    featured: false,
    illustration: 'mountain',
    images: ['/projects/thumbs/demox.webp'],
  },
  {
    id: 'windows-assistant',
    name: 'Windows Assistant',
    subtitle: {
      es: 'Asistente administrativo de escritorio con IA',
      en: 'AI-powered desktop administrative assistant',
    },
    description: {
      es: 'Agente de escritorio para Windows 11 que controla Outlook, Excel y apps nativas vía UI Automation y visión por computadora. Combina Gemini 2.5 Flash como razonador con un modelo Gemma local para visión, con gate humano (HITL) antes de cada acción crítica.',
      en: 'Windows 11 desktop agent that controls Outlook, Excel and native apps via UI Automation and computer vision. Pairs Gemini 2.5 Flash reasoning with a local Gemma vision model, gated by Human-in-the-Loop confirmations on every critical action.',
    },
    technologies: ['python', 'gemini', 'ollama', 'windows', 'anthropic'],
    repoUrl: 'https://github.com/p5Patricio/windows-assistant',
    period: 'Abr 2026',
    year: 2026,
    isPrivate: true,
    featured: false,
    illustration: 'torii',
    images: ['/projects/thumbs/windows-assistant.webp'],
  },
  {
    id: 'rey-asesino',
    name: 'Rey Asesino',
    subtitle: {
      es: 'E-commerce de moda urbana',
      en: 'Streetwear e-commerce platform',
    },
    description: {
      es: 'Tienda online completa: API en FastAPI con SQLAlchemy y almacenamiento en Cloudflare R2 (imágenes WebP optimizadas on-the-fly), y frontend en Next.js 16 con React 19, App Router y PWA — priorizando LCP, accesibilidad y experiencia de compra.',
      en: 'End-to-end online store: FastAPI + SQLAlchemy backend with Cloudflare R2 storage (on-the-fly WebP optimization), and a Next.js 16 + React 19 frontend with App Router and PWA support — built around LCP, accessibility and a smooth checkout.',
    },
    technologies: ['python', 'fastapi', 'sqlalchemy', 'postgres', 'cloudflare', 'next', 'react', 'ts', 'tailwind'],
    repoUrl: 'https://github.com/p5Patricio/reyasesino-frontend',
    companionUrl: 'https://github.com/p5Patricio/reyasesino-backend',
    liveUrl: 'https://reyasesino-frontend.vercel.app/',
    period: 'Mar 2026 — presente',
    year: 2026,
    isPrivate: true,
    featured: true,
    illustration: 'pagoda',
    images: ['/projects/thumbs/rey-asesino.webp'],
  },
  {
    id: 'wisprlocal',
    name: 'WisprLocal',
    subtitle: {
      es: 'Dictado por voz local sin nube',
      en: 'Local voice dictation without the cloud',
    },
    description: {
      es: 'Dictado bilingüe español/inglés que corre 100% local con Whisper sobre GPU NVIDIA. Inyecta el texto transcrito en cualquier app vía clipboard, con descarga del modelo desde la bandeja para liberar VRAM al jugar.',
      en: 'Bilingual ES/EN dictation that runs 100% locally with Whisper on NVIDIA GPUs. Injects transcribed text into any app via clipboard, with a tray switch to unload the model and free VRAM while gaming.',
    },
    technologies: ['python', 'whisper', 'windows'],
    repoUrl: 'https://github.com/p5Patricio/WisprLocal',
    period: 'Mar — Abr 2026',
    year: 2026,
    isPrivate: false,
    featured: true,
    images: ['/projects/thumbs/wisprlocal.webp'],
  },
  {
    id: 'infinite-tic-tac-toe',
    name: 'Infinite Tic-Tac-Toe',
    subtitle: {
      es: 'Juego de gato infinito multijugador',
      en: 'Infinite tic-tac-toe multiplayer game',
    },
    description: {
      es: 'Versión del clásico juego de gato con un giro: el tablero se expande infinitamente. Construido con React y TypeScript, permite partidas locales con lógica de victoria dinámica y una interfaz limpia y minimalista.',
      en: 'A twist on the classic tic-tac-toe: the board expands infinitely. Built with React and TypeScript, it supports local matches with dynamic win logic and a clean, minimal interface.',
    },
    technologies: ['react', 'ts', 'tailwind'],
    repoUrl: 'https://github.com/p5Patricio/infinite-tic-tac-toe',
    period: 'Abr 2026',
    year: 2026,
    isPrivate: false,
    featured: true,
    images: ['/projects/thumbs/infinite-tic-tac-toe.webp'],
  },
  {
    id: 'voiceagenda',
    name: 'VoiceAgenda',
    subtitle: {
      es: 'Agenda controlada por voz',
      en: 'Voice-driven scheduler',
    },
    description: {
      es: 'Agenda inteligente operable por voz que entiende intenciones en lenguaje natural y crea, mueve y consulta eventos sin tocar el teclado. Backend y frontend en TypeScript.',
      en: 'Voice-driven smart scheduler that understands natural-language intents and creates, moves and queries events hands-free. TypeScript stack on both backend and frontend.',
    },
    technologies: ['ts', 'node', 'react', 'tailwind'],
    repoUrl: 'https://github.com/p5Patricio/VoiceAgenda-Frontend',
    companionUrl: 'https://github.com/p5Patricio/VoiceAgenda-Backend',
    period: 'Mar 2026',
    year: 2026,
    isPrivate: true,
    featured: false,
    images: ['/projects/thumbs/voiceagenda.webp'],
  },
  {
    id: 'fittrack-pro',
    name: 'FitTrack Pro',
    subtitle: {
      es: 'App de seguimiento fitness',
      en: 'Fitness tracking app',
    },
    description: {
      es: 'Aplicación full-stack para el seguimiento de rutinas de ejercicio, nutrición y progreso físico. Frontend en React con TypeScript y backend con Node.js, enfocada en una experiencia de usuario fluida y datos en tiempo real.',
      en: 'Full-stack application for tracking workout routines, nutrition and physical progress. React with TypeScript frontend and Node.js backend, focused on a smooth user experience and real-time data.',
    },
    technologies: ['react', 'ts', 'tailwind', 'vite', 'node'],
    repoUrl: 'https://github.com/p5Patricio/fittrack-pro-frontend',
    companionUrl: 'https://github.com/p5Patricio/fittrack-pro-backend',
    period: 'May 2026',
    year: 2026,
    isPrivate: false,
    featured: false,
    images: ['/projects/thumbs/fittrack-pro.webp'],
  },
  // ---- 2025 ----
  {
    id: 'clasificador-nba',
    name: 'Clasificador Entrenador NBA',
    subtitle: {
      es: 'Modelo de clasificación de entrenadores',
      en: 'NBA coach classifier model',
    },
    description: {
      es: 'Modelo de machine learning en Python para clasificar el estilo de juego de entrenadores de la NBA usando estadísticas históricas. Entrenamiento, evaluación y visualización con scikit-learn + pandas.',
      en: 'Python machine-learning model that classifies NBA coaches by playing style using historical statistics. Training, evaluation and visualization with scikit-learn + pandas.',
    },
    technologies: ['python', 'pandas', 'numpy', 'scikit'],
    repoUrl: 'https://github.com/p5Patricio/Clasificador_Entrenador-NBA',
    period: 'Abr 2025',
    year: 2025,
    isPrivate: false,
    featured: false,
    images: ['/projects/thumbs/clasificador-nba.webp'],
  },
  {
    id: 'esteganobot',
    name: 'EsteganoBOT',
    subtitle: {
      es: 'Bot de esteganografía en imágenes',
      en: 'Image steganography bot',
    },
    description: {
      es: 'Aplicación full-stack que oculta y extrae mensajes en imágenes mediante esteganografía (LSB). Frontend en Vue.js y backend en Node/JavaScript.',
      en: 'Full-stack app that hides and extracts messages in images via LSB steganography. Vue.js frontend and Node/JavaScript backend.',
    },
    technologies: ['vue', 'js', 'node'],
    repoUrl: 'https://github.com/p5Patricio/EsteganoBOT-frontend',
    companionUrl: 'https://github.com/p5Patricio/EsteganoBOT-backend',
    period: 'Mar 2025',
    year: 2025,
    isPrivate: true,
    featured: false,
    images: ['/projects/thumbs/esteganobot.webp'],
  },
  {
    id: 'art-classifier',
    name: 'Art Classifier',
    subtitle: {
      es: 'Clasificador de arte con ML',
      en: 'Art classifier with ML',
    },
    description: {
      es: 'Modelo de machine learning en Python que clasifica obras de arte por estilo y autor usando redes neuronales convolucionales. Entrenamiento con dataset propio y visualización de métricas.',
      en: 'Python machine-learning model that classifies artworks by style and author using convolutional neural networks. Training with a custom dataset and metrics visualization.',
    },
    technologies: ['python', 'tensorflow', 'opencv', 'numpy'],
    repoUrl: 'https://github.com/p5Patricio/Art_Classifier',
    period: 'Dic 2024',
    year: 2024,
    isPrivate: false,
    featured: false,
    images: ['/projects/thumbs/art-classifier.webp'],
  },
]

// ---------- Convenience selectors ----------

export const FEATURED_REPOS: Repo[] = REPOS.filter((r) => r.featured)

export const ALL_REPOS_BY_YEAR: Repo[] = [...REPOS].sort((a, b) => {
  if (a.year !== b.year) return b.year - a.year
  return a.name.localeCompare(b.name)
})
