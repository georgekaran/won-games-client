import React from 'react'
import { screen } from '@testing-library/react'

import GameCard from './GameCard'
import { renderWithTheme } from '@/test/helpers'

describe('<GameCard />', () => {
  it('should render with initial state', () => {
    renderWithTheme(<GameCard title="any_title" developer="any_developer" img="/any_image.jpg" price="R$ 100,00" />)

    expect(screen.getByRole('heading', { name: /any_title/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /any_developer/i })).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', '/any_image.jpg')
    expect(screen.getByText('R$ 100,00')).toBeInTheDocument()
  })
})
