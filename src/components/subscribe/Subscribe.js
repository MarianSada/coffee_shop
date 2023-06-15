import React, { useState } from 'react'
import Btn from '../Btn'
import { ThemeProvider } from '@mui/material/styles'
import { customTheme } from '../../styles/Themes'
import { Input, StyledSubscriptionForm } from './Subscribe.styles'

function Subscribe() {

  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    isValid && alert("success") ;
  }
  
  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(value))
  }

  return (
    <StyledSubscriptionForm onSubmit={handleSubmit}>
      <Input 
        onChange={handleChange}
        value={email}
        placeholder='Enter your email' 
        type='email'
        validation={isValid}
      />
      <ThemeProvider theme={customTheme}>
        <Btn 
          color="primary" 
          size="large" 
          variant="outlined" 
          type='submit'
        >
          Subscribe
        </Btn>
      </ThemeProvider>    
    </StyledSubscriptionForm>
  )
}

export default Subscribe
