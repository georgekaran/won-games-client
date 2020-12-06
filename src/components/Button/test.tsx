import React from 'react'
import { RenderResult, screen } from '@testing-library/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button, { ButtonProps, ButtonTypes } from '.'
import { renderWithTheme } from '@/test/helpers'
import theme from '@/styles/theme'

type SutProps = Omit<ButtonProps, 'children'> & ButtonTypes

const makeSut = ({ size = 'medium', fullWidth = false, icon = null, as = 'button', minimal = false, ...props }: SutProps = {}): RenderResult => {
  return renderWithTheme(<Button size={size} fullWidth={fullWidth} icon={icon} as={as} minimal={minimal} {...props}>Button</Button>)
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

  test('should render a minimal version', () => {
    makeSut({ icon: <AddShoppingCart data-testid="icon" />, minimal: true })
    const icon = screen.getByTestId('icon')
    expect(icon).toBeInTheDocument()
    const button = screen.getByRole('button', { name: /Button/i })
    expect(button).toHaveStyle({
      background: 'none',
      color: '#F231A5'
    })
    expect(button).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover'
      }
    )
  })

  test('should render as anchor if prop \'as\' is a', () => {
    makeSut({ as: 'a', href: '/link' })
    const buttonAsLink = screen.getByRole('link', { name: /Button/i })
    expect(buttonAsLink).toBeInTheDocument()
  })
})
