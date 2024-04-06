'use client'

import React from 'react'

import Polyglot from './polyglot.js'

import type { DotNestedKeys } from '@/Helpers/strings.js'
import { getStoredItem, storeItem } from '@/Helpers/local-storage'
import { useProvidedContext } from '@/Helpers/contexts'

import frStrings from '@/I18n/Dictionaries/fr.json'
import enStrings from '@/I18n/Dictionaries/en.json'
import esStrings from '@/I18n/Dictionaries/es.json'


type Dictionary = typeof frStrings
type I18NStringPaths = DotNestedKeys<Dictionary>

export const LOCALES = ['FR', 'EN', 'ES'] as const

export type Locale = typeof LOCALES[number]

const DEFAULT_LOCALE: Locale = 'FR' as const

type LocaleInfo = {
  label: string
  dictionary: Dictionary
}

type LocalesMap = Record<Locale, LocaleInfo>

type I18nContextValue = {
  currentLocale: Locale
  locales: LocalesMap
  i18n: (key: I18NStringPaths, options?: Record<string, unknown>) => string
  changeLocale: (newLocale: Locale) => void
}

const I18nContext = React.createContext<I18nContextValue | null>(null)

export const I18nProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [currentLocale, setCurrentLocale] = React.useState<Locale>(DEFAULT_LOCALE)

  const locales: LocalesMap = {
    FR: {
      label: 'Français',
      dictionary: frStrings
    },
    EN: {
      label: 'English',
      dictionary: enStrings
    },
    ES: {
      label: 'Español',
      dictionary: esStrings
    }
  }

  const currentDictionary = locales[currentLocale].dictionary

  const currentPolyglot = new Polyglot({
    phrases: currentDictionary as unknown as Record<string, string>
  })

  const changeLocale = (newLocale: Locale) => {
    if (!LOCALES.includes(newLocale)) {
      return
    }

    setCurrentLocale(newLocale)
    storeItem('locale', newLocale)
  }

  React.useEffect(() => {
    const storedLocale = getStoredItem('locale')

    if (storedLocale !== undefined) {
      setCurrentLocale(storedLocale)
    }
  }, [])

  const i18n = (
    key: I18NStringPaths,
    options?: Record<string, unknown>
  ) => currentPolyglot.t(key, options)

  return (
    <I18nContext.Provider value={{ currentLocale, locales, i18n, changeLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => useProvidedContext(I18nContext, 'I18n')
