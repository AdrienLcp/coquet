'use client'

import React from 'react'

import { Dropdown, type Option } from '@/Components/dropdown'
import { type Locale, LOCALES, useI18n } from '@/I18n'

export const LocaleSwitcher: React.FC = () => {
  const { currentLocale, locales, changeLocale } = useI18n()

  const localesOptions: Array<Option<Locale>> = LOCALES.map(locale => ({
    key: locale,
    label: locales[locale].label,
    isSelected: currentLocale === locale,
    onClick: () => changeLocale(locale)
  }))

  return (
    <Dropdown options={localesOptions}>
      {currentLocale}
    </Dropdown>
  )
}
