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

  it('should heading sections', () => {
    renderWithTheme(<Home />)
    expect(screen.getByRole('heading', { name: /News/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Most Popular/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Upcomming/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Free Games/i })).toBeInTheDocument()
  })
})
