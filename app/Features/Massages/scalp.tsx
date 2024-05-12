'use client'

import React from 'react'

import { MassageWrapper } from '@/Features/Massages/massage-wrapper'
import { useI18n } from '@/I18n'

import './scalp.styles.sass'

export const Scalp: React.FC = () => {
  const { i18n } = useI18n()

  const benefits = [
    i18n('domain.massages.scalp.ideal-for.1'),
    i18n('domain.massages.scalp.ideal-for.2'),
    i18n('domain.massages.scalp.ideal-for.3')
  ]

  const products = [
    i18n('domain.massages.scalp.products.1'),
    i18n('domain.massages.scalp.products.2'),
    i18n('domain.massages.scalp.products.3')
  ]

  return (
    <MassageWrapper
      massageKey='scalp'
      title={i18n('domain.massages.scalp.title')}
    >
      <p>
        {i18n('domain.massages.scalp.bio-products')}
        {' '}
        <b>{i18n('domain.massages.scalp.diagnosis')}</b>
        {' '}
        {i18n('domain.massages.scalp.since')}
      </p>

      <p>
        {i18n('domain.massages.scalp.benefit')}
        {' '}
        <b>{i18n('domain.massages.scalp.custom')}</b>
        {' '}
        {i18n('domain.massages.scalp.and')}
        {' '}
        <b>{i18n('domain.massages.scalp.relax')}</b>
        {' '}
        {i18n('domain.massages.scalp.with')}
      </p>

      <p>
        {i18n('domain.massages.scalp.just-sit')}
      </p>

      <div>
        {i18n('domain.massages.scalp.ideal-for.title')}

        <ul>
          {benefits.map((benefit, index) => (
            <li key={index}>• {benefit}</li>
          ))}
        </ul>

        {i18n('domain.massages.scalp.ideal-for.footer')}
      </div>

      <div>
        {i18n('domain.massages.scalp.products.title')}

        <ul>
          {products.map((product, index) => (
            <li key={index}>• {product}</li>
          ))}
        </ul>
      </div>

      <p>{i18n('domain.massages.scalp.footer')}</p>
    </MassageWrapper>
  )
}
