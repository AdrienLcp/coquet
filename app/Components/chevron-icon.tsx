import { ChevronDownIcon, type LucideProps } from 'lucide-react'
import React from 'react'

import { classNames } from '@/Helpers/styles'

import './chevron-icon.styles.sass'

type ChevronIconProps = LucideProps & {
  isRotated?: boolean
}

export const ChevronIcon: React.FC<ChevronIconProps> = ({ className, isRotated, ...props }) => (
  <ChevronDownIcon
    {...props}
    className={classNames('chevron-icon', Boolean(isRotated) && 'rotate', className)}
  />
)
