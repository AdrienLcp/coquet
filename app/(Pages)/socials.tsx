import Link from 'next/link'
import React from 'react'

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
    Icon: <></>
  },
  {
    key: 'Instagram',
    url: 'https://www.instagram.com/lmc_le_moment_cocooning',
    Icon: <></>
  },
  {
    key: 'TikTok',
    url: 'https://www.tiktok.com/@lmcmarie',
    Icon: <></>
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
