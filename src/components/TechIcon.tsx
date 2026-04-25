import type { TechId } from '../data/projects'

type Props = {
  id: TechId
  className?: string
}

const LABELS: Record<TechId, string> = {
  react: 'React',
  js: 'JavaScript',
  ts: 'TypeScript',
  tailwind: 'Tailwind CSS',
  framer: 'Framer Motion',
  vue: 'Vue.js',
  laravel: 'Laravel',
  mysql: 'MySQL',
  php: 'PHP',
  html5: 'HTML5',
  css3: 'CSS3',
  gsap: 'GSAP',
}

function TechIcon({ id, className = 'w-7 h-7' }: Props) {
  const common = {
    viewBox: '0 0 32 32',
    className: `${className} text-color-tinta`,
    role: 'img',
    'aria-label': LABELS[id],
  } as const

  switch (id) {
    case 'react':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="16" cy="16" r="2" fill="currentColor" stroke="none" />
          <ellipse cx="16" cy="16" rx="12" ry="4.5" />
          <ellipse
            cx="16"
            cy="16"
            rx="12"
            ry="4.5"
            transform="rotate(60 16 16)"
          />
          <ellipse
            cx="16"
            cy="16"
            rx="12"
            ry="4.5"
            transform="rotate(120 16 16)"
          />
        </svg>
      )

    case 'js':
      return (
        <svg {...common} fill="currentColor">
          <rect
            x="3"
            y="3"
            width="26"
            height="26"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <text
            x="16"
            y="22"
            textAnchor="middle"
            fontSize="11"
            fontWeight="800"
            fontFamily="'Inter', 'Helvetica', sans-serif"
            letterSpacing="0.5"
          >
            JS
          </text>
        </svg>
      )

    case 'ts':
      return (
        <svg {...common} fill="currentColor">
          <rect
            x="3"
            y="3"
            width="26"
            height="26"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <text
            x="16"
            y="22"
            textAnchor="middle"
            fontSize="11"
            fontWeight="800"
            fontFamily="'Inter', 'Helvetica', sans-serif"
            letterSpacing="0.5"
          >
            TS
          </text>
        </svg>
      )

    case 'tailwind':
      return (
        <svg
          {...common}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 14 C 8 9, 12 9, 14 13 C 16 17, 20 17, 23 14" />
          <path d="M9 21 C 12 16, 16 16, 18 20 C 20 24, 24 24, 27 21" />
        </svg>
      )

    case 'framer':
      return (
        <svg {...common} fill="currentColor">
          <path
            d="M8 4 H24 V12 H16 L24 20 H16 V28 L8 20 V12 H16 L8 4 Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      )

    case 'vue':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path
            d="M3 6 L16 28 L29 6 L23 6 L16 18 L9 6 Z"
            strokeLinejoin="round"
          />
          <path
            d="M9 6 L16 18 L23 6"
            strokeLinejoin="round"
          />
        </svg>
      )

    case 'laravel':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.4">
          <path
            d="M4 6 L4 24 L16 30 L28 24 L28 14 L22 10 L22 18 L16 22 L10 18 L10 8 Z"
            strokeLinejoin="round"
          />
          <path d="M4 6 L10 10" />
          <path d="M10 18 L16 22" />
          <path d="M22 18 L28 14" />
        </svg>
      )

    case 'mysql':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.4">
          <path
            d="M4 18 C 6 10, 14 8, 20 14 C 24 18, 26 22, 28 24 C 25 23, 22 22, 19 20 C 17 18, 15 17, 12 18 C 9 19, 6 20, 4 18 Z"
            strokeLinejoin="round"
          />
          <path d="M22 14 L25 12 M24 16 L27 15" strokeLinecap="round" />
        </svg>
      )

    case 'php':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="16" cy="16" rx="13" ry="8" />
          <text
            x="16"
            y="19"
            textAnchor="middle"
            fontSize="7"
            fontWeight="800"
            fontFamily="'Inter', 'Helvetica', sans-serif"
            letterSpacing="0.8"
            fill="currentColor"
            stroke="none"
          >
            PHP
          </text>
        </svg>
      )

    case 'html5':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5">
          <path
            d="M5 3 L27 3 L25 26 L16 29 L7 26 Z"
            strokeLinejoin="round"
          />
          <text
            x="16"
            y="20"
            textAnchor="middle"
            fontSize="10"
            fontWeight="800"
            fontFamily="'Inter', 'Helvetica', sans-serif"
            fill="currentColor"
            stroke="none"
          >
            5
          </text>
        </svg>
      )

    case 'css3':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5">
          <path
            d="M5 3 L27 3 L25 26 L16 29 L7 26 Z"
            strokeLinejoin="round"
          />
          <text
            x="16"
            y="20"
            textAnchor="middle"
            fontSize="10"
            fontWeight="800"
            fontFamily="'Inter', 'Helvetica', sans-serif"
            fill="currentColor"
            stroke="none"
          >
            3
          </text>
        </svg>
      )

    case 'gsap':
      return (
        <svg {...common} fill="currentColor">
          <text
            x="16"
            y="21"
            textAnchor="middle"
            fontSize="10"
            fontWeight="900"
            fontFamily="'Inter', 'Helvetica', sans-serif"
            letterSpacing="0.5"
          >
            GSAP
          </text>
        </svg>
      )

    default:
      return null
  }
}

export default TechIcon
