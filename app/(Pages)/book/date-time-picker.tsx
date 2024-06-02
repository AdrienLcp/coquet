'use client'

import { addDays } from 'date-fns'
import React from 'react'
import type { DateValue } from 'react-aria-components'

import { BOOK_FORM_KEYS } from '@/(Pages)/book/book-form'
import { DatePicker } from '@/Components/date-picker'
import type { Option } from '@/Components/option'
import { Select } from '@/Components/select'
import { useI18n } from '@/I18n'

import './date-time-picker.styles.sass'

const PARIS_TIMEZONE = 'Europe/Paris'
const LIMIT_BOOK_DAY_COUNT = 32

const DAYS = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6
}

const isDateUnavailable = (dateValue: DateValue): boolean => {
  const currentDate = dateValue.toDate(PARIS_TIMEZONE)
  const currentDay = currentDate.getDay()

  const isWeekend = currentDay === DAYS.Sunday || currentDay === DAYS.Saturday
  if (isWeekend) {
    return true
  }

  const today = new Date()
  const limitBookTime = addDays(today, LIMIT_BOOK_DAY_COUNT).getTime()
  const currentDateTime = currentDate.getTime()
  const now = today.getTime()

  const isPast = currentDateTime < now
  const isTooFar = currentDateTime > limitBookTime

  return isPast || isTooFar
}

const timeOptions: Array<Option<string>> = Array.from({ length: 10 }).map((_, index) => {
  const value = `1${index}h00`
  return { key: value, label: value }
})

type DateTimePickerProps = {
  isDisabled?: boolean
}

export const DateTimePicker: React.FC<DateTimePickerProps> = ({ isDisabled }) => {
  const { i18n } = useI18n()

  return (
    <>
      <DatePicker
        isDateUnavailable={isDateUnavailable}
        isDisabled={isDisabled}
        isRequired
        label={i18n('domain.book.fields.date.label')}
        name={BOOK_FORM_KEYS.Date}
      />

      <Select
        isDisabled={isDisabled}
        isRequired
        label={i18n('domain.book.fields.hour.label')}
        name={BOOK_FORM_KEYS.Hour}
        options={timeOptions}
      />
    </>
  )
}
