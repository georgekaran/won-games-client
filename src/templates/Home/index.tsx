import React from 'react'

import { Container } from '@/components/Container'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import Heading from '@/components/Heading'
import { BannerProps } from '@/components/Banner'
import { GameCardProps } from '@/components/GameCard'
import Highlight, { HighlightProps } from '@/components/Highlight'
import BannerSlider from '@/components/BannerSlider'
import GameCardSlider from '@/components/GameCardSlider'

import * as S from './styles'

export type HomeProps = {
  banners: BannerProps[]
  newGamesSlider: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingGamesHighlight: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGamesSlider,
  mostPopularHighlight,
  freeGames,
  freeHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingGamesHighlight,
  upcommingMoreGames
}: HomeProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary">
          News
        </Heading>

        <GameCardSlider items={newGamesSlider} color="black" />
      </Container>
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>
        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} />
      </S.SectionMostPopular>

      <S.SectionUpcoming>
        <Heading lineLeft lineColor="secondary">
          Upcomming
        </Heading>
        <GameCardSlider items={upcommingGames} />
        <Highlight {...upcommingGamesHighlight} />
        <GameCardSlider items={upcommingMoreGames} />
      </S.SectionUpcoming>

      <S.SectionFreeGames>
        <Heading lineLeft lineColor="secondary">
          Free games
        </Heading>
        <Highlight {...freeHighlight} />
        <GameCardSlider items={freeGames} />
      </S.SectionFreeGames>
    </Container>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
