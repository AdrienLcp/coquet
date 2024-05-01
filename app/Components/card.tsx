import React from 'react'

import { classNames } from '@/Helpers/styles'

import './card.styles.sass'

type CardProps = React.ComponentProps<'article'> & {
  isReversed?: boolean
}

export const Card: React.FC<CardProps> = ({
  className,
  children,
  isReversed,
  ...props
}) => (
  <article
    {...props}
    className={classNames(
      'article',
      Boolean(isReversed) && 'reverse',
      className
    )}
  >
    {children}
  </article>
)
