'use client'

import React from 'react'

import { Button } from '@/Components/button'
import { LocaleSwitcher } from '@/I18n/locale-switcher'
import { ThemeSwitcher } from '@/Theme/theme-switcher'

import './client-component.styles.sass'

export const ClientComponent: React.FC = () => {
  return (
    <div className='client-component'>

      <Button isDisabled variant='filled'>
        test
      </Button>

      <LocaleSwitcher />

      <ThemeSwitcher />

    </div>
  )
}
