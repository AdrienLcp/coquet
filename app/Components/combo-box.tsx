import { ChevronDown } from 'lucide-react'
import React from 'react'
import { Input, Key, Label, ListBox, ListBoxItem, Popover, ComboBox as ReactAriaComboBox } from 'react-aria-components'

import { OptionItem, type Option } from '@/Components/option'
import { Pressable } from '@/Components/pressable'
import { classNames } from '@/Helpers/styles'

import './combo-box.styles.sass'

type ComboBoxProps <T extends Key> = {
  label?: string
  options: Array<Option<T>>
}

export function ComboBox <T extends Key> ({
  label,
  options
}: ComboBoxProps<T>) {
  const [isComboBoxOpen, setIsComboBoxOpen] = React.useState<boolean>(false)
  const [menuMinWidth, setMenuMinWidth] = React.useState<number>(200)
  const [selectedKey, setSelectedKey] = React.useState<Key | null>(null)

  const comboBoxRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (comboBoxRef.current !== null) {
      setMenuMinWidth(comboBoxRef.current.offsetWidth)
    }
  }, [comboBoxRef])

  const handleSelectionChange = (key: Key) => {
    const selectedOption = options.find(option => option.key === key)

    if (selectedOption === undefined) {
      return 
    }

    setSelectedKey(key)

    if (selectedOption.onClick !== undefined) {
      selectedOption.onClick(selectedOption)
    }
  }

  return (
    <ReactAriaComboBox
      className='combo-box'
      onOpenChange={setIsComboBoxOpen}
      onSelectionChange={handleSelectionChange}
    >
      {label !== undefined && (
        <Label>
          {label}
        </Label>
      )}

      <div
        className='combo-box__control'
        ref={comboBoxRef}
      >
        <Input className='combo-box__control__input' />

        <Pressable className='combo-box__control__button'>
          <ChevronDown
            className={classNames(
              'combo-box__control__button__icon',
              isComboBoxOpen && 'rotate'
            )}
          />
        </Pressable>
      </div>

      <Popover>
        <ListBox
          className='combo-box__list'
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
                isSelected={option.key === selectedKey}
                label={option.label}
              />
            </ListBoxItem>
          )}
        </ListBox>
      </Popover>
    </ReactAriaComboBox>
  )
}
