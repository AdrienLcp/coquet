import React from 'react'

import { Section } from '@/Components/section'
import type { MassageKey } from '@/Domain/massages'
import { LymphaticDrainage } from '@/Features/Massages/lymphatic-drainage'
import { MaderoTherapie } from '@/Features/Massages/madero-therapy'
import { Scalp } from '@/Features/Massages/scalp'
import { getObjectEntries } from '@/Helpers/object'

import './massages.styles.sass'

const massages: Record<MassageKey, React.FC> = {
  'madero-therapy': MaderoTherapie,
  'lymphatic-drainage': LymphaticDrainage,
  'scalp': Scalp
}

export const Massages: React.FC = () => (
  <Section className='massages'>
    <ul>
      {getObjectEntries(massages).map(([key, Massage]) => (
        <li key={key}>
          <Massage />
        </li>
      ))}
    </ul>
  </Section>
)
