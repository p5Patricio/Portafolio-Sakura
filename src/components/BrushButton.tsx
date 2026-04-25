import type { ReactNode } from 'react'

type Props = {
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  children: ReactNode
  ariaLabel?: string
}

/**
 * Button shaped like a single brush stroke. Paper-on-ink aesthetic:
 * a rough rectangle with irregular edges, text on top in white.
 *
 * Works as an anchor (when `href` is set) or as a `<button>` (default).
 * Use `type="submit"` to trigger form submission.
 */
function BrushButton({
  href,
  onClick,
  type = 'button',
  disabled = false,
  children,
  ariaLabel,
}: Props) {
  const body = (
    <span className="relative inline-flex items-center justify-center px-8 py-3 min-w-[14rem]">
      {/* brush-stroke background */}
      <svg
        viewBox="0 0 280 64"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full text-color-tinta transition-transform duration-300 group-hover:scale-[1.02]"
        aria-hidden="true"
      >
        <defs>
          <filter
            id="brush-rough"
            x="-5%"
            y="-10%"
            width="110%"
            height="120%"
          >
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="4" />
            <feDisplacementMap in="SourceGraphic" scale="3.5" />
          </filter>
        </defs>
        <path
          d="M10 18 Q 30 10, 60 14 T 140 12 T 220 16 T 272 20 Q 276 32, 272 44 T 210 50 T 130 48 T 60 52 Q 30 50, 10 46 Q 6 32, 10 18 Z"
          fill="currentColor"
          filter="url(#brush-rough)"
        />
        <path
          d="M14 20 Q 60 18, 140 16 T 266 22"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.6"
          fill="none"
          filter="url(#brush-rough)"
        />
      </svg>

      <span className="relative z-10 text-color-papel text-xs font-semibold tracking-[0.3em] uppercase">
        {children}
      </span>
    </span>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="group inline-block"
      >
        {body}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className="group inline-block bg-transparent border-0 p-0 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {body}
    </button>
  )
}

export default BrushButton
