import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight from './Highlight'

export default {
  title: 'Highlight',
  component: Highlight
} as Meta

export const Default: Story = () => <Highlight />
