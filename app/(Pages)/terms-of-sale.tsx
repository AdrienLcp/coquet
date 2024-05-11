'use client'

import React from 'react'

import { Title } from '@/Components/title'
import { useI18n } from '@/I18n'

import './terms-of-sale.styles.sass'

export const TermsOfSale: React.FC = () => {
  const { i18n } = useI18n()

  const paragraphs = [
    i18n('layouts.footer.terms-of-sale.paragraphs.1'),
    i18n('layouts.footer.terms-of-sale.paragraphs.2'),
    i18n('layouts.footer.terms-of-sale.paragraphs.3')
  ]

  return (
    <section className='terms-of-sale'>
      <Title tag='h6'>
        {i18n('layouts.footer.terms-of-sale.title')}
      </Title>

      {paragraphs.map((paragraph, index) => (
        <p key={index}>
          {paragraph}
        </p>
      ))}
    </section>
  )
}
