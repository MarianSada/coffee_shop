import React, { useState, useEffect } from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import { SectionForm, Form, Input, StyledRegisterSpan, Main, StyledSectionWelcome, WelcomeCard } from '../UserAuthentication.styles'
import Btn from '../../../components/Btn'
import { ThemeProvider } from '@mui/material/styles'
import { customTheme } from '../../../styles/Themes'
import { Link, useNavigate } from 'react-router-dom'
import CoffeVan from '../../../assets/coffee_van.jpeg'
import SocialMedia from '../../../components/socialMedia/SocialMedia'

const fieldValidationRules = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
}

function ResetPassword() {
  const navigate = useNavigate();

  const [isValid, setIsValid] = useState('false');
  const [email, setEmail] = useState({
    email: '',
  });

  const [storedUserData, setStoredUserData] = useState({})

  useEffect(() => {
    setStoredUserData(JSON.parse(localStorage.getItem("users")));
  }, [])

  function userValidation() {
    const checkEmail = email.email;

    const userNameExists = storedUserData.hasOwnProperty(checkEmail);
    
    const userExists = userNameExists ? true : false;
    return userExists
  }

  const handleInputChange = (e) => {

    setEmail(prev=> ({
      ...prev, 
      [e.target.name]: e.target.value}))
    
    handleValidation(e);
  }

  const handleValidation = (e) => {
    const validation = fieldValidationRules[e.target.name].test(e.target.value);
    setIsValid(validation)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(isValid && userValidation()) {

      alert("success")
      navigate('/createnewpassword', { state: { email } })
      
    } else {
      alert("insert a valid email") ;
    }   
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
                  value={email.email}
                  placeholder="Enter your email" 
                  type="email"
                  validation={isValid.toString()}
                />
              </label>
                <ThemeProvider theme={customTheme}>
                    <Btn 
                      color="primary" 
                      variant="contained" 
                      size="large"
                      type="submit"
                    >
                      Reset password
                    </Btn>
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

export default ResetPassword
