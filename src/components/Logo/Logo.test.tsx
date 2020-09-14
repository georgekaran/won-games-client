import React from 'react'
import { RenderResult, screen } from '@testing-library/react'
import faker from 'faker'
import 'jest-styled-components'

import Logo, { LogoProps } from './Logo'
import { renderWithTheme } from '@/test/helpers'
import theme from '@/styles/theme'

const makeSut = ({ color = 'white', size = 'normal', hideOnMobile = false }: LogoProps = {}): RenderResult => {
  return renderWithTheme(<Logo color={color} size={size} hideOnMobile={hideOnMobile} />)
}

describe('<Logo />', () => {
  test('should render with correct initial state', () => {
    const { container } = makeSut()
    const logo = screen.getByTestId('logo')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveStyleRule('color', theme.colors.white)
    expect(logo).toHaveStyleRule('width', '11rem')
    expect(logo).toHaveStyleRule('height', '3.3rem')
    expect(logo.firstChild).toHaveAttribute('role', 'img')
    expect(logo.firstChild).toHaveAttribute('aria-label', 'Won Games')
    expect(container.firstChild).toMatchSnapshot()
  })

  test('should change text color', () => {
    const color = faker.random.arrayElement<'white' | 'black'>(['white', 'black'])
    makeSut({ color })
    expect(screen.getByTestId('logo')).toHaveStyleRule('color', theme.colors[color])
  })

  test('should render a bigger Logo when size large is provided', () => {
    makeSut({ size: 'large' })
    const logo = screen.getByTestId('logo')
    expect(logo).toHaveStyleRule('width', '20rem')
    expect(logo).toHaveStyleRule('height', '5.9rem')
  })

  test('should hide text if hideOnMobile is true', () => {
    makeSut({ hideOnMobile: true })
    expect(screen.getByTestId('logo')).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
