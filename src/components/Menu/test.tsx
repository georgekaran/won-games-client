import React from 'react'
import faker from 'faker'
import { screen, RenderResult, fireEvent } from '@testing-library/react'

import Menu, { MenuProps } from '.'
import { renderWithTheme } from '@/test/helpers'

const makeSut = ({ username = '' }: MenuProps = {}): RenderResult => {
  return renderWithTheme(<Menu username={username} />)
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

  test('should handle the open/close mobile menu', () => {
    makeSut()
    // Select the menu
    const menuFull = screen.getByRole('navigation', { hidden: true })
    // Check if menu is hide
    expect(menuFull.getAttribute('aria-hidden')).toBe('true')
    expect(menuFull).toHaveStyleRule('opacity', '0')
    // Click in the button to open the menu e check if the menu is open
    const menuIcon = screen.getByLabelText(/open menu/i)
    fireEvent.click(menuIcon)
    expect(menuFull.getAttribute('aria-hidden')).toBe('false')
    expect(menuFull).toHaveStyleRule('opacity', '1')
    // Click in the button to close the menu e check if the menu is hide/close
    const closeMenuIcon = screen.getByLabelText(/close menu/i)
    fireEvent.click(closeMenuIcon)
    expect(menuFull.getAttribute('aria-hidden')).toBe('true')
    expect(menuFull).toHaveStyleRule('opacity', '0')
  })

  test('Should show My account and wishlist links if username is not nullish', () => {
    makeSut({ username: faker.internet.userName() })
    expect(screen.getByText(/my account/i)).toBeInTheDocument()
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
  })

  test('Should not show RegisterBox if username is not nullish', () => {
    makeSut({ username: faker.internet.userName() })
    expect(screen.queryByText(/Log in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Sign up/i)).not.toBeInTheDocument()
  })
})
