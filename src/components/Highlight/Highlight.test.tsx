import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/test/helpers'
import Highlight from './Highlight'

describe('<Highlight />', () => {
  it('should render with initial state', () => {
    const { container } = renderWithTheme(<Highlight title="Heading 1" subtitle="Heading 2" />)

    expect(screen.getByRole('heading', { name: /heading 1/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /heading 2/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
