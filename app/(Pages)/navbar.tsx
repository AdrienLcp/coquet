'use client'

import { BedSingleIcon, HomeIcon, type LucideIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { getObjectKeys } from '@/Helpers/object'
import { useI18n } from '@/I18n'
import { ROUTES, type RouteHref, type RouteKey } from '@/Routes'

import './navbar.styles.sass'

const MIN_LINK_WIDTH_VALUE_IN_CH = 10

const navLinksIconMap: Record<RouteKey, LucideIcon> = {
  home: HomeIcon,
  massages: BedSingleIcon,
  about: UserIcon
}

type NavLink = {
  key: RouteKey
  href: RouteHref
  label: string
  Icon: LucideIcon
}

export const Navbar: React.FC = () => {
  const { i18n } = useI18n()

  const navLinks: NavLink[] = getObjectKeys(ROUTES).map(link => ({
    href: ROUTES[link],
    Icon: navLinksIconMap[link],
    key: link,
    label: i18n(`pages.links.${link}`)
  }))

  const longestLabel = navLinks.reduce((longest, current) => {
    return current.label.length > longest.label.length ? current : longest
  }, navLinks[0]).label

  const linkWidthInCh = longestLabel.length > MIN_LINK_WIDTH_VALUE_IN_CH
    ? longestLabel.length
    : MIN_LINK_WIDTH_VALUE_IN_CH

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
