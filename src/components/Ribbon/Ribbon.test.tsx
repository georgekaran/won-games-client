import React from 'react'
import { RenderResult, screen } from '@testing-library/react'

import { Ribbon, RibbonProps } from '.'
import { renderWithTheme } from '@/test/helpers'

type SutProps = Partial<RibbonProps>

const makeSut = ({ children = 'Best Seller' }: SutProps): RenderResult => {
  return renderWithTheme(<Ribbon>{children}</Ribbon>)
}

describe('<Ribbon />', () => {
  it('should render with initial state', () => {
    const { container } = makeSut({})
    expect(container.firstChild).toMatchSnapshot()
    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
  })
})
