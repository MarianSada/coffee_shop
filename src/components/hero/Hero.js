import React from 'react'
import Btn from '../Btn'
import { ThemeProvider } from '@mui/material/styles'
import { customTheme } from '../../styles/Themes'
import { StyledHero } from './Hero.styles'

function Hero() {
  return (
    <StyledHero>
      <h1>
        CREATE A NEW STORY WITH US
      </h1>
      <ThemeProvider theme={customTheme}>
        <Btn color="primary" size="large" variant="contained">Click me</Btn>
      </ThemeProvider>
    </StyledHero>
  )
}

export default Hero
