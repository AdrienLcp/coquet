'use client'

import Link from 'next/link'

import { Button } from '@/Components/button'
import { useI18n } from '@/I18n'

const NotFound: React.FC = () => {
  const { i18n } = useI18n()
  return (
    <div className='not-found'>
      <h2 className='not-found__title'>
        {i18n('pages.404.title')}
      </h2>

      <Link href='/'>
        <Button>
          {i18n('pages.404.goHome')}
        </Button>
      </Link>
    </div>
  )
}

export default NotFound
