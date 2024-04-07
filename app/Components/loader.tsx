'use client'

import { Logo, type LogoProps } from '@/Components/logo'

import './loader.styles.sass'

export const Loader: React.FC<LogoProps> = ({ size = 'xLarge', ...props }) => (
  <div className='loader'>
    <div className='loader__logo'>
      <Logo {...props} size={size} />
    </div>
  </div>
)
