import React from 'react'

import { Section } from '@/Components/section'
import { Separator } from '@/Components/separator'
import { LymphaticDrainage } from '@/Features/Massages/lymphatic-drainage'
import { MaderoTherapie } from '@/Features/Massages/madero-therapy'
import { Scalp } from '@/Features/Massages/scalp'

export const Massages: React.FC = () => (
  <Section>
    <MaderoTherapie />

    <Separator />

    <LymphaticDrainage />

    <Separator />

    <Scalp />
  </Section>
)
