import Link from 'next/link'
import React from 'react'

import { FacebookIcon } from '@/Assets/Icons/facebook'
import type { IconElement } from '@/Assets/Icons/icons.base'
import { InstagramIcon } from '@/Assets/Icons/instagram'
import { TikTokIcon } from '@/Assets/Icons/tik-tok'

import './socials.styles.sass'

type SocialNetwork = {
  key: string
  url: string
  Icon: IconElement
}

const socialsNetworks: SocialNetwork[] = [
  {
    key: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61557566169594',
    Icon: FacebookIcon
  },
  {
    key: 'Instagram',
    url: 'https://www.instagram.com/lmc_le_moment_cocooning',
    Icon: InstagramIcon
  },
  {
    key: 'TikTok',
    url: 'https://www.tiktok.com/@lmcmarie',
    Icon: TikTokIcon
  }
]

export const Socials: React.FC = () => (
  <ul className='socials'>
    {socialsNetworks.map(({ key, url, Icon }) => (
      <li key={key}>
        <Link
          href={url}
          className='socials__link'
        >
          <Icon />
        </Link>
      </li>
    ))}
  </ul>
)
