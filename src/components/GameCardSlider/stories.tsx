import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import GameCardSlider, { GameCardSliderProps } from '.'
import items from './mock'

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
