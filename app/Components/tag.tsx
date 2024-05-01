import React from 'react'

import { classNames } from '@/Helpers/styles'

import './tag.styles.sass'

type TagProps = React.ComponentProps<'span'>

export const Tag: React.FC<TagProps> = ({ children, className, ...props }) => (
  <span {...props} className={classNames('tag', className)}>
    {children}
  </span>
)
