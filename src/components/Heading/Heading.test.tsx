import React from 'react'
import { RenderResult, screen } from '@testing-library/react'

import Heading, { HeadingProps } from './Heading'
import { renderWithTheme } from '@/test/helpers'
import theme from '@/styles/theme'

const makeSut = ({ children, color = 'white', lineLeft = false }: HeadingProps): RenderResult => {
  return renderWithTheme(<Heading color={color} lineLeft={lineLeft}>{children}</Heading>)
}

describe('<Heading />', () => {
  test('should render with initial state', () => {
    const { container } = makeSut({ children: 'Random Heading' })
    const heading = screen.getByRole('heading', { name: /Random Heading/ })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyleRule('color', theme.colors.white)
    expect(heading).not.toHaveStyleRule('padding-left')
    expect(heading).not.toHaveStyleRule('padding-bottom')
    expect(container.firstChild).toMatchSnapshot()
  })

  test('should render Heading with black text if color black is provided', () => {
    makeSut({ children: 'Random Heading', color: 'black' })
    expect(screen.getByRole('heading', { name: /Random Heading/ })).toHaveStyleRule('color', theme.colors.black)
  })

  test('should present a line in the left if lineLeft is true', () => {
    makeSut({ children: 'Random Heading', lineLeft: true })
    const heading = screen.getByRole('heading', { name: /Random Heading/ })
    expect(heading).toHaveStyleRule('padding-left', theme.spacings.xxsmall)
    expect(heading).toHaveStyleRule('border-left', `0.7rem solid ${theme.colors.secondary}`)
  })
})
