import React from 'react'
import { Label as ReactAriaLabel, type LabelProps } from 'react-aria-components'

export const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  if (children == null || children === '') {
    return null
  }

  return (
    <ReactAriaLabel {...props}>
      {children}
    </ReactAriaLabel>
  )
}
