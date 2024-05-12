import React from 'react'
import { TextField, type TextFieldProps } from 'react-aria-components'

import { Label } from '@/Components/label'
import { Text } from '@/Components/text'
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
    <Label>{label}</Label>

    <>{children}</>

    <Text
      slot='description'
      className='base-field__description'
    >
      {description}
    </Text>
  </TextField>
)
