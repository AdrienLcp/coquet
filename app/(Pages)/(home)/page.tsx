import React from 'react'
import type { Metadata } from 'next'

import { LocaleSwitcher } from '@/I18n/locale-switcher'
import { ThemeSwitcher } from '@/Theme/theme-switcher'

export const metadata: Metadata = {
  title: 'El Moment Coquet',
  description: 'Coiffure etc',
  twitter: {
  }
}

const Home: React.FC = () => (
  <>
    <main>
      <LocaleSwitcher />
      <ThemeSwitcher />
    </main>
  </>
)

export default Home
