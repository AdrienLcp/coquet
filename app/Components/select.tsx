import React from 'react'
import {
  type Key,
  ListBox,
  ListBoxItem,
  Select as ReactAriaSelect,
  type SelectProps as ReactAriaSelectProps
} from 'react-aria-components'

import { ChevronIcon } from '@/Components/chevron-icon'
import { Label } from '@/Components/label'
import { Motion } from '@/Components/motion'
import { type Option, OptionItem } from '@/Components/option'
import { Popover } from '@/Components/popover'
import { Pressable } from '@/Components/pressable'
import { MENU_MIN_WIDTH } from '@/Config/constants'
import { classNames } from '@/Helpers/styles'
import type { BaseSelectProps } from '@/Types/inputs'

import './select.styles.sass'

type SelectProps <T extends Key> = ReactAriaSelectProps<Option<T>> & BaseSelectProps<T>

export function Select <T extends Key> ({
  className,
  defaultSelectedKey,
  label,
  onSelectionChange,
  options,
  placeholder,
  selectedKey,
  ...props
}: SelectProps<T>) {
  const [isSelectMenuOpen, setIsSelectMenuOpen] = React.useState<boolean>(false)
  const [menuMinWidth, setMenuMinWidth] = React.useState<number>(MENU_MIN_WIDTH)
  const [selectedOption, setSelectedOption] = React.useState<Option<T> | undefined>(undefined)

  const selectRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (selectRef.current !== null) {
      setMenuMinWidth(selectRef.current.offsetWidth)
    }
  }, [selectRef])

  React.useEffect(() => {
    if (selectedKey !== undefined) {
      setSelectedOption(options.find(option => option.key === selectedKey))
      return
    }

    if (defaultSelectedKey !== undefined) {
      setSelectedOption(options.find(option => option.key === defaultSelectedKey))
    }
  }, [defaultSelectedKey, options, selectedKey])

  const handleSelectionChange = (key: Key) => {
    const currentOption = options.find(option => option.key === key)

    if (currentOption === undefined) {
      return
    }

    setSelectedOption(currentOption)

    if (onSelectionChange !== undefined) {
      onSelectionChange(currentOption.key)
    }

    if (currentOption.onClick !== undefined) {
      currentOption.onClick(currentOption)
    }
  }

  return (
    <ReactAriaSelect
      {...props}
      className={classNames('select', className)}
      defaultSelectedKey={defaultSelectedKey}
      onOpenChange={setIsSelectMenuOpen}
      onSelectionChange={handleSelectionChange}
      placeholder={placeholder}
    >
      <Label>{label}</Label>

      <div ref={selectRef}>
        <Pressable className='select__control'>
          <div className='select__control__box'>
            {selectedOption === undefined
              ? <span className='select__control__box__placeholder'>
                  {placeholder}
                </span>
              : selectedOption.label
            }
          </div>

          <ChevronIcon isRotated={isSelectMenuOpen} />
        </Pressable>
      </div>

      <Popover>
        <Motion animation='accordion'>
          <ListBox
            className='select__list-box'
            items={options}
            style={{ minWidth: menuMinWidth }}
          >
            {({ Icon, isDisabled, isSelected, key, label }) => (
              <ListBoxItem
                className='select__list-box__item'
                key={key}
                textValue={label}
              >
                <OptionItem
                  key={key}
                  Icon={Icon}
                  isDisabled={isDisabled}
                  isSelected={isSelected}
                  label={label}
                />
              </ListBoxItem>
            )}
          </ListBox>
        </Motion>
      </Popover>
    </ReactAriaSelect>
  )
}
