import { MassageKey } from '@/Domain/massages'

const ROUTES_KEY = ['home', 'book'] as const

export type RouteKey = typeof ROUTES_KEY[number]
export type RouteHref =  '/' | `/${RouteKey}`
type SearchParam = 'massage'

type RouteWithParam <T extends RouteKey, U extends SearchParam, V extends string> = `/${T}?${U}=${V}`

const HOME_ROUTE: RouteHref = '/' as const
const BOOK_ROUTE: RouteHref = '/book' as const

export const MASSAGE_SEARCH_PARAM: SearchParam = 'massage' as const

export const isRouteKey = (key: string): key is RouteKey => {
  return ROUTES_KEY.includes(key as RouteKey)
}

export const getBookWithMassageHref = <T extends MassageKey> (slug: T): RouteWithParam<'book', 'massage', T> => {
  return `${BOOK_ROUTE}?${MASSAGE_SEARCH_PARAM}=${slug}`
}

export const ROUTES: Record<RouteKey, RouteHref> = {
  home: HOME_ROUTE,
  book: BOOK_ROUTE
} as const
