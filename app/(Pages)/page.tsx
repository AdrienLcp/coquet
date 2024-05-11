import React from 'react'

import { About } from '@/(Pages)/about'
import { Intro } from '@/(Pages)/intro'
import { Massages } from '@/Features/Massages/massages'
import { Opinions } from '@/(Pages)/opinions'
import { Separator } from '@/Components/separator'

const HomePage: React.FC = async () => (
  <>
    <Intro />

    <Separator />

    <About />

    <Separator />

    <Massages />

    <Separator />

    <Opinions />
  </>
)

export default HomePage
