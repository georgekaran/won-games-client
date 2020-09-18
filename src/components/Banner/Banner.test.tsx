import React from 'react'
import faker from 'faker'
import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/test/helpers'
import { Banner } from '.'

const bannerData = {
  img: faker.image.imageUrl(),
  title: faker.random.words(3),
  subtitle: faker.random.words(8),
  buttonLabel: faker.random.words(2),
  buttonLink: faker.internet.url()
}

describe('<Banner />', () => {
  test('should render with initial state correctly', () => {
    renderWithTheme(<Banner {...bannerData} />)
    expect(screen.getByRole('heading', { name: bannerData.title })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: bannerData.subtitle })).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', bannerData.img)
    expect(screen.getByRole('link')).toHaveTextContent(bannerData.buttonLabel)
    expect(screen.getByRole('link')).toHaveAttribute('href', bannerData.buttonLink)
  })
})
