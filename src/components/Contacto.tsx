import { useState, type FormEvent, type ReactNode, type SVGProps } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import SakuraIcon from './SakuraIcon'
import HankoStamp from './HankoStamp'
import BrushButton from './BrushButton'

// ---------- Brand icons (not available in lucide-react) ----------

function GitHubIcon({ className, strokeWidth: _sw, ...props }: SVGProps<SVGSVGElement> & { strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.268 2.742 1.021A9.582 9.582 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.021 2.747-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.679.917.679 1.852 0 1.335-.012 2.415-.012 2.741 0 .269.18.579.688.481C19.138 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon({ className, strokeWidth: _sw, ...props }: SVGProps<SVGSVGElement> & { strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

// ---------- Sub-components ----------

type IconComponent = React.ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number }>

type InfoRowProps = {
  icon: IconComponent
  label: string
  value: string
  href?: string
}

function InfoRow({ icon: Icon, label, value, href }: InfoRowProps) {
  const content = (
    <div className="flex items-center gap-5 group">
      <span className="flex-shrink-0 w-12 h-12 rounded-full bg-color-tinta flex items-center justify-center text-color-papel shadow-[0_4px_12px_-4px_rgba(26,26,26,0.5)] transition-transform duration-300 group-hover:scale-[1.05]">
        <Icon className="w-5 h-5" strokeWidth={1.8} />
      </span>
      <div className="flex flex-col gap-0.5">
        <span className="text-xs text-color-tinta font-semibold tracking-[0.3em]">
          {label}
        </span>
        <span className="text-sm text-color-tinta/75">{value}</span>
      </div>
    </div>
  )

  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="block hover:text-color-sakura transition-colors"
      >
        {content}
      </a>
    )
  }

  return content
}

type FieldProps = {
  id: string
  label: string
  children: ReactNode
}

function Field({ id, label, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-xs uppercase tracking-[0.3em] text-color-tinta font-semibold"
      >
        {label}
      </label>
      {children}
    </div>
  )
}

const inputClass =
  'w-full bg-transparent border border-color-tinta/25 rounded-sm px-4 py-3 text-sm text-color-tinta placeholder:text-color-tinta/40 focus:outline-none focus:border-color-tinta/70 transition-colors'

// ---------- Section ----------

function Contacto() {
  const { t } = useLanguage()
  const c = t.contacto

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleChange = (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Placeholder — wire up real submission (EmailJS, Formspree, custom API) later.
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 800)
  }

  return (
    <section
      id="contacto"
      className="relative bg-color-papel px-6 py-32 md:py-36 lg:py-40 md:px-12 lg:px-24 flex flex-col items-center overflow-hidden"
    >
      {/* Title + hanko */}
      <div className="relative flex items-start justify-center gap-4 md:gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-brush text-color-tinta text-6xl md:text-8xl lg:text-[9rem] uppercase leading-none tracking-wide text-center"
        >
          {c.title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mt-3 md:mt-6 lg:mt-10"
        >
          <HankoStamp
            text={c.stamp}
            className="w-7 h-12 md:w-8 md:h-14 lg:w-10 lg:h-16 text-[0.6rem] md:text-xs lg:text-sm"
          />
        </motion.div>
      </div>

      {/* Intro — broken into the same lines as the reference */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        className="max-w-2xl mt-10 text-center text-color-tinta/80 leading-relaxed flex flex-col"
      >
        {c.intro.map((line, i) => (
          <span key={i}>{line}</span>
        ))}
      </motion.div>

      {/* Sakura divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.6 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        className="flex items-center gap-4 md:gap-6 mt-10"
      >
        <span className="h-px w-16 md:w-24 bg-color-sakura/70" />
        <SakuraIcon className="w-4 h-4 text-color-sakura" />
        <span className="h-px w-16 md:w-24 bg-color-sakura/70" />
      </motion.div>

      {/* Info + Form */}
      <div className="w-full max-w-5xl mt-14 grid grid-cols-1 lg:grid-cols-[1fr_auto_1.2fr] gap-10 lg:gap-14 items-start">
        {/* Info column */}
        <div className="flex flex-col gap-8">
          <InfoRow icon={Mail}        {...c.info.email} />
          <InfoRow icon={MapPin}      {...c.info.location} />
          <InfoRow icon={LinkedInIcon} {...c.info.linkedin} />
          <InfoRow icon={GitHubIcon}   {...c.info.github} />
        </div>

        {/* Vertical divider with sakura */}
        <div
          aria-hidden="true"
          className="hidden lg:flex flex-col items-center self-stretch"
        >
          <span className="flex-1 w-px bg-color-sakura/40" />
          <SakuraIcon className="w-4 h-4 text-color-sakura my-2" />
          <span className="flex-1 w-px bg-color-sakura/40" />
        </div>

        {/* Horizontal divider for mobile/tablet */}
        <div
          aria-hidden="true"
          className="flex lg:hidden items-center gap-3 w-full"
        >
          <span className="flex-1 h-px bg-color-sakura/40" />
          <SakuraIcon className="w-3 h-3 text-color-sakura" />
          <span className="flex-1 h-px bg-color-sakura/40" />
        </div>

        {/* Form column */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field id="contact-name" label={c.form.nameLabel}>
              <input
                id="contact-name"
                type="text"
                value={form.name}
                onChange={handleChange('name')}
                placeholder={c.form.namePlaceholder}
                className={inputClass}
                required
              />
            </Field>
            <Field id="contact-email" label={c.form.emailLabel}>
              <input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={handleChange('email')}
                placeholder={c.form.emailPlaceholder}
                className={inputClass}
                required
              />
            </Field>
          </div>

          <Field id="contact-subject" label={c.form.subjectLabel}>
            <input
              id="contact-subject"
              type="text"
              value={form.subject}
              onChange={handleChange('subject')}
              placeholder={c.form.subjectPlaceholder}
              className={inputClass}
              required
            />
          </Field>

          <Field id="contact-message" label={c.form.messageLabel}>
            <div className="relative">
              <textarea
                id="contact-message"
                rows={6}
                value={form.message}
                onChange={handleChange('message')}
                placeholder={c.form.messagePlaceholder}
                className={`${inputClass} resize-none pr-10`}
                required
              />
              <Send
                aria-hidden="true"
                className="absolute bottom-3 right-3 w-4 h-4 text-color-sakura/70 pointer-events-none"
                strokeWidth={1.5}
              />
            </div>
          </Field>

          <div className="flex items-center justify-center lg:justify-start mt-2">
            <div className="relative inline-block">
              <BrushButton
                type="submit"
                disabled={sending}
                ariaLabel={c.form.submit}
              >
                {sending ? '...' : c.form.submit}
              </BrushButton>
              {/* Sakura accent floating on the top-right corner of the button */}
              <SakuraIcon
                aria-hidden="true"
                className="absolute -top-1 -right-2 w-4 h-4 text-color-sakura pointer-events-none drop-shadow-sm"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contacto
