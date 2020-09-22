import React from 'react'
import { screen, RenderResult, fireEvent } from '@testing-library/react'

import { GameCard, GameCardProps } from '.'
import { renderWithTheme } from '@/test/helpers'
import theme from '@/styles/theme'

type SutProps = Partial<GameCardProps>

const makeSut = (props: SutProps = {}): RenderResult => {
  return renderWithTheme(<GameCard title="any_title" developer="any_developer" img="/any_image.jpg" price="R$ 100,00" {...props} />)
}

describe('<GameCard />', () => {
  it('should render with initial state', () => {
    makeSut()
    expect(screen.getByRole('heading', { name: /any_title/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /any_developer/i })).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', '/any_image.jpg')
    expect(screen.getByText('R$ 100,00')).toBeInTheDocument()
  })

  it('should render price in label', () => {
    makeSut()

    const price = screen.getByText('R$ 100,00')
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-through in price when promotional', () => {
    makeSut({ promotionalPrice: 'R$ 50,00' })

    expect(screen.getByText('R$ 100,00')).toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(screen.getByText('R$ 50,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    makeSut({ favorite: true })

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFavSpy = jest.fn()
    makeSut({ onFav: onFavSpy })

    fireEvent.click(screen.getByLabelText(/add to wishlist/i))

    expect(onFavSpy).toHaveBeenCalledTimes(1)
  })
})
