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
    quoteLine1: string
    quoteLine2: string
  }
  sobreMi: {
    title: string
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
      subtitle: 'Ingeniero de Software',
    },
    hero: {
      words: [
        { text: 'Soy',       size: 'sm' },
        { text: 'Ingeniero', size: 'xl' },
        { text: 'de',        size: 'xs' },
        { text: 'Software',  size: 'xl' },
      ],
      quoteLine1: 'Hay que dar un paso a la vez,',
      quoteLine2: 'solo uno a la vez',
    },
    sobreMi: {
      title: 'Sobre mí',
      para1:
        'Soy un ingeniero de software apasionado por la creación de soluciones tecnológicas que mejoren la vida de las personas. Me especializo en el desarrollo de aplicaciones web y disfruto convertir ideas en productos funcionales, escalables y eficientes.',
      para2:
        'Me motiva aprender constantemente, trabajar en equipo y afrontar nuevos desafíos que me permitan crecer tanto personal como profesionalmente.',
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
        'Cada paso del camino me ha permitido crecer como ingeniero y como persona. Estos son los hitos más significativos de mi recorrido académico y profesional.',
      placeholderImage: 'Imagen pendiente',
      items: [
        {
          period: 'Por definir',
          title: 'Graduación Universitaria',
          institution: 'Próximamente',
          description:
            'Próximamente — los detalles de mi formación universitaria se actualizarán en breve.',
        },
        {
          period: 'Por definir',
          title: 'Prácticas Profesionales',
          institution: 'Mazda · Próximamente',
          description:
            'Próximamente — los detalles de mi experiencia en Mazda se actualizarán en breve.',
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
        'colaboraciones o simplemente a charlar sobre tecnología.',
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
      subtitle: 'Software Engineer',
    },
    hero: {
      words: [
        { text: 'I am',     size: 'sm' },
        { text: 'a',        size: 'xs' },
        { text: 'Software', size: 'xl' },
        { text: 'Engineer', size: 'xl' },
      ],
      quoteLine1: 'One step at a time,',
      quoteLine2: 'only one at a time',
    },
    sobreMi: {
      title: 'About me',
      para1:
        'I am a software engineer passionate about building technology that improves people’s lives. I specialize in web application development and enjoy turning ideas into functional, scalable and efficient products.',
      para2:
        'I am driven by continuous learning, teamwork, and embracing new challenges that help me grow both personally and professionally.',
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
        'Every step along the way has shaped me as an engineer and as a person. These are the most meaningful milestones of my academic and professional journey.',
      placeholderImage: 'Image pending',
      items: [
        {
          period: 'TBD',
          title: 'University Graduation',
          institution: 'Coming soon',
          description:
            'Coming soon — details about my university studies will be updated shortly.',
        },
        {
          period: 'TBD',
          title: 'Internship',
          institution: 'Mazda · Coming soon',
          description:
            'Coming soon — details about my experience at Mazda will be updated shortly.',
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
        'collaborations or simply a good conversation about technology.',
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
      },
    },
  },
}
