'use client'

import React from 'react'

import { useI18n } from '@/I18n'

import './scalp.styles.sass'

export const Scalp: React.FC = () => {
  const { i18n } = useI18n()

  return (
    <div className='scalp'>
      scalp
    </div>
  )
}
