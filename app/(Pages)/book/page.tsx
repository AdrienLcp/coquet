import React from 'react'

import { BookForm } from '@/(Pages)/book/book-form'
import { BookHeading } from '@/(Pages)/book/book-heading'
import { env } from '@/env'

const BookPage: React.FC = async () => {
  //! use search params if user click on a "book this massage" in a massage card

  return (
    <>
      <BookHeading />

      <BookForm formSpreeKey={env.FORM_SPREE_KEY} />
    </>
  )
}

export default BookPage
