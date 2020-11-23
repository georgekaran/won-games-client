import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Slider, { SliderProps, SliderSettings } from '.'
import styled from 'styled-components'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const settings: SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Slide = styled.div`
  background: black;
  width: 30rem;
  padding: 10rem 0;
  color: white;
  text-align: center;
`

export const Horizontal: Story<SliderProps> = (args) => (
  <Slider {...args} settings={settings} >
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
    <Slide>7</Slide>
  </Slider>
)

const verticalSettings: SliderSettings = {
  dots: true,
  vertical: true,
  verticalSwiping: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

export const Vertical: Story<SliderProps> = (args) => (
  <Slider {...args} settings={verticalSettings} >
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
    <Slide>7</Slide>
  </Slider>
)
