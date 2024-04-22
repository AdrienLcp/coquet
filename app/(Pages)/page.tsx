'use client'

import React from 'react'

import { useI18n } from '@/I18n'

import './page.styles.sass'

const HomePage: React.FC = () => {
  const { i18n } = useI18n()

  return (
    <>
      {i18n('app.description')}
    </>
  )
}

export default HomePage
