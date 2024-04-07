import type { Metadata } from 'next'

import manifest from '../../manifest.json'

const KEYWORDS = [
  'amincissant',
  'anti-cellulite',
  'beauté',
  'bien-être',
  'bienfaits',
  'cocooning',
  'corps',
  'massage',
  'massage corps',
  'massages',
  'massothérapeute',
  'massothérapie',
  'massothérapeutique',
  'minceur',
  'relaxation',
  'thérapeutique'
]

export const APP = {
  NAME: manifest.name,
  SHORT_NAME: manifest.short_name,
  TITLE: {
    default: manifest.name,
    template: '%s | Massages thérapeutiques à Vair-sur-Loire'
  },
  DESCRIPTION: manifest.description,
  URL: manifest.homepage_url,
  IMAGES: [
    {
      url: '/Assets/Logo/logo-x-large.png',
      width: 800,
      height: 800,
      alt: 'Logo de Le Moment Cocooning'
    }
  ],
  CREATOR: {
    NAME: 'Marie Ploteau',
    EMAILS: ['lmc.massages@gmail.com'],
    PHONE_NUMBERS: ['06.62.46.03.13']
  },
  LOCALE: manifest.default_locale,
  ALTERNATE_LOCALES: ['en-US', 'es-ES'],
  COUNTRY_NAME: 'France',
  KEYWORDS: KEYWORDS,
  ICONS: [
    {
      rel: 'icon',
      url: '/Assets/Logo/logo-x-large.png',
    },
    {
      rel: 'apple-touch-icon',
      url: '/Assets/Logo/logo-x-large.png',
    }
  ]
}

export const COMMON_METADATA: Metadata = {
  metadataBase: new URL(APP.URL),
  title: APP.TITLE,
  description: APP.DESCRIPTION,
  applicationName: APP.NAME,
  authors: [
    {
      name: APP.CREATOR.NAME,
      url: APP.URL
    }
  ],
  generator: 'Next.js',
  keywords: APP.KEYWORDS,
  referrer: 'origin',
  creator: APP.CREATOR.NAME,
  publisher: 'Vercel',
  robots: {
    follow: true,
    index: true
  },
  icons: APP.ICONS,
  manifest: '/manifest.json',
  openGraph: {
    determiner: '',
    type: 'website',
    url: APP.URL,
    title: APP.TITLE,
    description: APP.DESCRIPTION,
    siteName: APP.NAME,
    emails: APP.CREATOR.EMAILS,
    phoneNumbers: APP.CREATOR.PHONE_NUMBERS,
    locale: APP.LOCALE,
    images: APP.IMAGES,
    countryName: APP.COUNTRY_NAME,
    alternateLocale: APP.ALTERNATE_LOCALES
  },
  twitter: {

  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true
  },
  assets: [
    '/app/Assets/Images',
    '/app/Assets/Logo'
  ],
  category: 'Bien-être'
}
