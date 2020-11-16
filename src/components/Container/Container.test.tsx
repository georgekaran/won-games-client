import React from 'react'

import { Container } from '.'
import { renderWithTheme } from '@/test/helpers'
import theme from '@/styles/theme'

describe('<Container />', () => {
  it('should render with initial state', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Won Games</span>
      </Container>
    )
    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      >
        <span>
          Won Games
        </span>
      </div>
    `)
  })
})
