import React from 'react'

import { HeaderBackground } from '@/(Pages)/header-background'
import { Navbar } from '@/(Pages)/navbar'
import { LogoTitle } from '@/Components/logo'
import { Motion } from '@/Components/motion'
import { LocaleSwitcher } from '@/I18n/locale-switcher'
import { ThemeSwitcher } from '@/Theme/theme-switcher'

import './header.styles.sass'

export const Header: React.FC = async () => (
  <header className='header'>
    <HeaderBackground />

    <Motion animation='scale' className='header__logo'>
      <LogoTitle direction='column' />
    </Motion>

    <Motion animation='fade-in'>
      <Navbar />
    </Motion>

    <Motion animation='fade-in' className='header__params-controls'>
      <LocaleSwitcher />

      <ThemeSwitcher />
    </Motion>
  </header>
)
