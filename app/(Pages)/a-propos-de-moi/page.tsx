import type { Metadata } from 'next'
import React from 'react'

import { COMMON_METADATA } from '@/Config/metadata'

export const metadata: Metadata = {
  ...COMMON_METADATA,
  openGraph: {
    ...COMMON_METADATA.openGraph,
    type: 'profile'
  }
}

const About: React.FC = () => (
  <>
    Présentation de Marie
  </>
)

export default About
