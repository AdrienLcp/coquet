'use client'

import React from 'react'

import { Dropdown, type Option } from '@/Components/dropdown'
import { type Locale, LOCALES, useI18n } from '@/I18n'
import { Button } from '@/Components/button'

export const LocaleSwitcher: React.FC = () => {
  const { currentLocale, locales, changeLocale } = useI18n()

  const localesOptions: Array<Option<Locale>> = LOCALES.map(locale => ({
    key: locale,
    label: locales[locale].label,
    isSelected: currentLocale === locale,
    onClick: () => changeLocale(locale)
  }))

  const selectedLocaleLabel = locales[currentLocale].label.slice(0, 2)

  return (
    <Dropdown options={localesOptions}>
      <Button size='icon'>
        {selectedLocaleLabel}
      </Button>
    </Dropdown>
  )
}
