'use client'

import Link from 'next/link'
import React from 'react'

import { Title } from '@/Components/title'
import { MassageKey } from '@/Domain/massages'
import { classNames } from '@/Helpers/styles'
import { useI18n } from '@/I18n'
import { getBookWithMassageHref } from '@/Routes'

import './massage-wrapper.styles.sass'

type MassageWrapperProps = React.ComponentProps<'article'> & {
  massageKey: MassageKey
}

export const MassageWrapper: React.FC<MassageWrapperProps> = ({
  className,
  children,
  massageKey,
  title,
  ...props
}) => {
  const { i18n } = useI18n()

  return (
    <article
      {...props}
      id={massageKey}
      className={classNames('massage-wrapper', className)}
    >
      {title !== undefined && (
        <Title tag='h4'>
          {title}
        </Title>
      )}

      <div className='massage-wrapper__box'>
        {children}
      </div>

      <Link
        className='massage-wrapper__link'
        href={getBookWithMassageHref(massageKey)}
      >
        {i18n('domain.massages.book-this-massage')}
      </Link>
    </article>
  )
}
