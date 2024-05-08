import React from 'react'
import { Form as ReactAriaForm, type FormProps as ReactAriaFormProps } from 'react-aria-components'

type FormProps = ReactAriaFormProps & {
  isDisabled?: boolean
}

export const Form: React.FC<FormProps> = ({ children, className, isDisabled, ...props }) => (
  <ReactAriaForm {...props}>
    <fieldset disabled={isDisabled} className={className}>
      {children}
    </fieldset>
  </ReactAriaForm>
)
