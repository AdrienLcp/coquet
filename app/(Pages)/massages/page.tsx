import React from 'react'

import { MassagesList } from '@/(Pages)/massages/massages-list'
import { PageTitle } from '@/Components/page-title'

const MassagesPage: React.FC = async () => (
  <>
    <PageTitle pageKey='massages' />
    <MassagesList />
  </>
)

export default MassagesPage
