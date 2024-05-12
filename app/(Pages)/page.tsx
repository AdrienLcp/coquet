import React from 'react'

import { About } from '@/(Pages)/about'
import { Intro } from '@/(Pages)/intro'
import { Massages } from '@/Features/Massages/massages'
import { Opinions } from '@/(Pages)/opinions'
import { Separator } from '@/Components/separator'
import { MassagesLinks } from '@/Features/Massages/massages-links'
import { BookLink } from '@/(Pages)/book-link'

const HomePage: React.FC = async () => (
  <>
    <Intro />

    <Separator />

    <About />

    <Separator />

    <Massages />

    <Separator />

    <Opinions />

    <MassagesLinks />

    <BookLink />
  </>
)

export default HomePage
