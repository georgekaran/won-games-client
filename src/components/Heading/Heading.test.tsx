import React from 'react'
import { RenderResult, screen } from '@testing-library/react'

import Heading, { HeadingProps } from './Heading'
import { renderWithTheme } from '@/test/helpers'

const makeSut = ({ children = 'Random Heading' }: HeadingProps = { children: 'Random Heading' }): RenderResult => {
  return renderWithTheme(<Heading>{children}</Heading>)
}

describe('<Heading />', () => {
  test('should render with initial state', () => {
    const { container } = makeSut()
    const heading = screen.getByRole('heading', { name: /Random Heading/ })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyleRule('color', '#FAFAFA')
    expect(heading).not.toHaveStyleRule('padding-left')
    expect(heading).not.toHaveStyleRule('padding-bottom')
    expect(container.firstChild).toMatchSnapshot()
  })
})
