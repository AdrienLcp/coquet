'use client'

import { useForm } from '@formspree/react'
import { useSearchParams } from 'next/navigation'
import React from 'react'

import { DateTimePicker } from '@/(Pages)/book/date-time-picker'
import { MessageSent } from '@/(Pages)/book/message-sent'
import { Button } from '@/Components/button'
import { Form } from '@/Components/form'
import { Option } from '@/Components/option'
import { Select } from '@/Components/select'
import { TextArea } from '@/Components/text-area'
import { TextField } from '@/Components/text-field'
import { Title } from '@/Components/title'
import { isMassageKey } from '@/Domain/massages'
import { OfferKey, OFFERS_KEY, getDefaultOfferKeyForMassageKey } from '@/Domain/offers'
import { useI18n } from '@/I18n'
import { MASSAGE_SEARCH_PARAM } from '@/Routes'

import './book-form.styles.sass'

type BookFormProps = {
  formSpreeKey: string
}

type BookFormFieldValues = {
  contact: string
  date: string
  hour: string
  massage: string
  message: string
  name: string
}

export const BOOK_FORM_KEYS = {
  Contact: 'Contact',
  Date: 'Date',
  Hour: 'Heure',
  Massage: 'Massage',
  Message: 'Message',
  Name: 'Nom'
}

type FormKey = typeof BOOK_FORM_KEYS[keyof typeof BOOK_FORM_KEYS]

export const BookForm: React.FC<BookFormProps> = ({ formSpreeKey }) => {
  const [selectedMassage, setSelectedMassage] = React.useState<OfferKey | undefined>(undefined)
  const [state, handleSubmit] = useForm<BookFormFieldValues>(formSpreeKey)
  const { i18n } = useI18n()

  const searchParams = useSearchParams()
  const defaultMassage = searchParams.get(MASSAGE_SEARCH_PARAM)

  React.useEffect(() => {
    if (isMassageKey(defaultMassage)) {
      const offerKey = getDefaultOfferKeyForMassageKey(defaultMassage)
      setSelectedMassage(offerKey)
    }
  }, [defaultMassage])

  if (state.succeeded) {
    return <MessageSent />
  }

  const massagesOptions: Array<Option<OfferKey>> = OFFERS_KEY.map(key => {
    const name = i18n(`domain.offers.${key}.label`)
    const time = i18n(`domain.offers.${key}.time`)
    const price = i18n(`domain.offers.${key}.price`)
    const label = `${name} - ${time} (${price})`

    return { key, label }
  })

  const handleBookFormSubmit = (formData: FormData) => {
    const getFormValue = (key: FormKey) => {
      return String(formData.get(key))
    }

    const contact = getFormValue(BOOK_FORM_KEYS.Contact)
    const date = getFormValue(BOOK_FORM_KEYS.Date)
    const hour = getFormValue(BOOK_FORM_KEYS.Hour)
    const massage = getFormValue(BOOK_FORM_KEYS.Massage)
    const message = getFormValue(BOOK_FORM_KEYS.Message)
    const name = getFormValue(BOOK_FORM_KEYS.Name)

    const formattedDate = new Date(date).toLocaleDateString()

    const values: BookFormFieldValues = {
      name,
      contact,
      massage,
      date: formattedDate,
      hour,
      message
    }

    handleSubmit(values)
  }

  return (
    <>
      <div className='book-form__heading'>
        <Title>
          {i18n('domain.book.title')}
        </Title>

        <p>
          {i18n('domain.book.subtitle')}
        </p>
      </div>
    
      <Form
        action={handleBookFormSubmit}
        isDisabled={state.submitting}
        className='book-form'
      >
        <div className='book-form__fields'>
          <TextField
            name={BOOK_FORM_KEYS.Name}
            label={i18n('domain.book.fields.name.label')}
            placeholder={i18n('domain.book.fields.name.placeholder')}
            isRequired
          />

          <TextField
            name={BOOK_FORM_KEYS.Contact}
            label={i18n('domain.book.fields.email-or-phone.label')}
            placeholder={i18n('domain.book.fields.email-or-phone.placeholder')}
            description={i18n('domain.book.fields.email-or-phone.description')}
            isRequired
          />

          <Select
            defaultSelectedKey={selectedMassage}
            name={BOOK_FORM_KEYS.Massage}
            label={i18n('domain.book.fields.massage.label')}
            options={massagesOptions}
            placeholder={i18n('domain.book.fields.massage.placeholder')}
            isRequired
          />

          <DateTimePicker />

          <TextArea
            name={BOOK_FORM_KEYS.Message}
            label={i18n('domain.book.fields.more.label')}
          />
        </div>

        <Button
          type='submit'
          className='book-form__submit-button'
        >
          {i18n('domain.book.send')}
        </Button>
      </Form>
    </>
  )
}
