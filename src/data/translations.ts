export type Lang = 'es' | 'en'

type Word = { text: string; size: 'xs' | 'sm' | 'lg' | 'xl' }

type Value = { title: string; description: string }

type ProjectItem = { title: string; subtitle: string; description: string }

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
    items: ProjectItem[]
  }
  experiencia: {
    title: string
    stamp: string
    intro: string
    placeholderImage: string
    items: ExperienceItem[]
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
      items: [
        {
          title: 'Sakura Tasks',
          subtitle: 'Aplicación de Gestión de Tareas',
          description:
            'Aplicación web para la gestión de tareas y proyectos en equipo. Permite organizar, asignar y dar seguimiento al progreso de actividades de forma sencilla e intuitiva.',
        },
        {
          title: 'E-Kanban',
          subtitle: 'Tablero Kanban Colaborativo',
          description:
            'Plataforma web colaborativa tipo Kanban para la gestión ágil de proyectos. Drag & drop, columnas personalizables y notificaciones en tiempo real.',
        },
        {
          title: 'Portafolio V1.0',
          subtitle: 'Sitio Web Personal',
          description:
            'Sitio web personal desarrollado para mostrar mis habilidades, proyectos y experiencia. Diseño inspirado en la estética japonesa con tecnologías modernas.',
        },
      ],
    },
    experiencia: {
      title: 'Experiencia',
      stamp: '経験',
      intro:
        'Cada paso del camino me ha permitido crecer como ingeniero y como persona. Estos son los hitos más significativos de mi recorrido académico y profesional.',
      placeholderImage: 'Imagen pendiente',
      items: [
        {
          period: 'TODO · Año',
          title: 'Graduación Universitaria',
          institution: 'TODO · Nombre de la universidad',
          description:
            'TODO · Breve descripción de tu carrera, áreas de enfoque y logros más relevantes durante tu formación universitaria.',
        },
        {
          period: 'TODO · Periodo',
          title: 'Prácticas Profesionales',
          institution: 'Mazda · TODO · Puesto / área',
          description:
            'TODO · Breve descripción de tu rol en Mazda, tecnologías utilizadas, proyectos en los que participaste y aprendizajes clave.',
        },
      ],
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
        email:    { label: 'EMAIL',     value: 'hola@tuportafolio.dev',             href: 'mailto:hola@tuportafolio.dev' },
        location: { label: 'UBICACIÓN', value: 'México' },
        linkedin: { label: 'LINKEDIN',  value: 'linkedin.com/in/tuportafolio',      href: 'https://linkedin.com/in/tuportafolio' },
        github:   { label: 'GITHUB',    value: 'github.com/tuportafolio',           href: 'https://github.com/tuportafolio' },
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
      items: [
        {
          title: 'Sakura Tasks',
          subtitle: 'Task Management Application',
          description:
            'Web application for managing tasks and team projects. Organize, assign and track the progress of activities in a simple and intuitive way.',
        },
        {
          title: 'E-Kanban',
          subtitle: 'Collaborative Kanban Board',
          description:
            'Collaborative Kanban-style web platform for agile project management. Drag & drop, customizable columns and real-time notifications.',
        },
        {
          title: 'Portfolio V1.0',
          subtitle: 'Personal Website',
          description:
            'Personal website built to showcase my skills, projects and experience. Design inspired by Japanese aesthetics with modern technologies.',
        },
      ],
    },
    experiencia: {
      title: 'Experience',
      stamp: '経験',
      intro:
        'Every step along the way has shaped me as an engineer and as a person. These are the most meaningful milestones of my academic and professional journey.',
      placeholderImage: 'Image pending',
      items: [
        {
          period: 'TODO · Year',
          title: 'University Graduation',
          institution: 'TODO · University name',
          description:
            'TODO · Brief description of your degree, areas of focus and most relevant achievements during your university studies.',
        },
        {
          period: 'TODO · Period',
          title: 'Internship',
          institution: 'Mazda · TODO · Role / area',
          description:
            'TODO · Brief description of your role at Mazda, technologies used, projects you contributed to and key takeaways.',
        },
      ],
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
        email:    { label: 'EMAIL',    value: 'hola@tuportafolio.dev',        href: 'mailto:hola@tuportafolio.dev' },
        location: { label: 'LOCATION', value: 'Mexico' },
        linkedin: { label: 'LINKEDIN', value: 'linkedin.com/in/tuportafolio', href: 'https://linkedin.com/in/tuportafolio' },
        github:   { label: 'GITHUB',   value: 'github.com/tuportafolio',      href: 'https://github.com/tuportafolio' },
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
