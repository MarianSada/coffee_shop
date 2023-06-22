import React, { useState } from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import { SectionForm, Form, Input, StyledRegisterSpan, Main, StyledSectionWelcome, WelcomeCard } from '../UserAuthentication.styles'
import Btn from '../../../components/Btn'
import { ThemeProvider } from '@mui/material/styles'
import { customTheme } from '../../../styles/Themes'
import { Link } from 'react-router-dom'
import CoffeVan from '../../../assets/coffee_van.jpeg'
import SocialMedia from '../../../components/socialMedia/SocialMedia'

const inputFieldValidation = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*\d).{8,}$/,
  firstName: "",
  lastName: "",
  address: "",
}

function Login() {

  const [isValid, setIsValid] = useState('false');
  const [formField, setFormField] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {

    setFormField(prev=> ({
      ...prev, 
      [e.target.name]: e.target.value}))
    
    handleValidation(e);
  }

  const handleValidation = (e) => {
    const validation = inputFieldValidation[e.target.name].test(e.target.value);

    setIsValid(validation)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    isValid ? alert("success") : alert("insert a valid email") ;
  }

  return (
    <>
      <Header />
        <Main >
          <SectionForm >
            <Form onSubmit={handleSubmit}>
              <h1>Reset password</h1>
              <label>
                Email
                <Input 
                  name='email'
                  onChange={handleInputChange}
                  value={formField.email}
                  placeholder="Enter your email" 
                  type="email"
                  validation={isValid.toString()}
                />
              </label>
                <ThemeProvider theme={customTheme}>
                  <Link to="/">
                    <Btn 
                      color="primary" 
                      variant="contained" 
                      size="large"
                    >
                      Reset password
                    </Btn>
                  </Link>
                </ThemeProvider> 
            </Form>
            <StyledRegisterSpan>
                Don't have an account? <Link to="/register">Register</Link>
            </StyledRegisterSpan>
            <StyledRegisterSpan>
                Remembered your password? <Link to="/login">Login</Link>
            </StyledRegisterSpan>
          </SectionForm>
          <StyledSectionWelcome >
            <WelcomeCard src={CoffeVan}>
              <h1>La Camionnette</h1>
              <h2>Welcome</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <SocialMedia />
            </WelcomeCard>
          </StyledSectionWelcome>
        </Main>
      <Footer/>
    </>
  )
}

export default Login
