'use client'

import React from 'react'

import { Image } from '@/Components/image'
import { useI18n } from '@/I18n'

import massageBed from '@/Assets/Images/tools/bed-landscape.jpg'
import massage from '@/Assets/Images/header.jpg'

import './header-background.styles.sass'

export const HeaderBackground: React.FC = () => {
  const { i18n } = useI18n()

  return (
    <Image
      src={massage}
      alt={i18n('layouts.header.background-alt')}
      className='header-background'
      width={1920}
      height={1080}
    />
  )
}
