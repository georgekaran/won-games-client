import React from 'react'
import { render } from '@testing-library/react'

import Menu from './Menu'

describe('<Menu />', () => {
  test('should render with initial state', () => {
    const { container } = render(<Menu />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
