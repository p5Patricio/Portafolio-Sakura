type Props = {
  className?: string
}

function SakuraIcon({ className = 'w-4 h-4' }: Props) {
  return (
    <svg
      viewBox="-12 -12 24 24"
      className={className}
      aria-hidden="true"
    >
      <g fill="currentColor">
        {[0, 72, 144, 216, 288].map((angle) => (
          <ellipse
            key={angle}
            cx="0"
            cy="-6"
            rx="2.6"
            ry="4.2"
            transform={`rotate(${angle})`}
          />
        ))}
      </g>
      <circle cx="0" cy="0" r="1.3" fill="#a64048" />
    </svg>
  )
}

export default SakuraIcon
