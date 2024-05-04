'use client'

import Link from 'next/link'
import React from 'react'

import { Button } from '@/Components/button'
import { useI18n } from '@/I18n'

const NotFound: React.FC = () => {
  const { i18n } = useI18n()

  return (
    <div className='not-found'>
      <h2 className='not-found__title'>
        {i18n('pages.not-found.title')}
      </h2>

      <Link href='/'>
        <Button>
          {i18n('pages.not-found.go-home')}
        </Button>
      </Link>
    </div>
  )
}

export default NotFound
