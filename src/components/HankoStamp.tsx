type Props = {
  text: string
  className?: string
}

/**
 * Red Japanese seal (hanko) with vertical kanji text.
 * Use cases: section titles in Sumi-e pages (問合せ for contact, 開発者 for
 * projects, etc.). Pass `text` as a short kanji string; characters stack top
 * to bottom.
 */
function HankoStamp({ text, className = 'w-8 h-14' }: Props) {
  const chars = Array.from(text)

  return (
    <span
      aria-hidden="true"
      className={`relative inline-flex flex-col items-center justify-center bg-[#a64048] text-color-papel shadow-[0_2px_6px_-2px_rgba(166,64,72,0.6)] rounded-[1px] leading-none ${className}`}
    >
      {/* inner paper ring highlight for the carved seal look */}
      <span
        aria-hidden="true"
        className="absolute inset-1 border border-color-papel/40 rounded-[1px] pointer-events-none"
      />
      <span className="relative z-10 flex flex-col items-center justify-center gap-[0.15em] py-1">
        {chars.map((c, i) => (
          <span
            key={i}
            className="font-bold"
            style={{ fontSize: '0.9em', lineHeight: 1 }}
          >
            {c}
          </span>
        ))}
      </span>
    </span>
  )
}

export default HankoStamp
