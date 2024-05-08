'use client'

import { useForm } from '@formspree/react'
import React from 'react'

import { Button } from '@/Components/button'
import { Form } from '@/Components/form'
import { TextArea } from '@/Components/text-area'
import { TextField } from '@/Components/text-field'
import { useI18n } from '@/I18n'

import './book-form.styles.sass'

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
