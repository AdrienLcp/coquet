import React from 'react'

import { BookForm } from '@/(Pages)/book/book-form'
import { env } from '@/env'

const BookPage: React.FC = async () => {
  //! use search params if user click on a "book this massage" in a massage card

  return (
    <>
      <BookForm formSpreeKey={env.FORM_SPREE_KEY} />
    </>
  )
}

export default BookPage
