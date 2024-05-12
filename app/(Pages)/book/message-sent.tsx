'use client'

import { CircleCheckBigIcon } from 'lucide-react'
import React from 'react'

import { Title } from '@/Components/title'
import { useI18n } from '@/I18n'

import './message-sent.styles.sass'

export const MessageSent: React.FC = () => {
  const { i18n } = useI18n()

  return (
    <div className='message-sent'>
      <CircleCheckBigIcon size={64} color='green' />

      <Title>
        {i18n('domain.book.message-sent.title')}
      </Title>

      <p>
        {i18n('domain.book.message-sent.description')}
      </p>
    </div>
  )
}
