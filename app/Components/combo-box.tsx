import React from 'react'
import {
  ComboBox as ReactAriaComboBox,
  ComboBoxProps as ReactAriaComboBoxProps,
  Input,
  type Key,
  ListBox,
  ListBoxItem
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

import './combo-box.styles.sass'

type ComboBoxProps <T extends Key> = ReactAriaComboBoxProps<Option<T>> & BaseSelectProps<T>

export function ComboBox <T extends Key> ({
  className,
  defaultSelectedKey,
  label,
  options,
  placeholder,
  selectedKey,
  ...props
}: ComboBoxProps<T>) {
  const [isComboBoxMenuOpen, setIsComboBoxMenuOpen] = React.useState<boolean>(false)
  const [menuMinWidth, setMenuMinWidth] = React.useState<number>(MENU_MIN_WIDTH)
  const [selectedOption, setSelectedOption] = React.useState<Option<T> | undefined>(undefined)

  const comboBoxRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (comboBoxRef.current !== null) {
      setMenuMinWidth(comboBoxRef.current.offsetWidth)
    }
  }, [comboBoxRef])

  React.useEffect(() => {
    if (selectedKey !== undefined) {
      setSelectedOption(options.find(option => option.key === selectedKey))
      return
    }

    if (defaultSelectedKey !== undefined) {
      setSelectedOption(options.find(option => option.key === defaultSelectedKey))
    }
  }, [defaultSelectedKey, options, selectedKey])

  const handleSelectionChange = (key: Key | null) => {
    const currentOption = options.find(option => option.key === key)

    if (currentOption === undefined) {
      return 
    }

    setSelectedOption(currentOption)

    if (currentOption.onClick !== undefined) {
      currentOption.onClick(currentOption)
    }
  }

  return (
    <ReactAriaComboBox
      {...props}
      className={classNames('combo-box', className)}
      defaultSelectedKey={defaultSelectedKey}
      onOpenChange={setIsComboBoxMenuOpen}
      onSelectionChange={handleSelectionChange}
      inputValue={selectedOption?.label}
    >
      <Label>{label}</Label>

      <div
        className='combo-box__control'
        ref={comboBoxRef}
      >
        <Input
          className='combo-box__control__input'
          placeholder={placeholder}
        />

        <Pressable className='combo-box__control__button'>
          <ChevronIcon isRotated={isComboBoxMenuOpen} />
        </Pressable>
      </div>

      <Popover>
        <Motion animation='accordion'>
          <ListBox
            className='combo-box__list-box'
            items={options}
            style={{ minWidth: menuMinWidth }}
          >
            {option => (
              <ListBoxItem
                key={option.key}
                textValue={option.label}
              >
                <OptionItem
                  key={option.key}
                  Icon={option.Icon}
                  isDisabled={option.isDisabled}
                  isSelected={option.key === selectedOption?.key}
                  label={option.label}
                />
              </ListBoxItem>
            )}
          </ListBox>
        </Motion>
      </Popover>
    </ReactAriaComboBox>
  )
}
