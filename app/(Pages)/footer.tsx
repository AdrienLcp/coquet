import React from 'react'

import { Socials } from '@/(Pages)/socials'
import { TermsOfSale } from '@/(Pages)/terms-of-sale'

import './footer.styles.sass'

export const Footer: React.FC = async () => (
  <footer className='footer'>
    <Socials />

    <TermsOfSale />
  </footer>
)
