export const MASSAGES_KEY = ['Madérothérapie', 'Drainage lymphatique', 'Cuir chevelu'] as const
export type MassageKey = typeof MASSAGES_KEY[number]

export const isMassageKey = (key?: string | null): key is MassageKey => {
  if (key == null) {
    return false
  }

  return MASSAGES_KEY.includes(key as MassageKey)
}
