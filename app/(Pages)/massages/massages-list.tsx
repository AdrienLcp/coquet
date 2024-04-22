'use client'

import React from 'react'

import { MassageItem } from '@/(Pages)/massages/massage-item'
import { MASSAGES, type Massage, massagesOffers, type Offer } from '@/Domain/massages'
import { useI18n } from '@/I18n'

import './massages-list.styles.sass'

export type MassageInfo = {
  key: Massage
  slug: string
  title: string
  description: string
  offers: Offer[]
}

export const MassagesList: React.FC = () => {
  const { i18n } = useI18n()

  const massages: MassageInfo[] = MASSAGES.map(key => ({
    key,
    slug: i18n(`domain.massages.${key}.slug`),
    title: i18n(`domain.massages.${key}.title`),
    description: i18n(`domain.massages.${key}.description`),
    offers: massagesOffers[key]
  }))

  return (
    <ul className='massages-list'>
      {massages.map((massage, index) => (
        <li key={massage.key}>
          <MassageItem
            key={massage.key}
            slug={massage.slug}
            title={massage.title}
            description={massage.description}
            offers={massage.offers}
            isReversed={index % 2 === 0}
          />
        </li>
      ))}
    </ul>
  )
}
