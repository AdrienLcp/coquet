'use client'

import Image, { StaticImageData } from 'next/image'
import React from 'react'

import { useI18n } from '@/I18n'

import logoLarge from '@/Assets/Logo/logo-large.png'
import logoMedium from '@/Assets/Logo/logo-medium.png'
import logoSmall from '@/Assets/Logo/logo-small.png'

import './logo.styles.sass'

type LogoSize = 'large' | 'medium' | 'small'

type LogoProps = {
  size?: LogoSize
}

type ImageInfo = {
  url: StaticImageData
  size: number
}

const logoMap: Record<LogoSize, ImageInfo> = {
  large: { url: logoLarge, size: 96 },
  medium: { url: logoMedium, size: 48 },
  small: { url: logoSmall, size: 24 }
}

export const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
  const { i18n } = useI18n()

  return (
    <Image
      src={logoMap[size].url}
      width={logoMap[size].size}
      height={logoMap[size].size}
      className={`logo ${size}`}
      alt={i18n('app.logoAlt')}
    />
  )
}

export const LogoTitle: React.FC<LogoProps> = ({ size = 'medium' }) => {
  const { i18n } = useI18n()

  return (
    <div className={`logo-title ${size}`}>
      <Logo size={size} />

      <h1>
        {i18n('app.name')}
      </h1>
    </div>
  )
}
