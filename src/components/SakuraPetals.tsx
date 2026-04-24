import { useMemo } from 'react'

const PETAL_COUNT = 18

type Petal = {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  opacity: number
}

function SakuraPetals() {
  const petals: Petal[] = useMemo(
    () =>
      Array.from({ length: PETAL_COUNT }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 8 + Math.random() * 10,
        duration: 9 + Math.random() * 8,
        delay: -Math.random() * 15,
        opacity: 0.55 + Math.random() * 0.35,
      })),
    [],
  )

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-50"
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className="sakura-petal"
          style={{
            left: `${p.left}vw`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  )
}

export default SakuraPetals
