import React from 'react'
import { render } from '@testing-library/react'

import Home from './Home'

describe('<Home />', () => {
  it('should render with initial state', () => {
    render(<Home />)
  })
})
