'use client'

import React from 'react'

import type { Offer } from '@/Domain/massages'
import { useI18n } from '@/I18n'

import './massage-offer-item.styles.sass'

type MassageOfferItemProps = {
  offer: Offer
}

export const MassageOfferItem: React.FC<MassageOfferItemProps> = ({ offer }) => {
  const { i18n } = useI18n()

  return (
    <div className='massage-offer-item'>
      {offer.durationInMin} {i18n('domain.massages.minutes')}

      {offer.priceInEuros} {i18n('domain.massages.euros')}
    </div>
  )
}
