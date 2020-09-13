import React from 'react'
import { render, RenderResult, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Logo from './Logo'
import theme from '@/styles/theme'

const makeSut = (): RenderResult => {
  return render(
    <ThemeProvider theme={theme}>
      <Logo />
    </ThemeProvider>
  )
}

describe('<Logo />', () => {
  test('should render correctly', () => {
    const { container } = makeSut()
    expect(screen.getByTestId('logo')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
