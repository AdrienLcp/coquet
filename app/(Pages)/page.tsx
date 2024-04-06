'use client'

import React from 'react'

import { useI18n } from '@/I18n'

import './page.styles.sass'

const Home: React.FC = () => {
  const { i18n } = useI18n()

  return (
    <>
      <div className='home__main'>
        <h2 className='home__main__title'>
          {i18n('app.description')}
        </h2>
      </div>
    </>
  )
}

export default Home
