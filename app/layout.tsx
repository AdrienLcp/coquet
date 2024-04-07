import type { Metadata } from 'next'
import React from 'react'

import { Container } from '@/(Pages)/container'
import { Footer } from '@/(Pages)/footer'
import { Header } from '@/(Pages)/header'
import { COMMON_METADATA } from '@/Config/metadata'
import { I18nProvider } from '@/I18n'
import { ThemeProvider } from '@/Theme'

import '@/Styles/globals.sass'

export const metadata: Metadata = { ...COMMON_METADATA }

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <I18nProvider>
    <ThemeProvider>
      <Container>
        <Header />

        <main>
          {children}
        </main>

        <Footer />
      </Container>
    </ThemeProvider>
  </I18nProvider>
)

export default RootLayout
