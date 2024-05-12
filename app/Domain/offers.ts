import { type MassageKey, isMassageKey } from '@/Domain/massages'

export const OFFERS_KEY = [
  'Cuir chevelu + soin personnalisé - 30 minutes (45€)',
  'Drainage lymphatique méthode brésilienne - 75 minutes (110€)',
  'Madérothérapie corps - 60 minutes (90€)',
  'Madérothérapie corps - 90 minutes (130€)',
  'Madérothérapie corps - 120 minutes (170€)',
  'Madérothérapie visage - 45 minutes (55€)',
  'Madérothérapie visage + corps - 105 minutes (140€)',
  'Madérothérapie + Drainage lymphatique - 120 minutes (170€)',
  'Par zone(s) - 30 minutes (50€)',
  'Par zone(s) méthodes mixtes - 30 minutes (55€)'
] as const

export type OfferKey = typeof OFFERS_KEY[number]

export const isOfferKey = (value: string): value is OfferKey => {
  return OFFERS_KEY.includes(value as OfferKey)
}

export const getDefaultOfferKeyForMassageKey = (massageKey: MassageKey): OfferKey | undefined => {
  if (!isMassageKey(massageKey)) {
    return undefined
  }

  switch (massageKey) {
    case 'Cuir chevelu':
      return 'Cuir chevelu + soin personnalisé - 30 minutes (45€)'
    case 'Drainage lymphatique':
      return 'Drainage lymphatique méthode brésilienne - 75 minutes (110€)'
    case 'Madérothérapie':
      return 'Madérothérapie corps - 60 minutes (90€)'
    default:
      return undefined
  }
}
