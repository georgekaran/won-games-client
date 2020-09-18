import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from './Banner'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://gamespot1.cbsistatic.com/uploads/screen_kubrick/1591/15918215/3690642-cyberpunk.jpg',
    title: 'Cyberpunk 2077',
    subtitle: '<p>Play the Cyberpunk 2077 now!</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/cyberpunk-2077'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => <Banner {...args} />
