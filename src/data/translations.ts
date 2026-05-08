export type Lang = 'es' | 'en'

type Word = { text: string; size: 'xs' | 'sm' | 'lg' | 'xl' }

type Value = { title: string; description: string }

type ExperienceItem = {
  period: string
  title: string
  institution: string
  description: string
}

type InfoItem = { label: string; value: string; href?: string }

type Dict = {
  nav: {
    inicio: string
    sobreMi: string
    proyectos: string
    habilidades: string
    experiencia: string
    contacto: string
  }
  brand: {
    title: string
    subtitle: string
  }
  hero: {
    words: Word[]
    stamp: string
  }
  sobreMi: {
    title: string
    stamp: string
    para1: string
    para2: string
    values: Value[]
  }
  proyectos: {
    title: string
    stamp: string
    intro: string
    viewProject: string
    /** CTA at the bottom of the home Proyectos section that links to /galeria. */
    viewAll: string
  }
  experiencia: {
    title: string
    stamp: string
    intro: string
    placeholderImage: string
    items: ExperienceItem[]
  }
  habilidades: {
    title: string
    stamp: string
    intro: string
  }
  galeria: {
    title: string
    stamp: string
    intro: string
    backHome: string
    /** Section header for each year group on the gallery page. */
    yearLabel: string
  }
  contacto: {
    title: string
    stamp: string
    intro: string[]
    info: {
      email: InfoItem
      location: InfoItem
      linkedin: InfoItem
      github: InfoItem
    }
    form: {
      nameLabel: string
      namePlaceholder: string
      emailLabel: string
      emailPlaceholder: string
      subjectLabel: string
      subjectPlaceholder: string
      messageLabel: string
      messagePlaceholder: string
      submit: string
      sending: string
      success: string
      error: string
    }
  }
}

export const translations: Record<Lang, Dict> = {
  es: {
    nav: {
      inicio:      'Inicio',
      sobreMi:     'Sobre mí',
      proyectos:   'Proyectos',
      habilidades: 'Habilidades',
      experiencia: 'Experiencia',
      contacto:    'Contacto',
    },
    brand: {
      title:    'PORTAFOLIO',
      subtitle: 'patodev · Ingeniero de Software',
    },
    hero: {
      words: [
        { text: 'Soy',       size: 'sm' },
        { text: 'Ingeniero', size: 'xl' },
        { text: 'de',        size: 'xs' },
        { text: 'Software',  size: 'xl' },
      ],
      stamp: '私',
    },
    sobreMi: {
      title: 'Sobre mí',
      stamp: '紹介',
      para1:
        'Hola, soy Patricio García — mis amigos me dicen Pato. Soy ingeniero en sistemas computacionales y hoy en día estoy enfocado en el desarrollo de software. Me apasiona construir herramientas, entender cómo funcionan por dentro y simplificar flujos de trabajo complejos. Últimamente, la inteligencia artificial se ha convertido en un gran compañero de desarrollo: la veo como una herramienta extraordinaria que potencia enormemente lo que podemos crear en este ámbito.',
      para2:
        'Fuera del código, los videojuegos son una de mis grandes pasiones, especialmente el ámbito competitivo. He alcanzado rangos respetables como Master en Overwatch y Diamante III en Rocket League.',
      values: [
        { title: 'Quién soy', description: 'Apasionado por la tecnología y el aprendizaje continuo.' },
        { title: 'Misión',    description: 'Crear soluciones que generen impacto y valor real.' },
        { title: 'Visión',    description: 'Seguir creciendo y dejando huella a través del código.' },
        { title: 'Valores',   description: 'Compromiso, creatividad, respeto y perseverancia.' },
      ],
    },
    proyectos: {
      title: 'Proyectos',
      stamp: '開発者',
      intro:
        'Una selección de proyectos en los que he trabajado, aplicando mis conocimientos para crear soluciones eficientes, escalables y centradas en las necesidades de los usuarios.',
      viewProject: 'Ver proyecto',
      viewAll:     'Ver todos los proyectos',
    },
    experiencia: {
      title: 'Experiencia',
      stamp: '経験',
      intro:
        'Este es mi gran inicio. Mi carrera universitaria y mis prácticas profesionales fueron años de esfuerzo dedicado que me enseñaron el valor del compromiso y el aprendizaje constante. Hoy doy este primer paso con confianza, sabiendo que esto es solo el comienzo de un camino lleno de crecimiento y proyectos por construir.',
      placeholderImage: 'Imagen pendiente',
      items: [
        {
          period: '2021 — 2025',
          title: 'Graduación Universitaria',
          institution: 'Universidad de Guanajuato',
          description:
            'Formación en ingeniería en sistemas computacionales con énfasis en desarrollo web, algoritmos, estructuras de datos y arquitectura de sistemas. Participación en proyectos académicos de machine learning y visión por computadora.',
        },
        {
          period: '2025 — 2026',
          title: 'Prácticas Profesionales',
          institution: 'Mazda Motor Manufacturing',
          description:
            'Desarrollo de un sistema de gestión de documentos para el área de IT que agilizó significativamente los procesos internos. Colaboración en equipo multidisciplinario y aplicación de metodologías ágiles en un entorno industrial.',
        },
      ],
    },
    habilidades: {
      title: 'Habilidades',
      stamp: '技術',
      intro:
        'Las herramientas con las que construyo. Cada categoría agrupa el stack que más uso a diario, desde frontend y backend hasta IA y los agentes con los que hago pair programming.',
    },
    galeria: {
      title: 'Galería',
      stamp: '作品',
      intro:
        'Todos los proyectos en los que he trabajado este año, desde experimentos rápidos hasta plataformas full-stack en producción. Cada tarjeta muestra el stack real que usé.',
      backHome: 'Volver al inicio',
      yearLabel: 'Año',
    },
    contacto: {
      title: 'Contacto',
      stamp: '問合せ',
      intro: [
        '¿Tienes alguna idea o proyecto en mente?',
        'Estoy siempre abierto a nuevas oportunidades,',
        'colaboraciones o simplemente a charlar.',
        '¡Hablemos!',
      ],
      info: {
        email:    { label: 'EMAIL',     value: 'pa.garciaperezvela@ugto.mx',     href: 'mailto:pa.garciaperezvela@ugto.mx' },
        location: { label: 'UBICACIÓN', value: 'Guanajuato, México' },
        linkedin: { label: 'LINKEDIN',  value: 'linkedin.com/in/patricioagpv',   href: 'https://www.linkedin.com/in/patricioagpv/' },
        github:   { label: 'GITHUB',    value: 'github.com/p5Patricio',          href: 'https://github.com/p5Patricio' },
      },
      form: {
        nameLabel:          'NOMBRE',
        namePlaceholder:    'Tu nombre',
        emailLabel:         'EMAIL',
        emailPlaceholder:   'tu@email.com',
        subjectLabel:       'ASUNTO',
        subjectPlaceholder: 'Asunto del mensaje',
        messageLabel:       'MENSAJE',
        messagePlaceholder: 'Escribe tu mensaje aquí...',
        submit:             'Enviar mensaje',
        sending:            'Enviando...',
        success:            '¡Mensaje enviado! Te responderé pronto.',
        error:              'No se pudo enviar. Intenta de nuevo más tarde.',
      },
    },
  },
  en: {
    nav: {
      inicio:      'Home',
      sobreMi:     'About',
      proyectos:   'Projects',
      habilidades: 'Skills',
      experiencia: 'Experience',
      contacto:    'Contact',
    },
    brand: {
      title:    'PORTFOLIO',
      subtitle: 'patodev · Software Engineer',
    },
    hero: {
      words: [
        { text: 'I am',     size: 'sm' },
        { text: 'a',        size: 'xs' },
        { text: 'Software', size: 'xl' },
        { text: 'Engineer', size: 'xl' },
      ],
      stamp: '私',
    },
    sobreMi: {
      title: 'About me',
      stamp: '紹介',
      para1:
        "Hi, I'm Patricio García — friends call me Pato. I'm a Computer Systems Engineer currently focused on software development. I'm passionate about building tools, understanding how things work under the hood, and simplifying complex workflows. Lately, artificial intelligence has become a great development companion: I see it as an extraordinary tool that tremendously amplifies what we can create in this field.",
      para2:
        'Outside of code, video games are one of my greatest passions, especially the competitive scene. I have reached respectable ranks such as Master in Overwatch and Diamond III in Rocket League.',
      values: [
        { title: 'Who I am', description: 'Passionate about technology and continuous learning.' },
        { title: 'Mission',  description: 'Build solutions that create real impact and value.' },
        { title: 'Vision',   description: 'Keep growing and leaving a mark through code.' },
        { title: 'Values',   description: 'Commitment, creativity, respect and perseverance.' },
      ],
    },
    proyectos: {
      title: 'Projects',
      stamp: '開発者',
      intro:
        'A selection of projects I have worked on, applying my knowledge to build efficient, scalable solutions centered around user needs.',
      viewProject: 'View project',
      viewAll:     'View all projects',
    },
    experiencia: {
      title: 'Experience',
      stamp: '経験',
      intro:
        'This is my great beginning. My university studies and professional internship were years of dedicated effort that taught me the value of commitment and continuous learning. Today I take this first step with confidence, knowing this is only the beginning of a path full of growth and projects yet to build.',
      placeholderImage: 'Image pending',
      items: [
        {
          period: '2021 — 2025',
          title: 'University Graduation',
          institution: 'Universidad de Guanajuato',
          description:
            'Computer Systems Engineering education with emphasis on web development, algorithms, data structures, and systems architecture. Participation in academic projects involving machine learning and computer vision.',
        },
        {
          period: '2025 — 2026',
          title: 'Internship',
          institution: 'Mazda Motor Manufacturing',
          description:
            'Development of a document management system for the IT department that significantly streamlined internal processes. Collaboration within a multidisciplinary team and application of agile methodologies in an industrial environment.',
        },
      ],
    },
    habilidades: {
      title: 'Skills',
      stamp: '技術',
      intro:
        'The tools I build with. Each category groups the stack I use day to day — from frontend and backend to AI and the agents I pair-program with.',
    },
    galeria: {
      title: 'Gallery',
      stamp: '作品',
      intro:
        'Every project I have worked on this year — from quick experiments to full-stack platforms in production. Each card shows the actual stack I used.',
      backHome: 'Back to home',
      yearLabel: 'Year',
    },
    contacto: {
      title: 'Contact',
      stamp: '問合せ',
      intro: [
        'Do you have an idea or project in mind?',
        'I am always open to new opportunities,',
        'collaborations or simply a good conversation.',
        'Let’s talk!',
      ],
      info: {
        email:    { label: 'EMAIL',    value: 'pa.garciaperezvela@ugto.mx',     href: 'mailto:pa.garciaperezvela@ugto.mx' },
        location: { label: 'LOCATION', value: 'Guanajuato, Mexico' },
        linkedin: { label: 'LINKEDIN', value: 'linkedin.com/in/patricioagpv',   href: 'https://www.linkedin.com/in/patricioagpv/' },
        github:   { label: 'GITHUB',   value: 'github.com/p5Patricio',          href: 'https://github.com/p5Patricio' },
      },
      form: {
        nameLabel:          'NAME',
        namePlaceholder:    'Your name',
        emailLabel:         'EMAIL',
        emailPlaceholder:   'you@email.com',
        subjectLabel:       'SUBJECT',
        subjectPlaceholder: 'Message subject',
        messageLabel:       'MESSAGE',
        messagePlaceholder: 'Write your message here...',
        submit:             'Send message',
        sending:            'Sending...',
        success:            'Message sent! I will reply soon.',
        error:              'Could not send. Please try again later.',
      },
    },
  },
}
