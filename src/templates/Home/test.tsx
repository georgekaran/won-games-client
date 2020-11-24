import React from 'react'
import { RenderResult, screen } from '@testing-library/react'

import Home from '.'
import { renderWithTheme } from '@/test/helpers'
import bannerMock from '@/components/BannerSlider/mock'
import gameCardSliderMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'

const homeProps = {
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

const makeSut = (): RenderResult => {
  return renderWithTheme(<Home {...homeProps} />)
}

describe('<Home />', () => {
  it('should render menu and footer', () => {
    makeSut()
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByText(/follow us/i)).toBeInTheDocument()
  })

  it('should render heading sections', () => {
    makeSut()
    expect(screen.getByRole('heading', { name: /News/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Most Popular/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Upcomming/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Free Games/i })).toBeInTheDocument()
  })

  it('should render Banner, Highlight and GameCard', () => {
    makeSut()
    // GameCard + Banner
    expect(screen.getAllByText(/Red Dead Redemption 2/i)).toHaveLength(7)
    // highlight
    expect(screen.getAllByText(/Read Dead it's back/i)).toHaveLength(3)
  })
})
