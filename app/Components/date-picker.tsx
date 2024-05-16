import { CalendarDaysIcon } from 'lucide-react'
import React from 'react'
import {
  DateInput,
  DatePicker as ReactAriaDatePicker,
  type DatePickerProps as ReactAriaDatePickerProps,
  DateSegment,
  type DateValue,
  FieldError,
  Group,
  Text,
  Dialog
} from 'react-aria-components'

import { Calendar } from '@/Components/calendar'
import { Label } from '@/Components/label'
import { Popover } from '@/Components/popover'
import { Pressable } from '@/Components/pressable'
import { MENU_MIN_WIDTH } from '@/Config/constants'
import { classNames } from '@/Helpers/styles'

import './date-picker.styles.sass'

type DatePickerProps <T extends DateValue> = ReactAriaDatePickerProps<T> & {
  className?: string
  label?: React.ReactNode
}

export function DatePicker <T extends DateValue> ({
  className,
  label,
  ...props
}: DatePickerProps<T>) {
  const [isDatePickerFocused, setIsDatePickerFocused] = React.useState<boolean>(false)
  const [calendarMinWidth, setCalendarMinWidth] = React.useState<number>(MENU_MIN_WIDTH)

  const datePickerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (datePickerRef.current !== null) {
      setCalendarMinWidth(datePickerRef.current.offsetWidth)
    }
  }, [datePickerRef])

  return (
    <ReactAriaDatePicker
      {...props}
      onFocusChange={setIsDatePickerFocused}
      className={classNames('date-picker', className)}
    >
      <Label>{label}</Label>

      <Group
        className={classNames('date-picker__control', isDatePickerFocused && 'focused')}
        ref={datePickerRef}
      >
        <DateInput className='date-picker__control__input'>
          {segment => <DateSegment segment={segment} />}
        </DateInput>

        <Pressable className='date-picker__control__button'>
          <CalendarDaysIcon />
        </Pressable>
      </Group>

      <Text slot='description' />
      <FieldError />

      <Popover>
        <Dialog
          className='date-picker__menu'
          style={{ minWidth: calendarMinWidth }}
        >
          <Calendar />
        </Dialog>
      </Popover>
    </ReactAriaDatePicker>
  )
}
