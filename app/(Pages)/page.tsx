import React from 'react'

import { Intro } from '@/(Pages)/intro'
import { About } from '@/(Pages)/about'
import { Separator } from '@/Components/separator'

const HomePage: React.FC = () => (
  <>
    <Intro />

    <Separator />

    <About />
  </>
)

export default HomePage
