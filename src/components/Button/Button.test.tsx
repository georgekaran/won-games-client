import React from 'react'
import { RenderResult, screen } from '@testing-library/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button, { ButtonProps } from './Button'
import { renderWithTheme } from '@/test/helpers'
import theme from '@/styles/theme'

type SutProps = Pick<ButtonProps, 'size' | 'fullWidth' | 'icon'>

const makeSut = ({ size = 'medium', fullWidth = false, icon = null }: SutProps = {}): RenderResult => {
  return renderWithTheme(<Button size={size} fullWidth={fullWidth} icon={icon}>Button</Button>)
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

  test('should render small if small size is provided', () => {
    makeSut({ size: 'small' })
    const button = screen.getByRole('button', { name: /Button/ })
    expect(button).toHaveStyleRule('height', '3rem')
    expect(button).toHaveStyleRule('font-size', theme.font.sizes.xsmall)
    expect(button).toHaveStyleRule('padding', theme.spacings.xxsmall)
  })

  test('should render large if large size is provided', () => {
    makeSut({ size: 'large' })
    const button = screen.getByRole('button', { name: /Button/ })
    expect(button).toHaveStyleRule('height', '5rem')
    expect(button).toHaveStyleRule('font-size', theme.font.sizes.medium)
    expect(button).toHaveStyleRule('padding', `${theme.spacings.xxsmall} ${theme.spacings.xlarge}`)
  })

  test('should render fullWidth if prop is provided', () => {
    makeSut({ fullWidth: true })
    const button = screen.getByRole('button', { name: /Button/ })
    expect(button).toHaveStyleRule('width', '100%')
  })

  test('should render icon if an icon is provided', () => {
    makeSut({ icon: <AddShoppingCart data-testid="icon" /> })
    const icon = screen.getByTestId('icon')
    expect(icon).toBeInTheDocument()
    expect(screen.getByText(/Button/)).toBeInTheDocument()
  })
})
