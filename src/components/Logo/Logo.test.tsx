import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Logo from './Logo'
import theme from '@/styles/theme'

describe('<Logo />', () => {
  test('should render correctly', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Logo />
      </ThemeProvider>
    )
    expect(screen.getByTestId('logo')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
