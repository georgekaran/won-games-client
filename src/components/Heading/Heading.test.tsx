import React from 'react'
import { screen } from '@testing-library/react'

import Heading from './Heading'
import { renderWithTheme } from '@/test/helpers'

describe('<Heading />', () => {
  test('should render with initial state', () => {
    const { container } = renderWithTheme(<Heading>Random Heading</Heading>)
    const heading = screen.getByRole('heading', { name: /Random Heading/ })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyleRule('color', '#FAFAFA')
    expect(heading).not.toHaveStyleRule('padding-left')
    expect(heading).not.toHaveStyleRule('padding-bottom')
    expect(container.firstChild).toMatchSnapshot()
  })
})
