'use client'

import { useForm } from '@formspree/react'
import { useSearchParams } from 'next/navigation'
import React from 'react'

import { MessageSent } from '@/(Pages)/book/message-sent'
import { Button } from '@/Components/button'
import { ComboBox } from '@/Components/combo-box'
import { Form } from '@/Components/form'
import { Option } from '@/Components/option'
import { Select } from '@/Components/select'
import { TextArea } from '@/Components/text-area'
import { TextField } from '@/Components/text-field'
import { Title } from '@/Components/title'
import { OFFERS_KEY, OfferKey, getDefaultOfferKeyForMassageKey } from '@/Domain/offers'
import { isMassageKey } from '@/Domain/massages'
import { useI18n } from '@/I18n'
import { MASSAGE_SEARCH_PARAM } from '@/Routes'

import './book-form.styles.sass'

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
  const [selectedMassage, setSelectedMassage] = React.useState<OfferKey | undefined>(undefined)
  const [state, handleSubmit] = useForm<FieldValues>(formSpreeKey)
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

          <Select
            defaultSelectedKey={selectedMassage}
            name='Massage'
            label={i18n('domain.book.fields.massage.label')}
            options={massagesOptions}
            placeholder={i18n('domain.book.fields.massage.placeholder')}
            isRequired
          />

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
    </>
  )
}
