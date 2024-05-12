import React from 'react'

import { Title } from '@/Components/title'
import { classNames } from '@/Helpers/styles'

import './massage-wrapper.styles.sass'

type MassageWrapperProps = React.ComponentProps<'article'>

export const MassageWrapper: React.FC<MassageWrapperProps> = ({
  className,
  children,
  title,
  ...props
}) => (
  <article {...props} className={classNames('massage-wrapper', className)}>
    {title !== undefined && (
      <Title tag='h4'>
        {title}
      </Title>
    )}

    <div className='massage-wrapper__box'>
      {children}
    </div>
  </article>
)
