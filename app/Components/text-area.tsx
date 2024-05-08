import React from 'react'
import { TextArea as ReactAriaTextArea } from 'react-aria-components'

import { BaseField, type BaseFieldProps } from '@/Components/base-field'

import './text-area.styles.sass'

type TextAreaProps = BaseFieldProps & {
  placeholder?: string
}

export const TextArea: React.FC<TextAreaProps> = ({ placeholder, ...props }) => (
  <BaseField {...props}>
    <ReactAriaTextArea placeholder={placeholder} />
  </BaseField>
)
