import React from 'react'
import { screen } from '@testing-library/react'

import Home from './Home'
import { renderWithTheme } from '@/test/helpers'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home />)
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByText(/follow us/i)).toBeInTheDocument()
  })
})
