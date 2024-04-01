import type { Metadata } from 'next'
import React from 'react'

import { Container } from '@/container'
import { ThemeProvider } from '@/Theme'
import { I18nProvider } from '@/I18n'

import '@/Styles/globals.sass'

export const metadata: Metadata = {
  title: 'El Moment Coquet',
  description: 'Coiffure etc',
  twitter: {
  }
}

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <I18nProvider>
    <ThemeProvider>
      <Container>
        {children}
      </Container>
    </ThemeProvider>
  </I18nProvider>
)

export default RootLayout
