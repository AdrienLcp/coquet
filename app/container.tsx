'use client'

import React from 'react'
import { K2D, MuseoModerno } from 'next/font/google'

import { classNames } from '@/Helpers/styles'
import { useI18n } from '@/I18n'
import { useTheme } from '@/Theme'

const titleFont = MuseoModerno({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-title'
})

const baseFont = K2D({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-base'
})

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isDarkModeActive } = useTheme()
  const { currentLocale } = useI18n()

  return (
    <html lang={currentLocale.toLowerCase()}>
      <body className={classNames(
        !isDarkModeActive && 'light',
        titleFont.variable,
        baseFont.variable
      )}>
        {children}
      </body>
    </html>
  )
}
