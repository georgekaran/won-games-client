import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import MediaMatch from './MediaMatch'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: Story = () => <MediaMatch>Only on Desktop</MediaMatch>
