import { createContext, useContext, useState, type ReactNode } from 'react'
import { translations, type Lang } from '../data/translations'

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  toggleLang: () => void
  t: (typeof translations)['es']
}

const LanguageContext = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'))

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggleLang, t: translations[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
