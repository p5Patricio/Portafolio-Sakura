type Props = {
  className?: string
}

function Hanko({ className = 'w-6 h-6' }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" fill="#a64048" rx="1" />
      <g stroke="#f4eee0" strokeWidth="1.2" strokeLinecap="square" fill="none">
        <line x1="7"  y1="6"  x2="7"  y2="11" />
        <line x1="11" y1="6"  x2="11" y2="11" />
        <line x1="5"  y1="8.5" x2="13" y2="8.5" />
        <line x1="16" y1="6"  x2="19" y2="6" />
        <line x1="17.5" y1="6" x2="17.5" y2="11" />
        <line x1="6"  y1="14" x2="18" y2="14" />
        <line x1="8"  y1="17" x2="16" y2="17" />
        <line x1="12" y1="13" x2="12" y2="19" />
      </g>
    </svg>
  )
}

export default Hanko
