import React from 'react'

import { classNames } from '@/Helpers/styles'

import './article.styles.sass'

type ArticleProps = React.ComponentProps<'article'> & {
  isReversed?: boolean
}

export const Article: React.FC<ArticleProps> = ({
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
