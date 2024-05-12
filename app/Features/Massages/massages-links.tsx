'use client'

import Link from 'next/link'
import React from 'react'

import { Button } from '@/Components/button'
import { Motion } from '@/Components/motion'
import type { MassageKey } from '@/Domain/massages'
import { useI18n } from '@/I18n'

import './massages-links.styles.sass'

type MassageLink = {
  key: MassageKey
  label: string
}

export const MassagesLinks: React.FC = () => {
  const { i18n } = useI18n()

  const links: MassageLink[] = [
    {
      key: 'madero-therapy',
      label: i18n('domain.massages.madero-therapy.label')
    },
    {
      key: 'lymphatic-drainage',
      label: i18n('domain.massages.lymphatic-drainage.label')
    },
    {
      key: 'scalp',
      label: i18n('domain.massages.scalp.label')
    }
  ]

  return (
    <Motion animation='fade-in'>
      <ul className='massages-links'>
        {links.map(({ key, label }) => (
          <li key={key}>
            <Link href={`#${key}`}>
              <Button variant='transparent'>
                {label}
              </Button>
            </Link>
          </li>  
        ))}
      </ul>
    </Motion>
  )
}
