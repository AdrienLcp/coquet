import type { Locale } from '@/I18n'
import type { Theme } from '@/Theme'

type LocalStorage = {
  locale: Locale
  theme: Theme
}

type LocaleStorageKey = keyof LocalStorage

const LOCAL_STORAGE_KEYS: LocaleStorageKey[] = ['locale', 'theme'] as const

export const getStoredItem = <T extends LocaleStorageKey> (key: T): LocalStorage[T] | undefined => {
  const value = window.localStorage.getItem(key)

  if (value !== null) {
    try {
      return value === 'undefined' ? undefined : JSON.parse(value ?? '')
    } catch {
      console.warn(`Parsing error for key "${key}"`)
      return undefined
    }
  }
}

export const storeItem = <T extends LocaleStorageKey> (key: T, value: LocalStorage[T]) => {
  if (LOCAL_STORAGE_KEYS.includes(key)) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
}

export const removeStoredItem = (key: LocaleStorageKey) => {
  window.localStorage.removeItem(key)
}

export const clearStore = () => { window.localStorage.clear() }
