import React from 'react'
import * as S from './Highlight.styles'

import { Button } from '@/components/Button'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
  floatImage?: string
}

const Highlight = ({ title, subtitle, buttonLabel, buttonLink, backgroundImage, floatImage = '' }: HighlightProps) => (
  <S.Wrapper backgroundImage={backgroundImage}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>{buttonLabel}</Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
