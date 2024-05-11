import type { StaticImageData } from 'next/image'

import bedLandscape from '@/Assets/Images/bed-landscape.jpg'
import bedPortrait from '@/Assets/Images/bed-portrait.jpg'
import napKins from '@/Assets/Images/napkins.jpg'

// export const MASSAGES_KEY = [
//   'lymphatic-drainage',
//   'maderotherapy-and-lymphatic-drainage',
//   'maderotherapy-body',
//   'maderotherapy-body-and-face',
//   'maderotherapy-face',
//   'scalp',
//   'zone',
//   'zone-mixed-methods'
// ] as const

// export type MassageKey = typeof MASSAGES_KEY[number]

// export const isMassageKey = (key: string): key is MassageKey => {
//   return MASSAGES_KEY.includes(key as MassageKey)
// }

export type MassageKey = 'madero-therapy' | 'lymphatic-drainage' | 'scalp'

export type Offer = {
  durationInMin: number
  priceInEuros: number
}

export type MassageInfo = {
  image: StaticImageData
  offers: Offer[]
  order: number
}

// export const massagesOffers: Record<MassageKey, MassageInfo> = {
//   'scalp': {
//     order: 1,
//     image: bedLandscape,
//     offers: [
//       {
//         durationInMin: 30,
//         priceInEuros: 45
//       }
//     ]
//   },
//   'lymphatic-drainage': {
//     order: 2,
//     image: bedLandscape,
//     offers: [
//       {
//         durationInMin: 75,
//         priceInEuros: 110
//       }
//     ]
//   },
//   'maderotherapy-body': {
//     order: 3,
//     image: bedPortrait,
//     offers: [
//       {
//         durationInMin: 60,
//         priceInEuros: 90
//       },
//       {
//         durationInMin: 90,
//         priceInEuros: 130
//       },
//       {
//         durationInMin: 120,
//         priceInEuros: 170
//       }
//     ],
//   },
//   'zone': {
//     order: 4,
//     image: napKins,
//     offers: [
//       {
//         durationInMin: 30,
//         priceInEuros: 50
//       }
//     ],
//   },
//   'zone-mixed-methods': {
//     order: 5,
//     image: bedLandscape,
//     offers: [
//       {
//         durationInMin: 30,
//         priceInEuros: 55
//       }
//     ],
//   },
//   'maderotherapy-face': {
//     order: 6,
//     image: bedPortrait,
//     offers: [
//       {
//         durationInMin: 45,
//         priceInEuros: 55
//       }
//     ],
//   },
//   'maderotherapy-body-and-face': {
//     order: 7,
//     image: napKins,
//     offers: [
//       {
//         durationInMin: 105,
//         priceInEuros: 140
//       }
//     ],
//   },
//   'maderotherapy-and-lymphatic-drainage': {
//     order: 8,
//     image: bedLandscape,
//     offers: [
//       {
//         durationInMin: 120,
//         priceInEuros: 170
//       }
//     ],
//   }
// }
