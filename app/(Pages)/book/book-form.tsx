'use client'

import { useForm } from '@formspree/react'
import React from 'react'

import { Button } from '@/Components/button'
import { Form } from '@/Components/form'
import { TextArea } from '@/Components/text-area'
import { TextField } from '@/Components/text-field'
import { useI18n } from '@/I18n'

import './book-form.styles.sass'
import { Option } from '@/Components/option'
import { MassageKey } from '@/Domain/massages'
import { ComboBox } from '@/Components/combo-box'

type BookFormProps = {
  formSpreeKey: string
}

const MessageSent: React.FC = () => (
  <div className='book-form__message-sent'>
    <p>Message sent!</p>
  </div>
)

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

  if (state.errors !== null) {
    const formErrors = state.errors.getFormErrors()
    const errors = state.errors.getAllFieldErrors()

    const test = formErrors[0]
    const message = test.message
  }

  const massagesOptions: Array<Option<MassageKey>> = [
    {
      key: 'lymphatic-drainage',
      label: 'Lymphatic Drainage',
      onClick: () => console.log('Lymphatic Drainage')
    },
    {
      key: 'maderotherapy-and-lymphatic-drainage',
      label: 'Maderotherapy and Lymphatic Drainage',
      onClick: () => console.log('Maderotherapy and Lymphatic Drainage')
    },
    {
      key: 'maderotherapy-body',
      label: 'maderotherapy-body',
      onClick: () => console.log('maderotherapy-body')
    },
    {
      key: 'maderotherapy-body-and-face',
      label: 'Maderotherapy Body and Face',
      onClick: () => console.log('Maderotherapy Body and Face')
    },
    {
      key: 'maderotherapy-face',
      label: 'Maderotherapy Face',
      onClick: () => console.log('Maderotherapy Face')
    },
    {
      key: 'scalp',
      label: 'Scalp',
      onClick: () => console.log('Scalp')
    },
    {
      key: 'zone',
      label: 'Zone',
      onClick: () => console.log('Zone')
    },
    {
      key: 'zone-mixed-methods',
      label: 'Zone Mixed Methods',
      onClick: () => console.log('Zone Mixed Methods')
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
        />

{/* add descriptions in textField ? */}

        <TextField
          name='Contact'
          label={i18n('domain.book.fields.email-or-phone.label')}
          placeholder={i18n('domain.book.fields.email-or-phone.placeholder')}
          description={i18n('domain.book.fields.email-or-phone.description')}
        />

        <ComboBox options={massagesOptions} label='Massage' />

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
        Send
      </Button>
    </Form>
  )
}
