'use client'

import React from 'react'

import { MassageCard } from '@/(Pages)/massages/massage-card'
import { MASSAGES_KEY, type MassageKey, massagesOffers, type MassageInfo } from '@/Domain/massages'
import { getSortedObjectsByKey } from '@/Helpers/sort'
import { useI18n } from '@/I18n'

import './massages-list.styles.sass'

export type MassageDisplay = MassageInfo & {
  key: MassageKey
  title: string
  description: string
}

export const MassagesList: React.FC = () => {
  const { i18n } = useI18n()

  const massages: MassageDisplay[] = MASSAGES_KEY.map(key => ({
    key,
    title: i18n(`domain.massages.${key}.title`),
    description: i18n(`domain.massages.${key}.description`),
    order: massagesOffers[key].order,
    image: massagesOffers[key].image,
    offers: massagesOffers[key].offers
  }))

  const sortedMassages = getSortedObjectsByKey(massages, 'order')

  return (
    <ul className='massages-list'>
      {sortedMassages.map((massage, index) => (
        <li key={massage.key}>
          <MassageCard
            massage={massage}
            isReversed={index % 2 === 0}
          />
        </li>
      ))}
    </ul>
  )
}
