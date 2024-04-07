'use client'

import React from 'react'

import { FacebookIcon } from '@/Assets/Icons/facebook'
import { InstagramIcon } from '@/Assets/Icons/instagram'
import { TikTokIcon } from '@/Assets/Icons/tik-tok'
import { useI18n } from '@/I18n'

import './page.styles.sass'

const Home: React.FC = () => {
  const { i18n } = useI18n()

  return (
    <div className='home'>
      <h2 className='home__title'>
        {i18n('app.description')}
      </h2>
      
      <FacebookIcon />
      <TikTokIcon />
      <InstagramIcon />
    </div>
  )
}

export default Home
