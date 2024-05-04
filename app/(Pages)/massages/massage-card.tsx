'use client'

import Link from 'next/link'
import React from 'react'

import type { MassageDisplay } from '@/(Pages)/massages/massages-list'
import { MassageOffersList } from '@/(Pages)/massages/massage-offers-list'
import { Card } from '@/Components/card'
import { Image } from '@/Components/image'
import { getMassageHref } from '@/Routes'

import './massage-card.styles.sass'

type MassageCardProps = {
  massage: MassageDisplay
  isReversed?: boolean
}

export const MassageCard: React.FC<MassageCardProps> = ({ massage, isReversed }) => (
  <Link href={getMassageHref(massage.key)} className='massage-card__wrapper'>
    <Card
      isReversed={isReversed}
      className='massage-card'
    >
      <Image
        className='massage-card__image'
        src={massage.image}
        alt={massage.title}
      />

      <div className='massage-card__details'>
        <h2 className='massage-card__details__title'>
          {massage.title}
        </h2>

        <p className='massage-card__details__description'>
          {massage.description}
        </p>

        <MassageOffersList
          isReversed={isReversed}
          offers={massage.offers}
        />      
      </div>
    </Card>
  </Link>
)
