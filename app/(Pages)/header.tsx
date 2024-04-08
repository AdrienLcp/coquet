import React from 'react'

import { LogoTitle } from '@/Components/logo'
import { Motion } from '@/Components/motion'
import { LocaleSwitcher } from '@/I18n/locale-switcher'
import { ThemeSwitcher } from '@/Theme/theme-switcher'

import './header.styles.sass'

export const Header: React.FC = () => (
  <header className='header'>
    <Motion animation='scale'>
      <LogoTitle direction='column' />
    </Motion>

    <div className='header__params-controls'>
      <LocaleSwitcher />

      <ThemeSwitcher />
    </div>
  </header>
)
