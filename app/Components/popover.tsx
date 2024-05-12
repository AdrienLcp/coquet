import React from 'react'
import { Popover as ReactAriaPopover, type PopoverProps } from 'react-aria-components'

export const Popover: React.FC<PopoverProps> = ({ children, ...props }) => (
  <ReactAriaPopover offset={6} {...props}>
    {children}
  </ReactAriaPopover>
)
