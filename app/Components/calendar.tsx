import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import React from 'react'
import {
  Calendar as ReactAriaCalendar,
  CalendarCell,
  CalendarGrid,
  type CalendarProps as ReactAriaCalendarProps,
  type DateValue,
  Heading,
  Text
} from 'react-aria-components'

import { Button } from '@/Components/button'
import { classNames } from '@/Helpers/styles'

import './calendar.styles.sass'

type CalendarProps <T extends DateValue> = ReactAriaCalendarProps<T> & {
  className?: string
}

export function Calendar <T extends DateValue> ({
  className,
  ...props
}: CalendarProps<T>) {
  return (
    <ReactAriaCalendar {...props} className={classNames('calendar', className)}>
      <header className='calendar__header'>
        <Button
          size='icon'
          slot='previous'
          variant='transparent'
        >
          <ChevronLeftIcon />
        </Button>
        
        <Heading />

        <Button
          size='icon'
          slot='next'
          variant='transparent'
        >
          <ChevronRightIcon />
        </Button>
      </header>

      <CalendarGrid className='calendar__grid'>
        {(date) => (
          <CalendarCell 
            className='calendar__grid__cell'
            date={date}
          />
        )}
      </CalendarGrid>

      <Text slot='errorMessage' />
    </ReactAriaCalendar>
  )
}
