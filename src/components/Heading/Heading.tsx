import React from 'react'
import * as S from './Heading.styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  size?: 'medium' | 'small'
}

const Heading = ({ children, color = 'white', lineLeft = false, lineBottom = false, size = 'medium' }: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    size={size}>
    {children}
  </S.Wrapper>
)

export default Heading
