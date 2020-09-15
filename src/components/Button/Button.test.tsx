import React from 'react'
import { RenderResult, screen } from '@testing-library/react'

import Button, { ButtonProps } from './Button'
import { renderWithTheme } from '@/test/helpers'
import theme from '@/styles/theme'

type SutProps = Pick<ButtonProps, 'size'>

const makeSut = ({ size = 'medium' }: SutProps = {}): RenderResult => {
  return renderWithTheme(<Button size={size}>Button</Button>)
}

describe('<Button />', () => {
  test('should render with correct initial state', () => {
    const { container } = makeSut()
    expect(container.firstChild).toMatchSnapshot()
    const button = screen.getByRole('button', { name: /Button/ })
    expect(button).toHaveStyleRule('height', '4rem')
    expect(button).toHaveStyleRule('font-size', theme.font.sizes.small)
    expect(button).toHaveStyleRule('padding', `${theme.spacings.xxsmall} ${theme.spacings.medium}`)
  })

  test('should Button render small if small size is provided', () => {
    const { container } = makeSut({ size: 'small' })
    expect(container.firstChild).toMatchSnapshot()
    const button = screen.getByRole('button', { name: /Button/ })
    expect(button).toHaveStyleRule('height', '3rem')
    expect(button).toHaveStyleRule('font-size', theme.font.sizes.xsmall)
    expect(button).toHaveStyleRule('padding', theme.spacings.xxsmall)
  })
})
