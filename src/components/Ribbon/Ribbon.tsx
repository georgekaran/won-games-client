import React from 'react'
import * as S from './Ribbon.styles'

export type RibbonProps = {
  children: React.ReactNode
}

const Ribbon = ({ children }: RibbonProps) => (
  <S.Wrapper>
    {children}
  </S.Wrapper>
)

export default Ribbon
