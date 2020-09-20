import React from 'react'
import { RenderResult, screen } from '@testing-library/react'

import { Ribbon, RibbonProps } from '.'
import { renderWithTheme } from '@/test/helpers'

type SutProps = Partial<RibbonProps>

const makeSut = ({ children = 'Best Seller', color = 'primary' }: SutProps): RenderResult => {
  return renderWithTheme(<Ribbon color={color}>{children}</Ribbon>)
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
})
