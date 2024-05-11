import React from 'react'

import { Title } from '@/Components/title'
import { classNames } from '@/Helpers/styles'

import './section.styles.sass'

type SectionProps = React.ComponentProps<'section'>

export const Section: React.FC<SectionProps> = ({ className, children, title, ...props }) => (
  <section {...props} className={classNames('section', className)}>
    {title !== undefined && (
      <Title tag='h3'>
        {title}
      </Title>
    )}

    {children}
  </section>
)
