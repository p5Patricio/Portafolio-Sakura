type Props = {
  className?: string
}

function SakuraStamp({ className = 'w-12 h-12' }: Props) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <defs>
        <filter id="roughStamp" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
          <feDisplacementMap in="SourceGraphic" scale="1.5" />
        </filter>
      </defs>
      <circle
        cx="30"
        cy="30"
        r="24"
        fill="none"
        stroke="#c95b64"
        strokeWidth="2.5"
        filter="url(#roughStamp)"
        opacity="0.9"
      />
      <text
        x="30"
        y="39"
        textAnchor="middle"
        fontSize="24"
        fill="#c95b64"
        style={{ fontFamily: 'serif' }}
      >
        桜
      </text>
    </svg>
  )
}

export default SakuraStamp
