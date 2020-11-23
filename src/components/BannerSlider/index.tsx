import React from 'react'
import { Settings } from 'react-slick'

import * as S from './styles'
import Slider from '@/components/Slider'
import Banner, { BannerProps } from '@/components/Banner'

export type BannerSliderProps = {
  items: BannerProps[]
}

const settings: Settings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map(item => <Banner key={item.title} {...item} />)}
    </Slider>
  </S.Wrapper>
)

export default BannerSlider
