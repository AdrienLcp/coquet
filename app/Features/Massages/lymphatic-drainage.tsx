'use client'

import React from 'react'

import { useI18n } from '@/I18n'

import './lymphatic-drainage.styles.sass'

export const LymphaticDrainage: React.FC = () => {
  const { i18n } = useI18n()

  return (
    <div className='lymphatic-drainage'>
      drainage lympathique
    </div>
  )
}
