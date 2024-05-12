'use client'

import { useForm } from '@formspree/react'
import React from 'react'

import { MessageSent } from '@/(Pages)/book/message-sent'
import { Button } from '@/Components/button'
import { ComboBox } from '@/Components/combo-box'
import { Form } from '@/Components/form'
import { Option } from '@/Components/option'
import { TextArea } from '@/Components/text-area'
import { TextField } from '@/Components/text-field'
import { MassageKey } from '@/Domain/massages'
import { useI18n } from '@/I18n'

import './book-form.styles.sass'
import { Select } from '@/Components/select'

type BookFormProps = {
  formSpreeKey: string
}

type FieldValues = {
  contact: string
  massage: string
  date: string
  hour: string
  message: string
}

export const BookForm: React.FC<BookFormProps> = ({ formSpreeKey }) => {
  const [state, handleSubmit] = useForm<FieldValues>(formSpreeKey)
  const { i18n } = useI18n()

  if (state.succeeded) {
    return <MessageSent />
  }

  const massagesOptions: Array<Option<MassageKey>> = [
    {
      key: 'madero-therapy',
      label: i18n('domain.massages.madero-therapy.label')
    },
    {
      key: 'lymphatic-drainage',
      label: i18n('domain.massages.lymphatic-drainage.label')
    },
    {
      key: 'scalp',
      label: i18n('domain.massages.scalp.label')
    }
  ]

  return (
    <Form
      onSubmit={handleSubmit}
      isDisabled={state.submitting}
      className='book-form'
    >
      <div className='book-form__fields'>
        <TextField
          name='Nom'
          label={i18n('domain.book.fields.name.label')}
          placeholder={i18n('domain.book.fields.name.placeholder')}
          isRequired
        />

        <TextField
          name='Contact'
          label={i18n('domain.book.fields.email-or-phone.label')}
          placeholder={i18n('domain.book.fields.email-or-phone.placeholder')}
          description={i18n('domain.book.fields.email-or-phone.description')}
          isRequired
        />

        <ComboBox
          label='Massage'
          options={massagesOptions}
          placeholder='Select a massage'
          isRequired
        />

        <Select
          label='Massage 2'
          options={massagesOptions}
          placeholder='Select a massage'
          isRequired
        />

        {/* Add Massage Select */}

        {/* Add Date Select */}

        {/* Add Hour Select */}

        <TextArea
          name='Message'
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
  )
}
