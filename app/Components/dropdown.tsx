import React from 'react'
import {
  type Key,
  Menu,
  type MenuProps,
  MenuItem,
  MenuTrigger,
  Popover
} from 'react-aria-components'

import { OptionItem } from '@/Components/option'
import { Motion } from '@/Components/motion'

import './dropdown.styles.sass'

export type Option <T extends Key> = {
  key: T
  label: string
  Icon?: React.ReactNode
  isSelected?: boolean
  isDisabled?: boolean
  onClick?: (option: Option<T>) => void
}

type DropdownProps <T extends Key> = MenuProps<T> & React.PropsWithChildren<{
  options: Array<Option<T>>
}>

export function Dropdown <T extends Key> ({ children, options }: DropdownProps<T>) {
  const handleClickOption = (key: Key) => {
    const clickedOption = options.find(option => option.key === key)

    if (clickedOption?.onClick !== undefined) {
      clickedOption.onClick(clickedOption)
    }
  }

  return (
    <MenuTrigger>
      {children}

      <Popover offset={5}>
        <Motion animation='accordion'>
          <Menu
            selectedKeys={options.filter(option => Boolean(option.isSelected)).map(option => option.key)}
            onAction={handleClickOption}
            className='dropdown__menu'
          >
            {options.map(option => (
              <MenuItem
                className='dropdown__menu__item'
                id={option.key}
                key={option.key}
              >
                <OptionItem
                  Icon={option.Icon}
                  key={option.key}
                  isDisabled={option.isDisabled}
                  isSelected={option.isSelected}
                  label={option.label}
                />
              </MenuItem>
            ))}
          </Menu>
        </Motion>
      </Popover>
    </MenuTrigger>    
  )
}
