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

// Deterministic pseudo-random generator so petal values are stable across renders
function seededRandom(seed: number) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}

function SakuraPetals() {
  const petals: Petal[] = useMemo(
    () =>
      Array.from({ length: PETAL_COUNT }, (_, i) => ({
        id: i,
        left: seededRandom(i) * 100,
        size: 8 + seededRandom(i + 100) * 10,
        duration: 9 + seededRandom(i + 200) * 8,
        delay: -seededRandom(i + 300) * 15,
        opacity: 0.55 + seededRandom(i + 400) * 0.35,
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
