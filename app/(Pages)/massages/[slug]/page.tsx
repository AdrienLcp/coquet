import { notFound } from 'next/navigation'
import React from 'react'

import { PageTitle } from '@/Components/page-title'
import { isMassageKey } from '@/Domain/massages'
import type { PageProps } from '@/Routes/pages.types'

type MassageDetails = {

}

const MassagePage: React.FC<PageProps> = async ({ params }) => {
  const massageKey = params.slug

  const isMassageKeyValid = isMassageKey(massageKey)

  if (!isMassageKeyValid) {
    notFound()
  }

  return (
    <>
      <PageTitle pageKey={massageKey} />


    </>
  )
}

export default MassagePage
