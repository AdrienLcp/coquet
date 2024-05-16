'use client'

import { addDays } from 'date-fns'
import React from 'react'
import type { DateValue } from 'react-aria-components'

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

export const DateTimePicker: React.FC = () => {
  const { i18n } = useI18n()

  const timeOptions: Array<Option<string>> = [
    { key: '10:00', label: '10:00' },
    { key: '11:00', label: '11:00' },
    { key: '12:00', label: '12:00' },
    { key: '13:00', label: '13:00' },
    { key: '14:00', label: '14:00' },
    { key: '15:00', label: '15:00' },
    { key: '16:00', label: '16:00' },
    { key: '17:00', label: '17:00' },
    { key: '18:00', label: '18:00' },
    { key: '19:00', label: '19:00' }
  ]

  return (
    <>
      <DatePicker
        isDateUnavailable={isDateUnavailable}
        isRequired
        label='Date'
      />

      <Select
        isRequired
        label='Hour'
        options={timeOptions}
      />
    </>
  )
}
