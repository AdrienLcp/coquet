'use client'

import React from 'react'

import { Tag } from '@/Components/tag'
import type { Offer } from '@/Domain/massages'
import { useI18n } from '@/I18n'

import './massage-offer.styles.sass'

type MassageOfferProps = {
  offer: Offer
}

export const MassageOffer: React.FC<MassageOfferProps> = ({ offer }) => {
  const { i18n } = useI18n()

  return (
    <div className='massage-offer'>
      <span>
        {offer.durationInMin} {i18n('domain.massages.minutes')}
      </span>

      <Tag>
        {offer.priceInEuros} {i18n('domain.massages.euros')}
      </Tag>
    </div>
  )
}
