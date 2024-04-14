import type { MetadataRoute } from 'next'

const getManifest = () => {
  return {
    name: 'Le Moment Cocooning',
    short_name: 'LMC',
    description: 'Massages thérapeutiques à Vair-sur-Loire',
    lang: 'fr',
    start_url: '/',
    scope: '/',
    theme_color: '#0a0a0a',
    background_color: '#0a0a0a',
    display: 'browser',
    categories: ['Bien-être', 'Massage', 'Minceur', 'Relaxation', 'Thérapeutique'],
    icons: [
      {
        src: '/app/Assets/Logo/logo-x-large.png',
        type: 'image/png',
        sizes: '192x192'
      }
    ]
  } satisfies MetadataRoute.Manifest
}

export default getManifest
