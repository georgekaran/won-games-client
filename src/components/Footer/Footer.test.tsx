import React from 'react'
import { screen } from '@testing-library/react'

import Footer from './Footer'
import { renderWithTheme } from '@/test/helpers'

describe('<Footer />', () => {
  it('should render with initial state correctly', () => {
    const { container } = renderWithTheme(<Footer />)
    expect(container.firstChild).toMatchSnapshot()
    expect(screen.getByText(/contact/i)).toBeInTheDocument()
    expect(screen.getByText(/follow us/i)).toBeInTheDocument()
    expect(screen.getByText(/location/i)).toBeInTheDocument()
    expect(screen.getByText(/links/i)).toBeInTheDocument()
  })
})
