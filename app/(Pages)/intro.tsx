'use client'

import React from 'react'

import { Section } from '@/Components/section'
import { Title } from '@/Components/title'
import { useI18n } from '@/I18n'

import './intro.styles.sass'

export const Intro: React.FC = () => {
  const { i18n } = useI18n()

  const benefits = [
    i18n('layouts.intro.benefits.1'),
    i18n('layouts.intro.benefits.2'),
    i18n('layouts.intro.benefits.3'),
    i18n('layouts.intro.benefits.4')
  ]

  const catchPhrases = [
    i18n('layouts.intro.catch-phrases.1'),
    i18n('layouts.intro.catch-phrases.2'),
    i18n('layouts.intro.catch-phrases.3'),
    i18n('layouts.intro.catch-phrases.4'),
    i18n('layouts.intro.catch-phrases.5')
  ]

  return (
    <div className='intro'>
      <Title tag='h2'>
        {i18n('layouts.intro.super-title')}
      </Title>

      <Section className='intro__box'>
        <Title tag='h3'>
          {i18n('layouts.intro.title')}

          {' '}

          <span className='intro__box__sub-title'>
            {i18n('layouts.intro.to-home')}
          </span>
        </Title>

        <ul>
          {benefits.map((benefit, index) => (
            <li key={index}>
              ✅ {benefit}
            </li>
          ))}
        </ul>

        {catchPhrases.map((phrase, index) => (
          <p key={index}>
            {phrase}
          </p>
        ))}

        <span>
          {i18n('layouts.intro.footer')}
        </span>
      </Section>
    </div>
  )
}
