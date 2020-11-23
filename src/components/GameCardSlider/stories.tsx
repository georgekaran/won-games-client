import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import GameCardSlider, { GameCardSliderProps } from '.'
import { GameCardProps } from '@/components/GameCard'

const items: GameCardProps[] = [
  {
    img: 'https://gamespot1.cbsistatic.com/uploads/screen_kubrick/1591/15918215/3690642-cyberpunk.jpg',
    title: 'Cyberpunk 2077',
    developer: 'CD Project Red',
    price: 'R$ 230,00',
    promotionalPrice: 'R$ 210,00'
  },
  {
    img: 'https://www.gamerview.com.br/wp-content/uploads/2018/11/red_dead_redemption_2_bg-e1557756295124.jpg',
    title: 'Red Dead Redemption 2',
    developer: 'Rockstar Games',
    price: 'R$ 230,00',
    promotionalPrice: 'R$ 210,00'
  },
  {
    img: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/09/fifa-20-100-mejores-jugadores_0.jpg',
    title: 'Fifa 2020',
    developer: 'EA Games',
    price: 'R$ 230,00',
    promotionalPrice: 'R$ 210,00'
  },
  {
    img: 'https://gamespot1.cbsistatic.com/uploads/screen_kubrick/1591/15918215/3690642-cyberpunk.jpg',
    title: 'Cyberpunk 2077',
    developer: 'CD Project Red',
    price: 'R$ 230,00',
    promotionalPrice: 'R$ 210,00'
  },
  {
    img: 'https://www.gamerview.com.br/wp-content/uploads/2018/11/red_dead_redemption_2_bg-e1557756295124.jpg',
    title: 'Red Dead Redemption 2',
    developer: 'Rockstar Games',
    price: 'R$ 230,00',
    promotionalPrice: 'R$ 210,00'
  },
  {
    img: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/09/fifa-20-100-mejores-jugadores_0.jpg',
    title: 'Fifa 2020',
    developer: 'EA Games',
    price: 'R$ 230,00',
    promotionalPrice: 'R$ 210,00'
  }
]

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: {
    items
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameCardSliderProps> = (props) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider {...props} />
  </div>
)
