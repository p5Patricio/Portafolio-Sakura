import { motion } from 'framer-motion'
import type { CSSProperties } from 'react'

type SplashShape = 'blob' | 'streak' | 'spray' | 'drip'

type Splash = {
  style: CSSProperties
  size: number
  rotate: number
  delay: number
  shape: SplashShape
  opacity: number
}

const splashes: Splash[] = [
  { style: { top: '-8%', left: '-10%' },   size: 90,  rotate: -18, delay: 0.0,  shape: 'blob',   opacity: 0.55 },
  { style: { top: '20%', right: '-12%' },  size: 110, rotate: 35,  delay: 0.15, shape: 'streak', opacity: 0.5  },
  { style: { bottom: '-8%', left: '5%' },  size: 70,  rotate: 12,  delay: 0.3,  shape: 'spray',  opacity: 0.6  },
  { style: { bottom: '15%', right: '8%' }, size: 95,  rotate: -22, delay: 0.45, shape: 'blob',   opacity: 0.45 },
  { style: { top: '48%', left: '-16%' },   size: 55,  rotate: 60,  delay: 0.6,  shape: 'drip',   opacity: 0.55 },
  { style: { top: '65%', right: '-6%' },   size: 45,  rotate: -5,  delay: 0.75, shape: 'spray',  opacity: 0.5  },
]

const TEXT_PAINT_DURATION = 2.3

function ShapePath({ shape }: { shape: SplashShape }) {
  const fill = '#1a1a1a'
  switch (shape) {
    case 'blob':
      return (
        <>
          <path
            d="M32 38 Q48 18 66 32 Q86 42 80 62 Q72 82 52 78 Q28 76 22 58 Q18 44 32 38 Z"
            fill={fill}
          />
          <circle cx="18" cy="28" r="3.5" fill={fill} />
          <circle cx="88" cy="22" r="2.5" fill={fill} />
          <circle cx="92" cy="68" r="4" fill={fill} />
          <circle cx="12" cy="78" r="2" fill={fill} />
          <circle cx="72" cy="92" r="2.5" fill={fill} />
        </>
      )
    case 'streak':
      return (
        <>
          <path
            d="M6 52 Q22 30 44 48 Q62 62 82 44 Q92 38 94 52 Q88 66 70 62 Q48 78 28 64 Q10 58 6 52 Z"
            fill={fill}
          />
          <circle cx="98" cy="40" r="2.5" fill={fill} />
          <circle cx="2" cy="60" r="2" fill={fill} />
        </>
      )
    case 'spray':
      return (
        <>
          <circle cx="50" cy="50" r="10" fill={fill} />
          <circle cx="28" cy="32" r="5" fill={fill} />
          <circle cx="72" cy="28" r="4" fill={fill} />
          <circle cx="82" cy="62" r="3.5" fill={fill} />
          <circle cx="22" cy="72" r="3" fill={fill} />
          <circle cx="62" cy="82" r="2.5" fill={fill} />
          <circle cx="90" cy="42" r="2" fill={fill} />
          <circle cx="14" cy="50" r="2" fill={fill} />
        </>
      )
    case 'drip':
      return (
        <>
          <path
            d="M42 10 Q58 14 56 32 Q54 52 50 72 Q46 88 50 96 Q54 88 50 72 Q46 52 44 32 Q42 18 42 10 Z"
            fill={fill}
          />
          <circle cx="50" cy="98" r="4" fill={fill} />
          <circle cx="36" cy="20" r="2" fill={fill} />
        </>
      )
  }
}

function InkSplashes() {
  return (
    <>
      {splashes.map((s, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 100 100"
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{
            ...s.style,
            width: s.size,
            height: s.size,
          }}
          initial={{ scale: 0, opacity: 0, rotate: s.rotate - 30 }}
          animate={{ scale: 1, opacity: s.opacity, rotate: s.rotate }}
          transition={{
            duration: 0.7,
            delay: TEXT_PAINT_DURATION + s.delay,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <ShapePath shape={s.shape} />
        </motion.svg>
      ))}
    </>
  )
}

export default InkSplashes
