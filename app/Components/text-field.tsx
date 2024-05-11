import React from 'react'
import { Input } from 'react-aria-components'

import { BaseField, type BaseFieldProps } from '@/Components/base-field'

import './text-field.styles.sass'

type TextFieldProps = BaseFieldProps & {
  placeholder?: string
}

export const TextField: React.FC<TextFieldProps> = ({ placeholder, ...props }) => (
  <BaseField {...props}>
    <Input
      className='text-field'
      placeholder={placeholder}
    />
  </BaseField>
)
