import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Highlight, HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead it\'s back',
    subtitle: 'Come see John\'s new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2',
    backgroundImage: 'https://alexanderskogberg.com/wp-content/uploads/2018/12/featured-read-dead-redemption-2-1400x640.jpg'
  }
} as Meta
export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: 'https://i.imgur.com/dQoZ45D.png'
}
