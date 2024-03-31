import { CheckIcon } from 'lucide-react'
import React from 'react'
import { Button, type Key, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components'

import { classNames } from '@/Helpers/styles'

import './dropdown.styles.sass'

export type Option <T> = {
  key: T
  label: string
  Icon?: React.ReactNode
  isSelected?: boolean
  isDisabled?: boolean
  onClick?: (option: Option<T>) => void
}

type DropdownProps <T> = React.PropsWithChildren<{
  options: Array<Option<T>>
  isDisabled?: boolean
}>

export function Dropdown <T extends string> ({ children, options, isDisabled }: DropdownProps<T>) {
  const handleClickOption = (key: Key) => {
    const clickedOption = options.find(option => option.key === key)

    if (clickedOption !== undefined && clickedOption.onClick !== undefined) {
      clickedOption.onClick(clickedOption)
    }
  }

  return (
    <MenuTrigger>
      <Button className='dropdown__trigger' isDisabled={isDisabled}>
        {children}
      </Button>

      <Popover offset={5}>
        <Menu
          selectedKeys={options.filter(option => option.isSelected).map(option => option.key)}
          onAction={handleClickOption}
          className='dropdown__menu'
        >
          {options.map(option => (
            <MenuItem
              key={option.key}
              id={option.key}
              className={classNames(
                'dropdown__menu__option',
                Boolean(option.isSelected) && 'selected',
                Boolean(option.isDisabled) && 'disabled'
              )}
            >
              <div className='dropdown__menu__option__box'>
                {option.Icon !== undefined && option.Icon}

                {option.label}                
              </div>

              {Boolean(option.isSelected) && (
                <CheckIcon size={20} />
              )}
            </MenuItem>
          ))}
        </Menu>
      </Popover>
    </MenuTrigger>    
  )
}
