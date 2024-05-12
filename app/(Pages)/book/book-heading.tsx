'use client'

import React from 'react'

import { useI18n } from '@/I18n'

import './book-heading.styles.sass'
import { Title } from '@/Components/title'

export const BookHeading: React.FC = () => {
  const { i18n } = useI18n()

  return (
    <div className='book-heading'>
      <Title>
        {i18n('domain.book.title')}
      </Title>

      <span>
        {i18n('domain.book.subtitle')}
      </span>
    </div>
  )
}
