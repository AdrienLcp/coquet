import React from 'react'

import { classNames } from '@/Helpers/styles'

import './title.styles.sass'

type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type TitleProps = React.ComponentProps<TitleTag> & React.PropsWithChildren<{
  tag?: TitleTag
}>

export const Title: React.FC<TitleProps> = ({
  children,
  className,
  tag = 'h1',
  ...props
}) => {
  const Tag = tag

  return (
    <Tag {...props} className={classNames('title', tag, className)}>
      {children}
    </Tag>
  )
}
