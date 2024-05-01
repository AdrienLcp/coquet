import type { LucideIcon } from 'lucide-react'
import React from 'react'

import { Pressable, type PressableProps } from '@/Components/pressable'
import { classNames } from '@/Helpers/styles'

import './button.styles.sass'

type ButtonProps = PressableProps & {
  Icon?: LucideIcon
  iconSide?: 'left' | 'right'
  size?: 'icon'
  variant?: 'filled' | 'outlined' | 'transparent' | 'tonal'
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  Icon,
  iconSide = 'left',
  size,
  variant = 'outlined',
  ...props
}) => {
  const hasIcon = Icon !== undefined
  
  return (
    <Pressable
      {...props}
      className={classNames(
        'button',
        hasIcon && `icon-${iconSide}`,
        size !== undefined && `${size}-size`,
        variant,
        className
      )}
    >
      <>
        {hasIcon && <Icon size={15} />}

        {children}
      </>
    </Pressable>
  )
}
