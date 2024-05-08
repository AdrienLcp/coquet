import type { Metadata } from 'next'
import React from 'react'

import { COMMON_METADATA } from '@/Config/metadata'
import { PageTitle } from '@/Components/page-title'
import { Image } from '@/Components/image'

import photoMarie from '@/Assets/Images/marie.jpg'

export const metadata: Metadata = {
  ...COMMON_METADATA,
  openGraph: {
    type: 'profile',
    firstName: 'Marie',
    lastName: 'Ploteau',
    username: 'Le Moment Cocooning',
    gender: 'Female',
    images: [
      {
        url: '/app/Assets/Images/marie.jpg',
        alt: 'Marie Ploteau, masseuse à Vair-sur-Loire',
        width: 400,
        height: 400
      }
    ]
  }
}

const About: React.FC = async () => (
  <>
    <PageTitle pageKey='about' />

    <div>
      <Image
        src={photoMarie}
        alt='Marie Ploteau'
      />
    </div>
  </>
)

export default About
