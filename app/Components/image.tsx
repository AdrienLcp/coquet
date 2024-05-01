import NextImage, { type ImageProps } from 'next/image'
import React from 'react'

import { classNames } from '@/Helpers/styles'

import './image.styles.sass'

const DEFAULT_IMAGE_SIZE = 200

export const Image: React.FC<ImageProps> = ({ className, ...props }) => (
  <NextImage
    loading='lazy'
    fetchPriority='low'
    width={DEFAULT_IMAGE_SIZE}
    height={DEFAULT_IMAGE_SIZE}
    {...props}
    className={classNames('image', className)}
  />
)
