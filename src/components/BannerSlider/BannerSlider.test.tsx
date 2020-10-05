import '@/test/match-media-mock'
import React from 'react'

import { BannerSlider } from '.'
import { BannerProps } from '@/components/Banner/Banner'
import { renderWithTheme } from '@/test/helpers'
import { RenderResult, screen } from '@testing-library/react'

const items: BannerProps[] = [
  {
    img: 'https://gamespot1.cbsistatic.com/uploads/screen_kubrick/1591/15918215/3690642-cyberpunk.jpg',
    title: 'Cyberpunk 2077',
    subtitle: '<p>Play the game now!</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/cyberpunk-2077'
  },
  {
    img: 'https://www.gamerview.com.br/wp-content/uploads/2018/11/red_dead_redemption_2_bg-e1557756295124.jpg',
    title: 'Red Dead Redemption 2',
    subtitle: '<p>Play the game now!</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/red-dead-redemption-2'
  }
]

const makeSut = (): RenderResult => renderWithTheme(<BannerSlider items={items} />)

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = makeSut()
    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render with 1 active item', () => {
    const { container } = makeSut()
    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(screen.getByRole('heading', { name: /cyberpunk 2077/i, hidden: false })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Red Dead Redemption 2/i, hidden: true })).toBeInTheDocument()
  })
})
