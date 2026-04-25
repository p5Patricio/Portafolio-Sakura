import type { ProjectIllustration as Variant } from '../data/projects'

type Props = {
  variant: Variant
  className?: string
}

/**
 * Placeholder sumi-e scene per project. Replace with real imagery later
 * by swapping this component for an <img src="..." /> inside ProjectCard.
 */
function ProjectIllustration({ variant, className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 400 200"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mist-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4eee0" />
          <stop offset="50%" stopColor="#ece3d0" />
          <stop offset="100%" stopColor="#e1d6bf" />
        </linearGradient>
        <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#c95b64" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#c95b64" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#c95b64" stopOpacity="0" />
        </radialGradient>
        <filter id="ink-rough" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
          <feDisplacementMap in="SourceGraphic" scale="1.8" />
        </filter>
      </defs>

      {/* paper wash */}
      <rect width="400" height="200" fill="url(#mist-top)" />

      {variant === 'mountain' && (
        <g>
          {/* sun */}
          <circle cx="290" cy="75" r="32" fill="url(#sun)" />
          {/* far mountain */}
          <path
            d="M0 150 L60 95 L110 130 L160 80 L220 130 L280 90 L340 120 L400 100 L400 200 L0 200 Z"
            fill="#1a1a1a"
            opacity="0.32"
            filter="url(#ink-rough)"
          />
          {/* near mountain */}
          <path
            d="M-10 180 L50 130 L120 170 L180 125 L250 170 L320 140 L410 175 L410 210 L-10 210 Z"
            fill="#1a1a1a"
            opacity="0.55"
            filter="url(#ink-rough)"
          />
          {/* water line */}
          <path d="M20 178 L120 176 M160 182 L240 180 M270 184 L360 182" stroke="#1a1a1a" strokeOpacity="0.35" strokeWidth="1" />
        </g>
      )}

      {variant === 'torii' && (
        <g>
          {/* sun behind */}
          <circle cx="120" cy="85" r="36" fill="url(#sun)" />
          {/* hills silhouette */}
          <path
            d="M0 160 L70 130 L140 155 L210 130 L280 155 L350 140 L400 160 L400 200 L0 200 Z"
            fill="#1a1a1a"
            opacity="0.35"
            filter="url(#ink-rough)"
          />
          {/* torii */}
          <g filter="url(#ink-rough)" fill="#1a1a1a" opacity="0.9">
            <rect x="180" y="50" width="90" height="8" rx="1" />
            <rect x="170" y="58" width="110" height="5" />
            <rect x="193" y="63" width="6" height="90" />
            <rect x="251" y="63" width="6" height="90" />
            <rect x="210" y="90" width="30" height="4" />
          </g>
          {/* water */}
          <path d="M0 170 L400 170" stroke="#1a1a1a" strokeOpacity="0.3" strokeWidth="1" />
          <path d="M30 180 L110 180 M150 184 L230 184 M270 178 L360 178" stroke="#1a1a1a" strokeOpacity="0.3" strokeWidth="1" />
        </g>
      )}

      {variant === 'pagoda' && (
        <g>
          {/* sakura branch on left */}
          <path
            d="M-5 20 Q 40 40, 70 80 Q 90 110, 60 150"
            fill="none"
            stroke="#1a1a1a"
            strokeOpacity="0.55"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#ink-rough)"
          />
          {[
            [25, 40], [50, 60], [65, 90], [78, 115], [45, 95], [90, 70], [30, 70],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="3.2"
              fill="#c95b64"
              opacity="0.8"
            />
          ))}

          {/* pagoda */}
          <g filter="url(#ink-rough)" fill="#1a1a1a" opacity="0.85">
            <path d="M240 60 L300 60 L310 70 L230 70 Z" />
            <rect x="258" y="70" width="24" height="22" />
            <path d="M235 92 L305 92 L315 102 L225 102 Z" />
            <rect x="258" y="102" width="24" height="22" />
            <path d="M228 124 L312 124 L320 134 L220 134 Z" />
            <rect x="258" y="134" width="24" height="26" />
            <rect x="268" y="40" width="4" height="22" />
          </g>

          {/* hills */}
          <path
            d="M0 170 L80 145 L160 165 L240 150 L320 170 L400 155 L400 200 L0 200 Z"
            fill="#1a1a1a"
            opacity="0.35"
            filter="url(#ink-rough)"
          />
        </g>
      )}

      {/* subtle birds */}
      <g stroke="#1a1a1a" strokeOpacity="0.6" strokeWidth="1.2" fill="none" strokeLinecap="round">
        <path d="M340 40 q 4 -4 8 0 q 4 -4 8 0" />
        <path d="M360 55 q 3 -3 6 0 q 3 -3 6 0" />
      </g>
    </svg>
  )
}

export default ProjectIllustration
