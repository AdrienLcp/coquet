'use client'

import { MoonIcon, ScreenShareIcon, SunIcon } from 'lucide-react'
import React from 'react'

import { Button } from '@/Components/button'
import { Dropdown, type Option } from '@/Components/dropdown'
import { useI18n } from '@/I18n'
import { type Theme, THEMES, useTheme } from '@/Theme'

type ThemeInfos = {
  label: Option<Theme>['label']
  Icon: Option<Theme>['Icon']
}

export const ThemeSwitcher: React.FC = () => {
  const { isDarkModeActive, currentTheme, changeTheme } = useTheme()
  const { i18n } = useI18n()

  const themesMap: Record<Theme, ThemeInfos> = {
    System: {
      label: i18n('features.theme.system'),
      Icon: <ScreenShareIcon size={20} />
    },
    Light: {
      label: i18n('features.theme.light'),
      Icon: <SunIcon size={20} />
    },
    Dark: {
      label: i18n('features.theme.dark'),
      Icon: <MoonIcon size={20} />
    }
  }

  const themeOptions: Array<Option<Theme>> = THEMES.map(theme => ({
    key: theme,
    label: themesMap[theme].label,
    Icon: themesMap[theme].Icon,
    isSelected: currentTheme === theme,
    onClick: () => changeTheme(theme)
  }))

  return (
    <Dropdown options={themeOptions}>
      <Button size='icon'>
        {isDarkModeActive
          ? <MoonIcon size={15} />
          : <SunIcon size={15} />
        }        
      </Button>
    </Dropdown>
  )
}
