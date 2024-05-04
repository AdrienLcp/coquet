import type { StaticImageData } from 'next/image'

import bedLandscape from '@/Assets/Images/bed-landscape.jpg'
import bedPortrait from '@/Assets/Images/bed-portrait.jpg'
import napKins from '@/Assets/Images/napkins.jpg'

export const MASSAGES_KEY = [
  'lymphatic-drainage',
  'maderotherapy-body',
  'maderotherapy-body-and-face',
  'maderotherapy-face',
  'scalp',
  'zone',
  'zone-mixed-methods'
] as const

export type MassageKey = typeof MASSAGES_KEY[number]

export const isMassageKey = (key: string): key is MassageKey => {
  return MASSAGES_KEY.includes(key as MassageKey)
}

export type Offer = {
  durationInMin: number
  priceInEuros: number
}

export type MassageInfo = {
  image: StaticImageData
  offers: Offer[]
}

export const massagesOffers: Record<MassageKey, MassageInfo> = {
  'scalp': {
    image: bedLandscape,
    offers: [
      {
        durationInMin: 30,
        priceInEuros: 45
      }
    ]
  },
  'maderotherapy-body': {
    image: bedPortrait,
    offers: [
      {
        durationInMin: 60,
        priceInEuros: 90
      },
      {
        durationInMin: 90,
        priceInEuros: 130
      },
      {
        durationInMin: 120,
        priceInEuros: 170
      }
    ],
  },
  'zone': {
    image: napKins,
    offers: [
      {
        durationInMin: 30,
        priceInEuros: 50
      }
    ],
  },
  'zone-mixed-methods': {
    image: bedLandscape,
    offers: [
      {
        durationInMin: 30,
        priceInEuros: 55
      }
    ],
  },
  'maderotherapy-face': {
    image: bedPortrait,
    offers: [
      {
        durationInMin: 45,
        priceInEuros: 55
      }
    ],
  },
  'maderotherapy-body-and-face': {
    image: napKins,
    offers: [
      {
        durationInMin: 105,
        priceInEuros: 140
      }
    ],
  },
  'lymphatic-drainage': {
    image: bedLandscape,
    offers: [
      {
        durationInMin: 120,
        priceInEuros: 170
      }
    ]
  }
}
