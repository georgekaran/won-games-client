import React from 'react'
import { RenderResult, screen } from '@testing-library/react'

import { renderWithTheme } from '@/test/helpers'
import Highlight, { HighlightProps } from '.'
import * as S from './styles'

type SutProps = Partial<HighlightProps>

const makeSut = ({
  title = 'Heading 1',
  subtitle = 'Heading 2',
  buttonLabel = 'Buy now',
  buttonLink = '/any_url',
  backgroundImage = '/img/any_image.png',
  ...props
}: SutProps): RenderResult => {
  return renderWithTheme(<Highlight
    title={title}
    subtitle={subtitle}
    buttonLabel={buttonLabel}
    buttonLink={buttonLink}
    backgroundImage={backgroundImage}
    {...props} />)
}

describe('<Highlight />', () => {
  it('should render with initial state', () => {
    const { container } = makeSut({})

    expect(screen.getByRole('heading', { name: /heading 1/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /heading 2/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render background image', () => {
    const { container } = makeSut({})

    expect(container.firstChild).toHaveStyle({
      backgroundImage: 'url(/img/any_image.png)'
    })
  })

  it('should render float image', () => {
    makeSut({ floatImage: '/any_float_image.png' })

    expect(screen.getByRole('img', { name: /heading 1/i })).toHaveAttribute('src', '/any_float_image.png')
  })

  it('should render align right by default', () => {
    const { container } = makeSut({})

    expect(container.firstChild).toHaveStyleRule('grid-template-areas', "'floatImage content'")
    expect(container.firstChild).toHaveStyleRule('text-align', 'right', { modifier: `${S.Content}` })
  })

  it('should render align left if prop is provided', () => {
    const { container } = makeSut({ alignment: 'left' })

    expect(container.firstChild).toHaveStyleRule('grid-template-areas', "'content floatImage'")
    expect(container.firstChild).toHaveStyleRule('text-align', 'left', { modifier: `${S.Content}` })
  })
})
