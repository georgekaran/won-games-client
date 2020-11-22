import React from 'react'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Menu } from '@/components/Menu'

export type HomeProps = {}

const Home = () => (
  <section>
    <Container>
      <Menu />
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
