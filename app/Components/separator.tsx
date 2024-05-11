'use client'

import React from 'react'
import { Separator as ReactAriaSeparator, type SeparatorProps } from 'react-aria-components'

import { classNames } from '@/Helpers/styles'

import './separator.styles.sass'

export const Separator: React.FC<SeparatorProps> = ({ className, orientation = 'horizontal', ...props }) => (
  <ReactAriaSeparator
    {...props}
    className={classNames('separator', orientation, className)}
  />
)
