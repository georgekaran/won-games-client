import React from 'react'
import { RenderResult, screen } from '@testing-library/react'

import { renderWithTheme } from '@/test/helpers'
import { Highlight, HighlightProps } from '.'

type SutProps = Partial<HighlightProps>

const makeSut = ({
  title = 'Heading 1',
  subtitle = 'Heading 2',
  buttonLabel = 'Buy now',
  buttonLink = '/any_url'
}: SutProps): RenderResult => {
  return renderWithTheme(<Highlight title={title} subtitle={subtitle} buttonLabel={buttonLabel} buttonLink={buttonLink} />)
}

describe('<Highlight />', () => {
  it('should render with initial state', () => {
    makeSut({})

    expect(screen.getByRole('heading', { name: /heading 1/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /heading 2/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })
})
