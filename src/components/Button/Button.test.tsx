import React from 'react'
import { screen } from '@testing-library/react'

import Button from './Button'
import { renderWithTheme } from '@/test/helpers'
import theme from '@/styles/theme'

describe('<Button />', () => {
  test('should render with correct initial state', () => {
    const { container } = renderWithTheme(<Button>Button</Button>)
    expect(container.firstChild).toMatchSnapshot()
    const button = screen.getByRole('button', { name: /Button/ })
    expect(button).toHaveStyleRule('height', '4rem')
    expect(button).toHaveStyleRule('font-size', theme.font.sizes.small)
    expect(button).toHaveStyleRule('padding', `${theme.spacings.xxsmall} ${theme.spacings.medium}`)
  })
})
