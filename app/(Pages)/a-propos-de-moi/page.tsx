import type { Metadata } from 'next'
import React from 'react'

import { COMMON_METADATA } from '@/Config/metadata'

export const metadata: Metadata = {
  ...COMMON_METADATA,
  openGraph: {
    type: 'profile',
    firstName: 'Marie',
    lastName: 'Ploteau',
    username: 'Le Moment Cocooning',
    gender: 'Female'
  }
}

const About: React.FC = () => (
  <>

  </>
)

export default About
