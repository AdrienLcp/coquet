'use client'

import { BookMarkedIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { Button } from '@/Components/button'
import { Motion } from '@/Components/motion'
import { useI18n } from '@/I18n'
import { ROUTES } from '@/Routes'

import './book-link.styles.sass'

export const BookLink: React.FC = () => {
  const { i18n } = useI18n()

  return (
    <Motion animation='fade-in'>
      <Link
        className='book-link'
        href={ROUTES.book}
      >
        <Button size='icon'>
          <BookMarkedIcon />
        </Button>

        {i18n('layouts.book-link.label')}
      </Link>
    </Motion>
  )
}
