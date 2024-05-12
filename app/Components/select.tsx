import React from 'react'
import { type Key, Select as ReactAriaSelect, Popover, ListBox, ListBoxItem } from 'react-aria-components'

import { ChevronIcon } from '@/Components/chevron-icon'
import { Label } from '@/Components/label'
import { Motion } from '@/Components/motion'
import { type Option, OptionItem } from '@/Components/option'
import { Pressable } from '@/Components/pressable'
import { MENU_MIN_WIDTH } from '@/Config/constants'
import type { BaseSelectProps } from '@/Types/inputs'

import './select.styles.sass'

type SelectProps <T extends Key> = BaseSelectProps<T>

export function Select <T extends Key> ({
  options,
  label,
  placeholder,
  ...props
}: SelectProps<T>) {
  const [isSelectMenuOpen, setIsSelectMenuOpen] = React.useState<boolean>(false)
  const [menuMinWidth, setMenuMinWidth] = React.useState<number>(MENU_MIN_WIDTH)
  const [selectedOption, setSelectedOption] = React.useState<Option<T> | null>(null)

  const selectRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (selectRef.current !== null) {
      setMenuMinWidth(selectRef.current.offsetWidth)
    }
  }, [selectRef])

  const handleSelectionChange = (key: Key) => {
    const currentOption = options.find(option => option.key === key)

    if (currentOption === undefined) {
      return
    }

    setSelectedOption(currentOption)

    if (currentOption.onClick !== undefined) {
      currentOption.onClick(currentOption)
    }
  }

  const selectedKey = selectedOption?.key

  return (
    <ReactAriaSelect
      {...props}
      className='select'
      onOpenChange={setIsSelectMenuOpen}
      onSelectionChange={handleSelectionChange}
    >
      <Label>{label}</Label>

      <div ref={selectRef}>
        <Pressable className='select__control'>
          <div>
            {selectedOption === null
              ? <span className='select__control__placeholder'>
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
            key={selectedKey}
          >
            {({ Icon, isDisabled, key, label }) => (
              <ListBoxItem
                className='select__list-box__item'
                key={key}
                textValue={label}
              >
                <OptionItem
                  key={key}
                  Icon={Icon}
                  isDisabled={isDisabled}
                  isSelected={key === selectedKey}
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
