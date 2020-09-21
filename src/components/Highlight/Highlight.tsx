import React from 'react'
import * as S from './Highlight.styles'

export type HighlightProps = {
  title: string
  subtitle: string
}

const Highlight = ({ title, subtitle }: HighlightProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Subtitle>{subtitle}</S.Subtitle>
  </S.Wrapper>
)

export default Highlight
