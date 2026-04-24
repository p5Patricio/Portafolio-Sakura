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
      >
        <defs>
          <filter id="roughCircle" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="2" seed="7" />
            <feDisplacementMap in="SourceGraphic" scale="2.2" />
          </filter>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#roughCircle)"
        />
      </svg>
      <div className="relative z-10 text-color-tinta">
        {children}
      </div>
    </div>
  )
}

export default InkCircle
