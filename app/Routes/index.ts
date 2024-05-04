import { MassageKey } from '@/Domain/massages'

const ROUTES_KEY = ['home', 'massages', 'about'] as const

export type RouteKey = typeof ROUTES_KEY[number]
export type RouteHref =  '/' | `/${RouteKey}`

type NestedRouteHref<T extends RouteKey, U extends string> = `/${T}/${U}`

const HOME_ROUTE: RouteHref = '/' as const
const MASSAGE_ROUTE: RouteHref = '/massages' as const
const ABOUT_ROUTE: RouteHref = '/about' as const

export const isRouteKey = (key: string): key is RouteKey => {
  return ROUTES_KEY.includes(key as RouteKey)
}

export const getMassageHref = <T extends MassageKey> (slug: T): NestedRouteHref<'massages', T> => {
  return `${MASSAGE_ROUTE}/${slug}`
}

export const ROUTES: Record<RouteKey, RouteHref> = {
  home: HOME_ROUTE,
  massages: MASSAGE_ROUTE,
  about: ABOUT_ROUTE
} as const
