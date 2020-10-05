import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { BannerSlider, BannerSliderProps } from '.'
import { BannerProps } from '@/components/Banner/Banner'

const items: BannerProps[] = [
  {
    img: 'https://gamespot1.cbsistatic.com/uploads/screen_kubrick/1591/15918215/3690642-cyberpunk.jpg',
    title: 'Cyberpunk 2077',
    subtitle: '<p>Play the Cyberpunk 2077 now!</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/cyberpunk-2077'
  },
  {
    img: 'https://www.gamerview.com.br/wp-content/uploads/2018/11/red_dead_redemption_2_bg-e1557756295124.jpg',
    title: 'Red Dead Redemption 2',
    subtitle: '<p>Play the Red Dead Redemption 2 now!</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/red-dead-redemption-2'
  },
  {
    img: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/09/fifa-20-100-mejores-jugadores_0.jpg',
    title: 'Fifa 2020',
    subtitle: '<p>Play the Fifa 2020 now!</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/fifa-2020'
  }
]

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: {
    items
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)
