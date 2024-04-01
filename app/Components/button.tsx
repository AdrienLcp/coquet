import React from 'react'

import { Pressable, type PressableProps } from '@/Components/pressable'
import { classNames } from '@/Helpers/styles'

import './button.styles.sass'

type ButtonProps = PressableProps & {
  size?: 'icon'
  variant?: 'filled' | 'outlined' | 'transparent' | 'tonal'
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  size,
  variant = 'outlined',
  ...props
}) => (
  <Pressable
    {...props}
    className={classNames(
      'button',
      size !== undefined && `${size}-size`,
      variant,
      className
    )}
  >
    {children}
  </Pressable>
)
