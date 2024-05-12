import Link from 'next/link'
import React from 'react'

import { FacebookIcon } from '@/Assets/Icons/facebook'
import type { IconElement } from '@/Assets/Icons/icons.base'
import { InstagramIcon } from '@/Assets/Icons/instagram'
import { TikTokIcon } from '@/Assets/Icons/tik-tok'

import './socials.styles.sass'

type SocialNetworkKey = 'facebook' | 'instagram' | 'tikTok'

type SocialNetwork = {
  key: SocialNetworkKey
  url: string
  Icon: IconElement
  color: string
}

export const SOCIALS_NETWORKS: Record<SocialNetworkKey, SocialNetwork> = {
  facebook: {
    key: 'facebook',
    url: 'https://www.facebook.com/profile.php?id=61557566169594',
    Icon: FacebookIcon,
    color: '#3B5998'
  },
  instagram: {
    key: 'instagram',
    url: 'https://www.instagram.com/lemomentcocooning_',
    Icon: InstagramIcon,
    color: '#C13584'
  },
  tikTok: {
    key: 'tikTok',
    url: 'https://www.tiktok.com/@lmcmarie',
    Icon: TikTokIcon,
    color: '#EE1D52'
  }
}

const socialsNetworks = Object.values(SOCIALS_NETWORKS)

export const Socials: React.FC = () => (
  <ul className='socials'>
    {socialsNetworks.map(({ key, url, Icon, color }) => {
      const linkStyle: Record<string, string> = {
        '--social-link-color': color
      }

      return (
        <li key={key}>
          <Link
            href={url}
            className='socials__link'
            style={linkStyle}
          >
            <Icon />
          </Link>
        </li>
      )
    })}
  </ul>
)
