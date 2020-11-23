import React from 'react'
import Link from 'next/link'
import * as S from './styles'

import Logo from '@/components/Logo'
import Heading from '@/components/Heading'

export type FooterProps = {}

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>

        <a href="malito:sac@wongames.com">sac@wongames.com</a>
        <a href="phone:+55165545254">55165545254</a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
          <a href="#">Youtube</a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>Store</a>
          </Link>
          <Link href="/">
            <a href="#">Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>

        <nav aria-labelledby="footer-contact">
          <span>Lore asdasd</span>
          <span>Lore asdasd</span>
          <span>Lore asdasd</span>
        </nav>
      </S.Column>
    </S.Content>

    <S.Copyright>
      Won Games 2020 ° All rights reserved.
    </S.Copyright>
  </S.Wrapper>
)

export default Footer
