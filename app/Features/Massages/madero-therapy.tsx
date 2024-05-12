'use client'

import React from 'react'

import { Image } from '@/Components/image'
import { MassageWrapper } from '@/Features/Massages/massage-wrapper'
import { useI18n } from '@/I18n'

import bodyTool from '@/Assets/Images/tools/madero-therapy-body-tools.jpg'
import faceTool from '@/Assets/Images/tools/madero-therapy-face-tools.jpg'
import beforeAfter from '@/Assets/Images/before-after/before-after-2.png'

import './madero-therapy.styles.sass'

export const MaderoTherapie: React.FC = () => {
  const { i18n } = useI18n()

  const bodyBenefits = [
    i18n('domain.massages.madero-therapy.body.benefits.1'),
    i18n('domain.massages.madero-therapy.body.benefits.2'),
    i18n('domain.massages.madero-therapy.body.benefits.3'),
    i18n('domain.massages.madero-therapy.body.benefits.4'),
    i18n('domain.massages.madero-therapy.body.benefits.5'),
    i18n('domain.massages.madero-therapy.body.benefits.6')
  ]

  const faceBenefits = [
    i18n('domain.massages.madero-therapy.face.benefits.1'),
    i18n('domain.massages.madero-therapy.face.benefits.2'),
    i18n('domain.massages.madero-therapy.face.benefits.3'),
    i18n('domain.massages.madero-therapy.face.benefits.4'),
    i18n('domain.massages.madero-therapy.face.benefits.5'),
    i18n('domain.massages.madero-therapy.face.benefits.6')
  ]

  return (
    <MassageWrapper
      massageKey='madero-therapy'
      title={i18n('domain.massages.madero-therapy.title')}
    >
      <p>
        {i18n('domain.massages.madero-therapy.catch-phrase')}
        {' '}
        <i>{i18n('domain.massages.madero-therapy.question')}</i>
      </p>

      <p>
        {i18n('domain.massages.madero-therapy.the')}
        {' '}
        <b>{i18n('domain.massages.madero-therapy.label')}</b>
        {' '}
        {i18n('domain.massages.madero-therapy.description')}
      </p>

      <p>
        {i18n('domain.massages.madero-therapy.paragraph-1')}
      </p>

      <p>
        {i18n('domain.massages.madero-therapy.paragraph-2')}
      </p>

      <div>
        <b>{i18n('domain.massages.madero-therapy.body.title')}</b>

        <ul>
          {bodyBenefits.map((benefit, index) => (
            <li key={index}>
              • {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <b>{i18n('domain.massages.madero-therapy.face.title')}</b>

        <ul>
          {faceBenefits.map((benefit, index) => (
            <li key={index}>
              • {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className='madero-therapy__box'>
        <div className='madero-therapy__box__images-container'>
          <Image
            className='madero-therapy__box__images-container__item'
            src={bodyTool}
            alt={i18n('domain.massages.madero-therapy.tools')}
          />

          <Image
            className='madero-therapy__box__images-container__item'
            src={faceTool}
            alt={i18n('domain.massages.madero-therapy.tools')}
          />
        </div>

        <span>{i18n('domain.massages.madero-therapy.tools')}</span>
      </div>

      <div className='madero-therapy__box'>
        <div>
          <Image
            className='madero-therapy__box__images-container__item'
            src={beforeAfter}
            alt={i18n('domain.massages.madero-therapy.before-after')}
          />
        </div>

        <span>{i18n('domain.massages.madero-therapy.before-after')}</span>
      </div>
    </MassageWrapper>
  )
}
