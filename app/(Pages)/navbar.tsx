'use client'

import { BedSingleIcon, type LucideIcon, UserIcon, AlbumIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { getObjectKeys } from '@/Helpers/object'
import { useI18n } from '@/I18n'
import { ROUTES, type RouteHref, type RouteKey } from '@/Routes'

import './navbar.styles.sass'

const MIN_LINK_WIDTH_VALUE_IN_CH = 10

type LinkKey = Exclude<RouteKey, 'home'>

const navLinksIconMap: Record<LinkKey, LucideIcon> = {
  about: UserIcon,
  book: AlbumIcon,
  massages: BedSingleIcon
}

type NavLink = {
  key: LinkKey
  href: RouteHref
  label: string
  Icon: LucideIcon
}

export const Navbar: React.FC = () => {
  const { i18n } = useI18n()

  const linkedRoutes: LinkKey[] = getObjectKeys(ROUTES).filter(routeKey => routeKey !== 'home') as LinkKey[]

  const navLinks: NavLink[] = linkedRoutes.map(linkKey => ({
    href: ROUTES[linkKey],
    Icon: navLinksIconMap[linkKey],
    key: linkKey,
    label: i18n(`pages.${linkKey}.link-label`)
  }))

  const longestLabel = navLinks.reduce((longest, current) => {
    return current.label.length > longest.label.length ? current : longest
  }, navLinks[0]).label

  const linkWidthInCh = Math.max(longestLabel.length, MIN_LINK_WIDTH_VALUE_IN_CH)

  const linkStyle: Record<string, string> = {
    '--navbar-link-width': `${linkWidthInCh}ch`
  }

  return (
    <nav>
      <ul className='navbar'>
        {navLinks.map(({ key, href, label, Icon }) => (
          <li key={key}>
            <Link
              className='navbar__link'
              style={linkStyle}
              href={href}
            >
              <Icon /> {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
