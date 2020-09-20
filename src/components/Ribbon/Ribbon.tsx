import React from 'react'
import * as S from './Ribbon.styles'

export type RibbonColors = 'primary' | 'secondary'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
}

const Ribbon = ({ children, color = 'primary' }: RibbonProps) => (
  <S.Wrapper color={color}>
    {children}
  </S.Wrapper>
)

export default Ribbon
