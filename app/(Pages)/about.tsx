'use client'

import React from 'react'

import { Image } from '@/Components/image'
import { useI18n } from '@/I18n'

import bed from '@/Assets/Images/bed-landscape.jpg'
import marie from '@/Assets/Images/marie.jpg'

import './about.styles.sass'

export const About: React.FC = () => {
  const { i18n } = useI18n()

  const paragraphs = [
    i18n('layouts.about.paragraphs.1'),
    i18n('layouts.about.paragraphs.2'),
    i18n('layouts.about.paragraphs.3'),
    i18n('layouts.about.paragraphs.4'),
    i18n('layouts.about.paragraphs.5'),
    i18n('layouts.about.paragraphs.6'),
    i18n('layouts.about.paragraphs.7')
  ]

  return (
    <section className='about'>
      <Image
        src={marie}
        alt={i18n('layouts.about.images-alt.marie')}
      />

      {paragraphs.map((paragraph, index) => (
        <p key={index}>
          {paragraph}
        </p>
      ))}

      <p>
        {i18n('layouts.about.paragraphs.8')}
        {' '}
        <span className='bold'>
          {i18n('layouts.about.paragraphs.bold')}
        </span>
      </p>

      <Image
        src={bed}
        alt={i18n('layouts.about.images-alt.bed')}
      />
    </section>
  )
}
