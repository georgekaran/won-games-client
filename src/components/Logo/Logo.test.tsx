import React from 'react'
import { RenderResult, screen } from '@testing-library/react'
import faker from 'faker'

import Logo, { LogoProps } from './Logo'
import { renderWithTheme } from '@/test/helpers'
import theme from '@/styles/theme'

const makeSut = ({ color = 'white' }: LogoProps = {}): RenderResult => {
  return renderWithTheme(<Logo color={color} />)
}

describe('<Logo />', () => {
  test('should render with correct initial state', () => {
    const { container } = makeSut()
    const logo = screen.getByTestId('logo')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveStyleRule('color', theme.colors.white)
    expect(logo.firstChild).toHaveAttribute('role', 'img')
    expect(logo.firstChild).toHaveAttribute('aria-label', 'Won Games')
    expect(container.firstChild).toMatchSnapshot()
  })

  test('should change text color', () => {
    const color = faker.random.arrayElement<'white' | 'black'>(['white', 'black'])
    makeSut({ color })
    expect(screen.getByTestId('logo')).toHaveStyleRule('color', theme.colors[color])
  })
})
