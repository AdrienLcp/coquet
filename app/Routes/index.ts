export type RouteKey = 'home' | 'massages' | 'about'
export type RouteHref =  '/' | `/${RouteKey}`

export const ROUTES: Record<RouteKey, RouteHref> = {
  home: '/',
  massages: '/massages',
  about: '/about'
} as const
