'use client'

import React from 'react'

import { Header } from '@/(Pages)/header'
import { useI18n } from '@/I18n'

import './page.styles.sass'

const Home: React.FC = () => {
  const { i18n } = useI18n()

  return (
    <>
      <Header />

      <main className='home__main'>
        <h2 className='home__main__title'>
          {i18n('app.description')}
        </h2>
      </main>
    </>
  )
}

export default Home
