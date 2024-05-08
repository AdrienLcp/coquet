import React from 'react'
import { Input } from 'react-aria-components'

import { BaseField, type BaseFieldProps } from '@/Components/base-field'

import './text-area.styles.sass'

type TextFieldProps = BaseFieldProps & {
  placeholder?: string
}

export const TextField: React.FC<TextFieldProps> = ({ placeholder, ...props }) => (
  <BaseField {...props}>
    <Input placeholder={placeholder} />
  </BaseField>
)
