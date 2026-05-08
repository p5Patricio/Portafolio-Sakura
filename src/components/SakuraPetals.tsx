import { useMemo } from 'react'

const PETAL_COUNT = 24

// Border-radius variations that produce recognisably different petal silhouettes
const SHAPES = [
  '150% 0 150% 0',     // classic sakura
  '0 150% 0 150%',     // mirrored classic
  '100% 0 100% 100%',  // rounder, teardrop-like
  '0 100% 100% 100%',  // teardrop flipped
  '120% 40% 120% 40%', // softer, more oval
  '40% 120% 40% 120%', // softer mirrored
] as const

// Pink gradients matched to the background image sakura tone (#E8A4B8)
const TONES = [
  'radial-gradient(ellipse at 30% 30%, #fce8ec 0%, #f5cfd6 55%, #e8a4b8 100%)',   // pale → image tone
  'radial-gradient(ellipse at 30% 30%, #fff0f3 0%, #f8d0d8 55%, #e8a4b8 100%)',   // white-pink
  'radial-gradient(ellipse at 30% 30%, #f8d0d8 0%, #e8a4b8 55%, #d4809e 100%)',   // image tone → deeper
  'radial-gradient(ellipse at 30% 30%, #fce4ea 0%, #f0b8c8 55%, #e8a4b8 100%)',   // warm pink
  'radial-gradient(ellipse at 30% 30%, #f5e6e8 0%, #e8a4b8 55%, #c97b8f 100%)',   // dusty rose
  'radial-gradient(ellipse at 30% 30%, #fce8ea 0%, #f0c2d0 55%, #d4a4b0 100%)',   // soft pink
] as const

// Flower SVG — 5-petal blossom with centre (used as data-uri background)
function flowerSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <defs>
      <radialGradient id="f" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fce8ec"/>
        <stop offset="55%" stop-color="#e8a4b8"/>
        <stop offset="100%" stop-color="#c97b8f"/>
      </radialGradient>
    </defs>
    <g fill="url(#f)">
      <ellipse cx="16" cy="7" rx="4.5" ry="7.5"/>
      <ellipse cx="16" cy="7" rx="4.5" ry="7.5" transform="rotate(72 16 16)"/>
      <ellipse cx="16" cy="7" rx="4.5" ry="7.5" transform="rotate(144 16 16)"/>
      <ellipse cx="16" cy="7" rx="4.5" ry="7.5" transform="rotate(216 16 16)"/>
      <ellipse cx="16" cy="7" rx="4.5" ry="7.5" transform="rotate(288 16 16)"/>
    </g>
    <circle cx="16" cy="16" r="2.8" fill="#c95b64" opacity="0.85"/>
    <circle cx="16" cy="16" r="1.4" fill="#f5cfd6" opacity="0.9"/>
  </svg>`
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

const FLOWER_TONES = TONES.map(() => flowerSvg())

type Petal = {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  opacity: number
  shape: (typeof SHAPES)[number]
  tone: (typeof TONES)[number]
  flowerTone: string
  isFlower: boolean
  drift: number
  sway: number
}

// Deterministic pseudo-random generator so petal values are stable across renders
function seededRandom(seed: number) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}

function SakuraPetals() {
  const petals: Petal[] = useMemo(
    () =>
      Array.from({ length: PETAL_COUNT }, (_, i) => {
        const isFlower = seededRandom(i + 900) < 0.25 // 25% flowers
        return {
          id: i,
          left: seededRandom(i) * 100,
          size: isFlower
            ? 14 + seededRandom(i + 100) * 10   // flowers slightly larger
            : 8 + seededRandom(i + 100) * 12,
          duration: 10 + seededRandom(i + 200) * 10,
          delay: -seededRandom(i + 300) * 18,
          opacity: 0.45 + seededRandom(i + 400) * 0.4,
          shape: SHAPES[Math.floor(seededRandom(i + 500) * SHAPES.length)],
          tone: TONES[Math.floor(seededRandom(i + 600) * TONES.length)],
          flowerTone: FLOWER_TONES[Math.floor(seededRandom(i + 600) * FLOWER_TONES.length)],
          isFlower,
          drift: 30 + seededRandom(i + 700) * 50,
          sway: 360 + seededRandom(i + 800) * 720,
        }
      }),
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
            borderRadius: p.isFlower ? '50%' : p.shape,
            background: p.isFlower ? p.flowerTone : p.tone,
            backgroundSize: p.isFlower ? 'contain' : undefined,
            backgroundRepeat: p.isFlower ? 'no-repeat' : undefined,
            backgroundPosition: p.isFlower ? 'center' : undefined,
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
