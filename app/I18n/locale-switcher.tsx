'use client'

import React from 'react'

import { Button } from '@/Components/button'
import { Dropdown } from '@/Components/dropdown'
import type { Option } from '@/Components/option'
import { type Locale, LOCALES, useI18n, localesMap } from '@/I18n'

export const LocaleSwitcher: React.FC = () => {
  const { currentLocale, changeLocale } = useI18n()

  const localesOptions: Array<Option<Locale>> = LOCALES.map(locale => ({
    key: locale,
    label: localesMap[locale].label,
    isSelected: currentLocale === locale,
    onClick: () => changeLocale(locale)
  }))

  const selectedLocaleLabel = localesMap[currentLocale].label.slice(0, 2)

  return (
    <Dropdown options={localesOptions}>
      <Button size='icon'>
        {selectedLocaleLabel}
      </Button>
    </Dropdown>
  )
}
