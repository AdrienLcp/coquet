'use client'

import { type AnimationProps, motion, type MotionProps as FramerMotionProps } from 'framer-motion'
import React from 'react'

type Animation = 'Scale'

type MotionProps = FramerMotionProps & {
  animation: Animation
}

const animationsMap: Record<Animation, AnimationProps> = {
  Scale: {
    initial: { scale: 5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: 'spring', duration: 0.7 }
  }
}

export const Motion: React.FC<MotionProps> = ({ animation, children, ...props }) => {
  const animationsProps = animationsMap[animation]

  return (
    <motion.div {...props} {...animationsProps}>
      {children}
    </motion.div>
  )
}