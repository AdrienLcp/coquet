'use client'

import React from 'react'

import { Degrees } from '@/(Pages)/degrees'
import { Image } from '@/Components/image'
import { Section } from '@/Components/section'
import { useI18n } from '@/I18n'

import bed from '@/Assets/Images/tools/bed-landscape.jpg'
import marie from '@/Assets/Images/marie.jpg'

import './about.styles.sass'

export const About: React.FC = () => {
  const { i18n } = useI18n()

  return (
    <Section className='about'>
      <div className='about__box'>
        <Image
          alt={i18n('layouts.about.images-alt.marie')}
          className='about__box__image'
          src={marie}
        />

        <aside className='about__box__aside'>
          <p>
            {i18n('layouts.about.paragraphs.1')}
          </p>
          <p>
            {i18n('layouts.about.paragraphs.2')}
          </p>
          <p>
            {i18n('layouts.about.paragraphs.3')}
          </p>
        </aside>
      </div>

      <p>
        {i18n('layouts.about.paragraphs.4')}
      </p>

      <div className='about__box'>
        <aside className='about__box__aside'>
          <p>
            {i18n('layouts.about.paragraphs.5')}
          </p>
          <p>
            {i18n('layouts.about.paragraphs.6')}
          </p>
          <p>
            {i18n('layouts.about.paragraphs.7')}
          </p>
        </aside>

        <Image
          alt={i18n('layouts.about.images-alt.bed')}
          className='about__box__image'
          src={bed}
        />
      </div>

      <p>
        {i18n('layouts.about.paragraphs.8')}
        {' '}
        <span className='bold'>
          {i18n('layouts.about.paragraphs.bold')}
        </span>
      </p>

      <Degrees />
    </Section>
  )
}
