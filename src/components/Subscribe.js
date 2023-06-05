import React from 'react'
import { styled } from 'styled-components'
import Btn from './Btn'
import { ThemeProvider } from '@mui/material/styles'
import { customTheme } from '../styles/Themes'

const Input = styled.input`
  min-width: 300px;
  padding: 10px;
  margin-left: auto;
  border:none;
  border-bottom: 1px solid #fff;
  background-color: rgba(256, 256, 256, 0.1);
  color: #fff;
  &::placeholder {
    color: #fff;
    opacity: 1;
  }
  &:focus {
    outline-color: #B97046;
  }
`

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
