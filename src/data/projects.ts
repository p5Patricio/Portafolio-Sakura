export type ProjectIllustration = 'mountain' | 'torii' | 'pagoda'

export type TechId =
  | 'react'
  | 'js'
  | 'ts'
  | 'tailwind'
  | 'framer'
  | 'vue'
  | 'laravel'
  | 'mysql'
  | 'php'
  | 'html5'
  | 'css3'
  | 'gsap'

export interface ProjectMeta {
  id: string
  illustration: ProjectIllustration
  /**
   * Array of image paths (from /public or imported assets) to display in the
   * project card carousel. Leave empty for now — the carousel will show a
   * "coming soon" placeholder until images are provided.
   */
  images: string[]
  technologies: TechId[]
  url: string
}

export const projectsData: ProjectMeta[] = [
  {
    id: 'sakura-tasks',
    illustration: 'mountain',
    images: [],
    technologies: ['react', 'js', 'tailwind', 'framer'],
    url: 'https://github.com/usuario/sakura-tasks',
  },
  {
    id: 'e-kanban',
    illustration: 'torii',
    images: [],
    technologies: ['vue', 'laravel', 'mysql', 'php'],
    url: 'https://github.com/usuario/e-kanban',
  },
  {
    id: 'portafolio-v1',
    illustration: 'pagoda',
    images: [],
    technologies: ['html5', 'css3', 'js', 'gsap'],
    url: 'https://github.com/usuario/portafolio-v1',
  },
]
