export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  imageUrl: string
}

export const projectsData: Project[] = [
  {
    id: 'sumi-notes',
    title: 'Sumi Notes',
    description:
      'Aplicación de notas minimalista inspirada en la caligrafía japonesa. Permite organizar pensamientos con una interfaz limpia y gestual.',
    technologies: ['React', 'TypeScript', 'Zustand', 'Tailwind CSS'],
    githubUrl: 'https://github.com/usuario/sumi-notes',
    imageUrl: '/images/sumi-notes.webp',
  },
  {
    id: 'kaze-api',
    title: 'Kaze API',
    description:
      'REST API de alto rendimiento para gestión de recursos en tiempo real. Construida con arquitectura hexagonal y cobertura de tests al 95%.',
    technologies: ['Node.js', 'Fastify', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/usuario/kaze-api',
    imageUrl: '/images/kaze-api.webp',
  },
  {
    id: 'hana-ui',
    title: 'Hana UI',
    description:
      'Librería de componentes accesibles con tokens de diseño intercambiables. Publicada en npm con documentación interactiva en Storybook.',
    technologies: ['React', 'TypeScript', 'Storybook', 'Radix UI'],
    githubUrl: 'https://github.com/usuario/hana-ui',
    imageUrl: '/images/hana-ui.webp',
  },
]
