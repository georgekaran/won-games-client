import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { GameCard, GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://steamcdn-a.akamaihd.net/steam/apps/1239430/header.jpg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 210,00'
  },
  argTypes: {
    onFav: {
      action: 'clicked favorite'
    },
    ribbon: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}
