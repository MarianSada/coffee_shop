import React from 'react'
import { useFormik } from 'formik'
import Btn from '../Btn'
import { ThemeProvider } from '@mui/material/styles'
import { customTheme } from '../../styles/Themes'
import { Input } from './Subscribe.styles'
import { styled } from 'styled-components'
import { maxDevices } from '../breakpoints/Breakpoints'

function SubscribeForm() {

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(values.email +" has been subscribed");
    },
  })

  const StyledSubscriptionForm = styled.form`
  display: flex;
  gap: 20px;
  align-items: center;
  @media only screen and (${maxDevices.lg}) {
    flex-direction: column;
  }
`

  return (
    <StyledSubscriptionForm onSubmit={formik.handleSubmit}>
      <Input
        id='email'
        name='email'
        type='email'
        onChange={formik.handleChange}  
        value={formik.values.email}
        placeholder='Enter your email'
      />
      <ThemeProvider theme={customTheme}>
        <Btn color="primary" size="large" variant="outlined" type='submit'>Subscribe</Btn>
      </ThemeProvider>   
    </StyledSubscriptionForm>
  )
}

export default SubscribeForm
