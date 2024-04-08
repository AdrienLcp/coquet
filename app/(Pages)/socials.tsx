import Link from 'next/link'
import React from 'react'

import { FacebookIcon } from '@/Assets/Icons/facebook'
import { InstagramIcon } from '@/Assets/Icons/instagram'
import { TikTokIcon } from '@/Assets/Icons/tik-tok'

import './socials.styles.sass'

type SocialNetwork = {
  key: string
  url: string
  Icon: React.ReactNode
}

const socialsNetworks: SocialNetwork[] = [
  {
    key: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61557566169594',
    Icon: <FacebookIcon />
  },
  {
    key: 'Instagram',
    url: 'https://www.instagram.com/lmc_le_moment_cocooning',
    Icon: <InstagramIcon />
  },
  {
    key: 'TikTok',
    url: 'https://www.tiktok.com/@lmcmarie',
    Icon: <TikTokIcon />
  }
]

export const Socials: React.FC = () => {
  return (
    <div className='socials'>
      {socialsNetworks.map(({ key, url, Icon }) => (
        <Link
          href={url}
          key={key}
          className='socials__link'
        >
          {Icon}
        </Link>
      ))}
    </div>
  )
}
