import React from 'react'
import { screen, RenderResult } from '@testing-library/react'

import Menu from './Menu'
import { renderWithTheme } from '@/test/helpers'

const makeSut = (): RenderResult => {
  return renderWithTheme(<Menu />)
}

describe('<Menu />', () => {
  test('should render with initial state', () => {
    const { container } = makeSut()
    expect(container.firstChild).toMatchSnapshot()
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
    expect(screen.getByTestId('logo')).toBeInTheDocument()
  })
})
