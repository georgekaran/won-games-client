import React from 'react'
import { render, RenderResult, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Logo, { LogoProps } from './Logo'
import theme from '@/styles/theme'

const makeSut = ({ color = 'white' }: LogoProps = {}): RenderResult => {
  return render(
    <ThemeProvider theme={theme}>
      <Logo color={color} />
    </ThemeProvider>
  )
}

describe('<Logo />', () => {
  test('should render with correct initial state', () => {
    const { container } = makeSut()
    const logo = screen.getByTestId('logo')
    expect(logo).toBeInTheDocument()
    expect(screen.getByTestId('logo')).toHaveStyleRule('color', theme.colors.white)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('should change text color', () => {
    makeSut({ color: 'black' })
    expect(screen.getByTestId('logo')).toHaveStyleRule('color', theme.colors.black)
  })
})
