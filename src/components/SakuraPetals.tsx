import { useMemo } from 'react'

const PETAL_COUNT = 24

// Border-radius variations that produce recognisably different petal silhouettes
const SHAPES = [
  '150% 0 150% 0',     // classic sakura (current)
  '0 150% 0 150%',     // mirrored classic
  '100% 0 100% 100%',  // rounder, teardrop-like
  '0 100% 100% 100%',  // teardrop flipped
  '120% 40% 120% 40%', // softer, more oval
  '40% 120% 40% 120%', // softer mirrored
] as const

// Pink gradients from pale to deep — all within the sakura palette
const TONES = [
  'radial-gradient(ellipse at 30% 30%, #f5cfd1 0%, #e8a4aa 55%, #c95b64 100%)',          // classic
  'radial-gradient(ellipse at 30% 30%, #fce4ec 0%, #f8bbd0 55%, #f48fb1 100%)',          // pale pink
  'radial-gradient(ellipse at 30% 30%, #f8bbd0 0%, #f06292 55%, #c95b64 100%)',          // deep rose
  'radial-gradient(ellipse at 30% 30%, #fff5f7 0%, #f5cfd1 55%, #e8a4aa 100%)',          // white-pink
  'radial-gradient(ellipse at 30% 30%, #f5e6e8 0%, #d48c94 55%, #a84852 100%)',          // dusty rose
  'radial-gradient(ellipse at 30% 30%, #fce8ea 0%, #e8a4aa 55%, #d4757d 100%)',          // warm pink
] as const

type Petal = {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  opacity: number
  shape: (typeof SHAPES)[number]
  tone: (typeof TONES)[number]
  drift: number    // horizontal drift distance (px)
  sway: number     // rotation amplitude (deg)
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
        size: 8 + seededRandom(i + 100) * 12,
        duration: 10 + seededRandom(i + 200) * 10,
        delay: -seededRandom(i + 300) * 18,
        opacity: 0.45 + seededRandom(i + 400) * 0.4,
        shape: SHAPES[Math.floor(seededRandom(i + 500) * SHAPES.length)],
        tone: TONES[Math.floor(seededRandom(i + 600) * TONES.length)],
        drift: 30 + seededRandom(i + 700) * 50,
        sway: 360 + seededRandom(i + 800) * 720,
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
            borderRadius: p.shape,
            background: p.tone,
            // Each petal gets its own drift distance and rotation via custom properties
            // consumed by the keyframes in CSS
            '--petal-drift': `${p.drift}px`,
            '--petal-sway': `${p.sway}deg`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}

export default SakuraPetals
