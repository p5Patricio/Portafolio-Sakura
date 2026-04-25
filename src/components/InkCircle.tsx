import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  size?: number
}

function InkCircle({ children, size = 96 }: Props) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
        overflow="visible"
      >
        <defs>
          <filter
            id="roughCircle"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              seed="7"
            />
            <feDisplacementMap in="SourceGraphic" scale="3" />
          </filter>
        </defs>

        {/* Outer thick brush stroke */}
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="7"
          strokeLinecap="round"
          filter="url(#roughCircle)"
          opacity="0.95"
        />
        {/* Inner wash — slightly offset to simulate uneven ink loading */}
        <circle
          cx="50.8"
          cy="49.4"
          r="41"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#roughCircle)"
          opacity="0.55"
        />
      </svg>
      <div className="relative z-10 text-color-tinta">{children}</div>
    </div>
  )
}

export default InkCircle
