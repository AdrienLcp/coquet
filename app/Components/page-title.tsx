'use client'

import React from 'react'

import { type MassageKey } from '@/Domain/massages'
import { useI18n } from '@/I18n'
import { type RouteKey } from '@/Routes'

import './page-title.styles.sass'

type TitleKey = RouteKey | MassageKey

type PageTitleProps = {
  pageKey: TitleKey
}

export const PageTitle: React.FC<PageTitleProps> = ({ pageKey }) => {
  const { i18n } = useI18n()

  const pageTitles: Record<TitleKey, string> = {
    'about': i18n('pages.about.title'),
    'home': i18n('pages.home.title'),
    'lymphatic-drainage': i18n('domain.massages.lymphatic-drainage.title'),
    'maderotherapy-body': i18n('domain.massages.maderotherapy-body.title'),
    'maderotherapy-body-and-face': i18n('domain.massages.maderotherapy-body-and-face.title'),
    'maderotherapy-face': i18n('domain.massages.maderotherapy-face.title'),
    'massages': i18n('pages.massages.title'),
    'scalp': i18n('domain.massages.scalp.title'),
    'zone': i18n('domain.massages.zone.title'),
    'zone-mixed-methods': i18n('domain.massages.zone-mixed-methods.title')
  }

  return (
    <h1 className='page-title'>
      {pageTitles[pageKey]}
    </h1>
  )
}
