import React from 'react'

import { baseIconProps, type IconProps } from '@/Assets/Icons/icons.base'

export const TikTokIcon: React.FC<IconProps> = ({ ...props }) => (
  <svg
    {...baseIconProps}
    {...props}
  >
    <g>
      <path
        d='M21,7H20a4,4,0,0,1-4-4H12V14.5a2.5,2.5,0,1,1-4-2V8.18a6.5,6.5,0,1,0,8,6.32V9.92A8,8,0,0,0,20,11h1Z'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </g>
  </svg>
)
