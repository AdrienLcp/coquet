'use client'

import React from 'react'

import { Image } from '@/Components/image'
import { Section } from '@/Components/section'
import { useI18n } from '@/I18n'

import screen1 from '@/Assets/Images/opinions/opinion-1.jpg'
import screen2 from '@/Assets/Images/opinions/opinion-2.jpg'
import screen3 from '@/Assets/Images/opinions/opinion-3.jpg'
import screen4 from '@/Assets/Images/opinions/opinion-4.jpg'
import screen5 from '@/Assets/Images/opinions/opinion-5.jpg'

import './opinions.styles.sass'

const screens = [
  screen1,
  screen2,
  screen3,
  screen4,
  screen5
]

export const Opinions: React.FC = () => {
  const { i18n } = useI18n()

  return (
    <Section
      className='opinions'
      title={i18n('layouts.opinions.they-trusted-me')}
    >
      <ul className='opinions__list'>
        {screens.map((screen, index) => (
          <li key={index} className='opinions__list__item'>
            <Image
              className='opinions__list__item__image'
              src={screen}
              alt={i18n('layouts.opinions.image-alt')}
            />
          </li>
        ))}
      </ul>
    </Section>
  )
}
