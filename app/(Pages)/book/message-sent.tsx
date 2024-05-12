'use client'

import React from 'react'

import { Title } from '@/Components/title'
import { useI18n } from '@/I18n'

export const MessageSent: React.FC = () => {
  const { i18n } = useI18n()

  return (
    <>
      <Title>
        {i18n('domain.book.message-sent.title')}
      </Title>

      <p>
        {i18n('domain.book.message-sent.description')}
      </p>
    </>
  )
}
