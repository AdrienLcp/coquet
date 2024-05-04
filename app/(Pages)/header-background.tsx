'use client'

import React from 'react'

import { Image } from '@/Components/image'
import { useI18n } from '@/I18n'

import massageBed from '@/Assets/Images/bed-landscape.jpg'

import './header-background.styles.sass'

export const HeaderBackground: React.FC = () => {
  const { i18n } = useI18n()

  return (
    <Image
      src={massageBed}
      alt={i18n('layouts.header.background-alt')}
      className='header-background'
    />
  )
}
