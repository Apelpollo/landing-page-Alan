"use client"

import { useLanguage } from '@/contexts/LanguageContext'
import { Languages } from 'lucide-react'

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 transition duration-150 rounded-full hover:bg-purple/20 text-white"
      title={`Cambiar a ${language === 'es' ? 'English' : 'Español'}`}
    >
      <Languages size={20} strokeWidth={1} />
      <span className="text-sm font-medium">
        {language === 'es' ? 'EN' : 'ES'}
      </span>
    </button>
  )
}

export default LanguageToggle
