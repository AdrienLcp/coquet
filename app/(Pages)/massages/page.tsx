'use client'

import React from 'react'

import { MassagesList } from '@/(Pages)/massages/massages-list'
import { useI18n } from '@/I18n'

const MassagesPage: React.FC = () => {
  const { i18n } = useI18n()

  return (
    <>
      <h1 className='page-title'>
        {i18n('domain.massages.listPageTitle')}
      </h1>

      <MassagesList />
    </>
  )
}

export default MassagesPage
