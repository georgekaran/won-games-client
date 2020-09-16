import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'

import theme from '@/styles/theme'

export const renderWithTheme = (children: React.ReactNode): RenderResult => {
  return render(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export const resizeWindow = (width: number, height: number): void => {
  Object.assign(window, {
    innerWidth: width,
    innerHeight: height,
    outerWidth: width,
    outerHeight: height
  })
  window.dispatchEvent(new Event('resize'))
}
