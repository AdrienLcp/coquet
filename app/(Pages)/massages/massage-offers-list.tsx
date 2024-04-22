'use client'

import React from 'react'

import { MassageOfferItem } from '@/(Pages)/massages/massage-offer-item'
import type { Offer } from '@/Domain/massages'

import './massage-offers-list.styles.sass'

type MassageOffersListProps = {
  offers: Offer[]
}

export const MassageOffersList: React.FC<MassageOffersListProps> = ({ offers }) => (
  <ul className='massage-offers-list'>
    {offers.map(offer => (
      <li
        key={crypto.randomUUID()}
        className='massage-offers-list__item'
      >
        <MassageOfferItem offer={offer} />
      </li>
    ))}
  </ul>
)
