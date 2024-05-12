'use client'

import type { StaticImageData } from 'next/image'
import React from 'react'

import { Image } from '@/Components/image'
import { useI18n } from '@/I18n'

import lymphaticDrainageDegree from '@/Assets/Images/degrees/lymphatic-drainage.jpg'
import maderoTherapyDegree from '@/Assets/Images/degrees/madero-therapy.jpg'
import maderoTherapyFaceDegree from '@/Assets/Images/degrees/madero-therapy-face.jpg'

import './degrees.styles.sass'

type Degree = {
  image: StaticImageData
  alt: string
}

export const Degrees: React.FC = () => {
  const { i18n } = useI18n()

  const degrees: Degree[] = [
    {
      image: lymphaticDrainageDegree,
      alt: i18n('layouts.about.images-alt.lymphatic-drainage-degree')
    },
    {
      image: maderoTherapyDegree,
      alt: i18n('layouts.about.images-alt.madero-therapy-degree')
    },
    {
      image: maderoTherapyFaceDegree,
      alt: i18n('layouts.about.images-alt.madero-therapy-face-degree')
    }
  ]

  return (
    <ul className='degrees'>
      {degrees.map((degree, index) => (
        <li key={index}>
          <Image
            src={degree.image}
            alt={degree.alt}
            className='degrees__image'
          />
        </li>
      ))}
    </ul>
  )
}
