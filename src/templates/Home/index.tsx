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

export type HomeProps = {
  banners: BannerProps[]
  newGamesSlider: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingGamesHighlight: HighlightProps
  upcomingMoreGames: GameCardProps[]
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
  upcomingGames,
  upcomingGamesHighlight,
  upcomingMoreGames
}: HomeProps) => (
  <section>
    <Container>
      <Menu />
      <BannerSlider items={banners} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        News
      </Heading>
      <GameCardSlider items={newGamesSlider} color="black" />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Most Popular
      </Heading>
      <Highlight {...mostPopularHighlight} />
      <GameCardSlider items={mostPopularGames} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Upcomming
      </Heading>
      <GameCardSlider items={upcomingGames} />
      <Highlight {...upcomingGamesHighlight} />
      <GameCardSlider items={upcomingMoreGames} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Free Games
      </Heading>
      <Highlight {...freeHighlight} />
      <GameCardSlider items={freeGames} />
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
