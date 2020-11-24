import Home, { HomeProps } from '@/templates/Home'
import bannerMock from '@/components/BannerSlider/mock'
import gameCardSliderMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'

const Index = (props: HomeProps) => {
  return (
    <Home {...props} />
  )
}

export function getServerSideProps () {
  return {
    props: {
      banners: bannerMock,
      newGamesSlider: gameCardSliderMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gameCardSliderMock,
      upcommingGames: gameCardSliderMock,
      upcommingGamesHighlight: highlightMock,
      upcommingMoreGames: gameCardSliderMock,
      freeGames: gameCardSliderMock,
      freeHighlight: highlightMock
    }
  }
}

export default Index
