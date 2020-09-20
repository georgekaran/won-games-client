import React from 'react'
import { RenderResult, screen } from '@testing-library/react'

import { Ribbon, RibbonProps } from '.'
import { renderWithTheme } from '@/test/helpers'

type SutProps = Partial<RibbonProps>

const makeSut = ({ children = 'Best Seller', color = 'primary', size = 'normal' }: SutProps): RenderResult => {
  return renderWithTheme(<Ribbon color={color} size={size}>{children}</Ribbon>)
}

describe('<Ribbon />', () => {
  it('should render with initial state', () => {
    const { container } = makeSut({})
    expect(container.firstChild).toMatchSnapshot()
    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
  })

  it('should render with primary color', () => {
    makeSut({})
    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })

  it('should render with secondary color', () => {
    makeSut({ color: 'secondary' })
    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render with the normal size as default', () => {
    makeSut({})
    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render with the small size if prop is provided', () => {
    makeSut({ size: 'small' })
    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
