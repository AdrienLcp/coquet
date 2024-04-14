'use client'

import Image, { type StaticImageData } from 'next/image'
import React from 'react'

import { useI18n } from '@/I18n'

import logoSmall from '@/Assets/Logo/logo-small.png'
import logoMedium from '@/Assets/Logo/logo-medium.png'
import logoLarge from '@/Assets/Logo/logo-large.png'
import logoXLarge from '@/Assets/Logo/logo-x-large.png'

import './logo.styles.sass'

type LogoSize = 'small' | 'medium' | 'large' | 'xLarge'

export type LogoProps = {
  size?: LogoSize
}

type ImageInfo = {
  url: StaticImageData
  size: number
}

const logoMap: Record<LogoSize, ImageInfo> = {
  small: { url: logoSmall, size: 24 },
  medium: { url: logoMedium, size: 48 },
  large: { url: logoLarge, size: 96 },
  xLarge: { url: logoXLarge, size: 144 }
}

export const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
  const { i18n } = useI18n()
  const currentLogo = logoMap[size]

  return (
    <Image
      src={currentLogo.url}
      width={currentLogo.size}
      height={currentLogo.size}
      className={`logo ${size}`}
      placeholder='blur'
      blurDataURL={currentLogo.url.blurDataURL}
      alt={i18n('app.logoAlt')}
      loading='lazy'
    />
  )
}

type LogoTitleProps = LogoProps & {
  direction?: 'row' | 'column'
}

export const LogoTitle: React.FC<LogoTitleProps> = ({ size = 'medium', direction = 'row' }) => {
  const { i18n } = useI18n()

  return (
    <section className={`logo-title ${size} ${direction}`}>
      <Logo size={size} />

      <h1>{i18n('app.name')}</h1>
    </section>
  )
}
