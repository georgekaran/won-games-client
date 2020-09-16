import React from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart'

import * as S from './Menu.styles'
import Logo from '@/components/Logo/Logo'

export type MenuProps = {}

const Menu = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <MenuIcon aria-label="Open menu" />
    </S.IconWrapper>
    <S.LogoWrapper>
      <Logo hideOnMobile />
    </S.LogoWrapper>
    <S.MenuGroup>
      <S.IconWrapper>
        <SearchIcon aria-label="Search" />
      </S.IconWrapper>
      <S.IconWrapper>
        <ShoppingCart aria-label="Open shopping cart" />
      </S.IconWrapper>
    </S.MenuGroup>
  </S.Wrapper>
)

export default Menu
