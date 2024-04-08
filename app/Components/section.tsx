import React from 'react'

import { classNames } from '@/Helpers/styles'

import './section.styles.sass'

type SectionProps = React.ComponentProps<'section'> & {
  row?: 'reverse'
}

export const Section: React.FC<SectionProps> = ({
  className,
  children,
  row,
  ...props
}) => (
  <section
    {...props}
    className={classNames('section', row, className)}
  >
    {children}
  </section>
)
