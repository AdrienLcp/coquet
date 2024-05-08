import React from 'react'
import {
  TextField,
  type TextFieldProps,
  Label,
  Text
} from 'react-aria-components'

import { classNames } from '@/Helpers/styles'

import './base-field.styles.sass'

type FilteredTextFieldProps = Omit<TextFieldProps, 'className'>

export type BaseFieldProps = FilteredTextFieldProps & {
  className?: string
  description?: string
  label?: string
}

export const BaseField: React.FC<BaseFieldProps> = ({
  children,
  className,
  description,
  label,
  ...props
}) => (
  <TextField
    {...props}
    className={classNames('base-field', className)}
  >
    {label !== undefined && (
      <Label className='base-field__label'>
        {label}
      </Label>
    )}

    <>{children}</>

    {description !== undefined && (
      <Text
        slot='description'
        className='base-field__description'
      >
        {description}
      </Text>
    )}
  </TextField>
)
