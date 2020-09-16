import React, { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './Menu.styles'
import Logo from '@/components/Logo/Logo'

export type MenuProps = {}

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <MenuIcon aria-label="Open menu" onClick={() => setIsOpen(true)} />
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

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
