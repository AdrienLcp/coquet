import { MassagesList } from '@/(Pages)/massages/massages-list'
import React from 'react'

const MassagesPage: React.FC = () => {

  return (
    <>
      <h1>Liste des Massages proposés</h1>

      <MassagesList />
    </>
  )
}

export default MassagesPage
