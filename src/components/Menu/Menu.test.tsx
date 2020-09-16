import React from 'react'
import { screen } from '@testing-library/react'

import Menu from './Menu'
import { renderWithTheme } from '@/test/helpers'

describe('<Menu />', () => {
  test('should render with initial state', () => {
    const { container } = renderWithTheme(<Menu />)
    expect(container.firstChild).toMatchSnapshot()
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
    expect(screen.getByTestId('logo')).toBeInTheDocument()
  })
})
