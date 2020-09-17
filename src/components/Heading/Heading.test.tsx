import React from 'react'
import { RenderResult, screen } from '@testing-library/react'

import { Heading, HeadingProps } from '.'
import { renderWithTheme } from '@/test/helpers'
import theme from '@/styles/theme'

type SutProps = Omit<HeadingProps, 'children'>

const makeSut = ({ color = 'white', lineLeft = false, lineBottom = false }: SutProps): RenderResult => {
  return renderWithTheme(<Heading color={color} lineLeft={lineLeft} lineBottom={lineBottom}>Random Heading</Heading>)
}

describe('<Heading />', () => {
  test('should render with initial state', () => {
    const { container } = makeSut({})
    const heading = screen.getByRole('heading', { name: /Random Heading/ })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyleRule('color', theme.colors.white)
    expect(heading).not.toHaveStyleRule('padding-left')
    expect(heading).not.toHaveStyleRule('padding-bottom')
    expect(container.firstChild).toMatchSnapshot()
  })

  test('should render Heading with black text if color black is provided', () => {
    makeSut({ color: 'black' })
    expect(screen.getByRole('heading', { name: /Random Heading/ })).toHaveStyleRule('color', theme.colors.black)
  })

  test('should present a line in the left if lineLeft is true', () => {
    makeSut({ lineLeft: true })
    const heading = screen.getByRole('heading', { name: /Random Heading/ })
    expect(heading).toHaveStyleRule('padding-left', theme.spacings.xxsmall)
    expect(heading).toHaveStyleRule('border-left', `0.7rem solid ${theme.colors.secondary}`)
  })

  test('should present a line in the bottom if lineBottom is true', () => {
    makeSut({ lineBottom: true })
    const heading = screen.getByRole('heading', { name: /Random Heading/ })
    expect(heading).toHaveStyleRule('margin-bottom', theme.spacings.medium)
    expect(heading).toHaveStyleRule(
      'background-color',
      `${theme.colors.primary}`, {
        modifier: '::after'
      }
    )
  })
})
