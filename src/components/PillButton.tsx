import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

const BASE_CLASSES =
  'group inline-flex items-center gap-3 rounded-full bg-color-tinta text-color-papel px-7 py-3 text-xs uppercase tracking-[0.3em] font-semibold shadow-[0_8px_24px_-10px_rgba(26,26,26,0.5)] hover:shadow-[0_12px_30px_-12px_rgba(26,26,26,0.55)] transition-shadow'

type Props = {
  children: ReactNode
  ariaLabel?: string
} & (
  | { href: string; external?: boolean; to?: never; type?: never; disabled?: never; onClick?: never }
  | { to: string; href?: never; external?: never; type?: never; disabled?: never; onClick?: never }
  | { type: 'button' | 'submit' | 'reset'; disabled?: boolean; onClick?: () => void; href?: never; to?: never; external?: never }
)

function PillButton({ children, ariaLabel, ...props }: Props) {
  if ('href' in props && props.href) {
    const target = props.external ?? true ? '_blank' : undefined
    const rel = props.external ?? true ? 'noopener noreferrer' : undefined
    return (
      <a
        href={props.href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={BASE_CLASSES}
      >
        {children}
      </a>
    )
  }

  if ('to' in props && props.to) {
    return (
      <Link
        to={props.to}
        aria-label={ariaLabel}
        className={BASE_CLASSES}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
      aria-label={ariaLabel}
      className={`${BASE_CLASSES} disabled:opacity-60 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  )
}

export default PillButton
