import React from 'react'
import { screen } from '@testing-library/react'

import Ribbon from './Ribbon'
import { renderWithTheme } from '@/test/helpers'

describe('<Ribbon />', () => {
  it('should render with initial state', () => {
    const { container } = renderWithTheme(<Ribbon>Best Seller</Ribbon>)
    expect(container.firstChild).toMatchSnapshot()
    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
  })
})
