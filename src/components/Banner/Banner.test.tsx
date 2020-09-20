import React from 'react'
import { screen, RenderResult } from '@testing-library/react'

import { renderWithTheme } from '@/test/helpers'
import { mockBannerData } from '@/components/test/mocks'
import { Banner, BannerProps } from '.'

type SutProps = Partial<BannerProps>

const makeSut = ({
  img = mockBannerData.img,
  title = mockBannerData.title,
  subtitle = mockBannerData.subtitle,
  buttonLabel = mockBannerData.buttonLabel,
  buttonLink = mockBannerData.buttonLink,
  ribbon = '',
  ...props
}: SutProps): RenderResult => {
  return renderWithTheme(
    <Banner
      img={img}
      title={title}
      subtitle={subtitle}
      buttonLabel={buttonLabel}
      buttonLink={buttonLink}
      ribbon={ribbon}
      {...props}
    />)
}

describe('<Banner />', () => {
  test('should render with initial state correctly', () => {
    makeSut({})
    expect(screen.getByRole('heading', { name: mockBannerData.title })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: mockBannerData.subtitle })).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', mockBannerData.img)
    expect(screen.getByRole('link')).toHaveTextContent(mockBannerData.buttonLabel)
    expect(screen.getByRole('link')).toHaveAttribute('href', mockBannerData.buttonLink)
  })

  test('should render a Ribbon', () => {
    makeSut({
      ribbon: 'My Ribbon',
      ribbonSize: 'small',
      ribbonColor: 'secondary'
    })

    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
