import React from 'react'

import { Container } from '@/container'
import { ThemeProvider } from '@/Theme'
import { I18nProvider } from '@/I18n'

import '@/Styles/globals.sass'

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
