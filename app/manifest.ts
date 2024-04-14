import type { MetadataRoute } from 'next'

const manifest = {
  name: 'Le Moment Cocooning',
  short_name: 'LMC',
  description: 'Massages thérapeutiques à Vair-sur-Loire',
  lang: 'fr',
  start_url: '/',
  scope: '/',
  theme_color: '#0a0a0a',
  background_color: '#0a0a0a',
  display: 'browser',
  categories: ['Bien-être', 'Massage', 'Massothérapie', 'Minceur', 'Relaxation', 'Thérapeutique'],
  icons: [
    {
      src: '/app/Assets/Logo/logo-x-large.png',
      type: 'image/png',
      sizes: '192x192',
      purpose: 'badge'
    }
  ]
} satisfies MetadataRoute.Manifest

export default manifest
