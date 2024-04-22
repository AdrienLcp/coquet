'use client'

import React from 'react'

import type { MassageInfo } from '@/(Pages)/massages/massages-list'
import { MassageOffersList } from '@/(Pages)/massages/massage-offers-list'
import { Article } from '@/Components/article'

import './massage-item.styles.sass'

type MassageItemProps = MassageInfo & {
  isReversed?: boolean
}

export const MassageItem: React.FC<MassageItemProps> = ({ title, description, offers, isReversed }) => (
  <Article
    isReversed={isReversed}
    className='massage-item'
  >
    <h3 className='massage-item__title'>
      {title}
    </h3>

    <p className='massage-item__description'>
      {description}
    </p>

    <MassageOffersList offers={offers} />
  </Article>
)
