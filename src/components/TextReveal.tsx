import { motion } from 'framer-motion'
import svgRaw from '../assets/text-reveal.svg?raw'

const PATH_REGEX = /<path[^>]+d="([^"]+)"/g
const paths: string[] = []
let match: RegExpExecArray | null

while ((match = PATH_REGEX.exec(svgRaw)) !== null) {
  paths.push(match[1])
}

function TextReveal() {
  return (
    <svg
      viewBox="0 0 1542 854"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="w-full max-w-4xl"
      aria-label="Portafolio — texto con revelación animada"
    >
      <defs>
        <mask id="textMask" maskUnits="userSpaceOnUse" x="341" y="91" width="955" height="663">
          {paths.map((d, index) => (
            <motion.path
              key={index}
              d={d}
              fill="none"
              stroke="white"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.5,
                ease: 'easeInOut',
                delay: index * 0.3,
              }}
            />
          ))}
        </mask>
      </defs>
      <image
        href="/src/assets/textured-text.png"
        x="0"
        y="0"
        width="1542"
        height="854"
        mask="url(#textMask)"
      />
    </svg>
  )
}

export default TextReveal
