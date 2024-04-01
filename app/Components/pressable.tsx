import { classNames } from '@/Helpers/styles'
import React from 'react'
import { Button, type ButtonProps } from 'react-aria-components'

import './pressable.styles.sass'

export type PressableProps = Omit<ButtonProps, 'className'> & {
  className?: string
}

export const Pressable: React.FC<PressableProps> = ({ children, className, ...props }) => (
  <Button {...props} className={classNames('pressable', className)}>
    {children}
  </Button>
)
