import React from 'react'
import Btn from '../Btn'
import { ThemeProvider } from '@mui/material/styles'
import { customTheme } from '../../styles/Themes'
import { Input } from './Subscribe.styles'


function Subscribe() {
  return (
    <>
      <Input placeholder='Enter your email' type='email'/>
      <ThemeProvider theme={customTheme}>
        <Btn color="primary" size="large" variant="outlined" type='submit'>Subscribe</Btn>
      </ThemeProvider>    
    </>
  )
}

export default Subscribe
