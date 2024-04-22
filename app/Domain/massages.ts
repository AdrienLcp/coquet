export const MASSAGES = [
  'lymphatic-drainage',
  'maderotherapy-body',
  'maderotherapy-body-and-face',
  'maderotherapy-face',
  'scalp',
  'zone',
  'zone-mixed-methods'
] as const

export type Massage = typeof MASSAGES[number]
export type Offer = {
  durationInMin: number
  priceInEuros: number
}

export const massagesOffers: Record<Massage, Offer[]> = {
  'scalp': [
    {
      durationInMin: 30,
      priceInEuros: 45
    }
  ],
  'maderotherapy-body': [
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
  'zone': [
    {
      durationInMin: 30,
      priceInEuros: 50
    }
  ],
  'zone-mixed-methods': [
    {
      durationInMin: 30,
      priceInEuros: 55
    }
  ],
  'maderotherapy-face': [
    {
      durationInMin: 45,
      priceInEuros: 55
    }
  ],
  'maderotherapy-body-and-face': [
    {
      durationInMin: 105,
      priceInEuros: 140
    }
  ],
  'lymphatic-drainage': [
    {
      durationInMin: 120,
      priceInEuros: 170
    }
  ]
}
