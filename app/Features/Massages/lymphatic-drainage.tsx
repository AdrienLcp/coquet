'use client'

import Link from 'next/link'
import React from 'react'

import { SOCIALS_NETWORKS } from '@/(Pages)/socials'
import { Image } from '@/Components/image'
import { Title } from '@/Components/title'
import { MassageWrapper } from '@/Features/Massages/massage-wrapper'
import { useI18n } from '@/I18n'

import beforeAfter1 from '@/Assets/Images/before-after/before-after-3.png'
import beforeAfter2 from '@/Assets/Images/before-after/before-after-4.png'

import './lymphatic-drainage.styles.sass'

export const LymphaticDrainage: React.FC = () => {
  const { i18n } = useI18n()

  const paragraphs = [
    i18n('domain.massages.lymphatic-drainage.paragraphs.1'),
    i18n('domain.massages.lymphatic-drainage.paragraphs.2'),
    i18n('domain.massages.lymphatic-drainage.paragraphs.3'),
    i18n('domain.massages.lymphatic-drainage.paragraphs.4'),
  ]

  const mores = [
    i18n('domain.massages.lymphatic-drainage.benefits.more.1'),
    i18n('domain.massages.lymphatic-drainage.benefits.more.2'),
    i18n('domain.massages.lymphatic-drainage.benefits.more.3')
  ]

  return (
    <MassageWrapper
      massageKey='lymphatic-drainage'
      title={i18n('domain.massages.lymphatic-drainage.title')}
    >
      <p>
        {i18n('domain.massages.lymphatic-drainage.the')}
        {' '}
        <b>{i18n('domain.massages.lymphatic-drainage.name')}</b>
        {' '}
        {i18n('domain.massages.lymphatic-drainage.description')}
        {' '}
        <b>{i18n('domain.massages.lymphatic-drainage.instant')}</b>
        {' '}
        {i18n('domain.massages.lymphatic-drainage.and')}
        {' '}
        <b>{i18n('domain.massages.lymphatic-drainage.visible')}</b>
      </p>

      <p>{i18n('domain.massages.lymphatic-drainage.paragraph')}</p>

      <Title tag='h5'>
        {i18n('domain.massages.lymphatic-drainage.subtitle')}
      </Title>

      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <p>
        {i18n('domain.massages.lymphatic-drainage.benefits.weight-loss')}
        {' '}
        <b>{i18n('domain.massages.lymphatic-drainage.benefits.fast')}</b>
        {' '}
        {i18n('domain.massages.lymphatic-drainage.benefits.and')}
        {' '}
        <b>{i18n('domain.massages.lymphatic-drainage.benefits.lasting')}</b>
        {' '}
        {i18n('domain.massages.lymphatic-drainage.benefits.good-lifestyle')}
      </p>

      <div>
        {i18n('domain.massages.lymphatic-drainage.benefits.more.title')}

        <ul>
          {mores.map((more, index) => (
            <li key={index}>• {more}</li>
          ))}
        </ul>
      </div>

      <p>{i18n('domain.massages.lymphatic-drainage.footer')}</p>

      <div className='lymphatic-drainage__box'>
        <div  className='lymphatic-drainage__box__images'>
          <Image
            alt={i18n('domain.massages.lymphatic-drainage.before-after')}
            className='lymphatic-drainage__box__images__item'
            src={beforeAfter1}
          />
          <Image
            alt={i18n('domain.massages.lymphatic-drainage.before-after')}
            className='lymphatic-drainage__box__images__item'
            src={beforeAfter2}
          />
        </div>

        <p>
          {i18n('domain.massages.lymphatic-drainage.more-photos')}
          {' '}

          <Link
            href={SOCIALS_NETWORKS.instagram.url}
            className='lymphatic-drainage__box__instagram-link'
          >
            {i18n('domain.massages.lymphatic-drainage.instagram')}
          </Link>
        </p>
      </div>

      <p>{i18n('domain.massages.lymphatic-drainage.wait')}</p>
      <p>{i18n('domain.massages.lymphatic-drainage.goal')}</p>
    </MassageWrapper>
  )
}
