import React from 'react'
import * as S from './Highlight.styles'

import { Button } from '@/components/Button'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

const Highlight = ({ title, subtitle, buttonLabel, buttonLink }: HighlightProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Subtitle>{subtitle}</S.Subtitle>
    <Button as="a" href={buttonLink}>{buttonLabel}</Button>
  </S.Wrapper>
)

export default Highlight
