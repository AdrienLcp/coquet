'use client'

import React from 'react'

import { MassageOffer } from '@/(Pages)/massages/massage-offer'
import type { Offer } from '@/Domain/massages'
import { classNames } from '@/Helpers/styles'

import './massage-offers-list.styles.sass'

type MassageOffersListProps = {
  offers: Offer[]
  isReversed?: boolean
}

export const MassageOffersList: React.FC<MassageOffersListProps> = ({ isReversed, offers }) => (
  <ul className={classNames('massage-offers-list', isReversed && 'reverse')}>
    {offers.map(offer => (
      <li key={crypto.randomUUID()}>
        <MassageOffer offer={offer} />
      </li>
    ))}
  </ul>
)
