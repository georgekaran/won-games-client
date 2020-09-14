import React from 'react'
import { RenderResult, screen } from '@testing-library/react'

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
    expect(screen.getByTestId('logo')).toHaveStyleRule('color', theme.colors.white)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('should change text color', () => {
    makeSut({ color: 'black' })
    expect(screen.getByTestId('logo')).toHaveStyleRule('color', theme.colors.black)
  })
})
