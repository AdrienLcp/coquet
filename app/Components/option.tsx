import { CheckIcon } from 'lucide-react'
import React from 'react'
import { type Key } from 'react-aria-components'

import { classNames } from '@/Helpers/styles'

import './option.styles.sass'

export type Option <T extends Key> = {
  key: T
  label: string
  Icon?: React.ReactNode
  isSelected?: boolean
  isDisabled?: boolean
  onClick?: (option: Option<T>) => void
}

type OptionProps <T extends Key> = Option<T> & {
  className?: string
}

export function OptionItem <T extends Key> ({
  className,
  Icon,
  isDisabled,
  isSelected,
  label
}: OptionProps<T>) {
  return (
    <div className={classNames(
      'option',
      Boolean(isSelected) && 'selected',
      Boolean(isDisabled) && 'disabled',
      className
    )}>
      <div className='option__box'>
        {Icon !== undefined && Icon}

        {label}
      </div>

      {Boolean(isSelected) && <CheckIcon size={20} />}
    </div>
  )
}
