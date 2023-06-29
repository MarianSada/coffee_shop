import React, { useEffect, useState } from 'react'
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
  password: /^(?=.*\d).{8,}$/,
}

function Login() {
  const navigate = useNavigate();

  const [isFormFieldValid, setIsFormFieldValid] = useState({
    email: "false",
    password: "false",
  });

  const [formField, setFormField] = useState({
    email: '',
    password: '',
  });

  const [isUserValid, setIsUserValid] = useState("false");

  const [storedUserData, setStoredUserData] = useState({})

  useEffect(() => {
    setStoredUserData(JSON.parse(localStorage.getItem("users")));
  }, [])

  useEffect(() => {
    if(isUserValid){
      localStorage.setItem("isLoggedIn", JSON.stringify(isUserValid));}
  })

  function userValidation() {
    const checkEmail = formField.email;
    const checkPassword = formField.password;

    const userNameExists = storedUserData.hasOwnProperty(checkEmail);
    const storedUser = storedUserData[checkEmail]
    
    const userExists = (userNameExists && storedUser.password === checkPassword) ? true : false;
    return userExists
  }

  const handleInputChange = (e) => {

    setFormField(prev=> ({
      ...prev, 
      [e.target.name]: e.target.value}))
    
    handleFieldValidation(e);
  }

  const handleFieldValidation = (e) => {
    let validation = fieldValidationRules[e.target.name].test(e.target.value);

    setIsFormFieldValid((prev=> ({
      ...prev, 
      [e.target.name]: validation.toString()})))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = Object.values(isFormFieldValid).every((value) => value === "true");

    if(isFormValid && userValidation()) {
      setIsUserValid("true");
      alert("success");
      setTimeout(() => navigate("/"), 0);
      
    } else { 
      alert("insert a valid email or password") ;
    }
  }

  return (
    <>
      <Header />
        <Main >
          <SectionForm >
            <Form >
              <h1>Login</h1>
              <label>
                Email
                <Input 
                  name='email'
                  onChange={handleInputChange}
                  value={formField.email}
                  placeholder="Enter your email" 
                  type="email"
                  validation={isFormFieldValid.email.toString()}
                />
              </label>
              <label>
                Password
                <Input
                  name='password'
                  onChange={handleInputChange}
                  value={formField.password}
                  placeholder="Enter your password" 
                  type="password"
                  validation={isFormFieldValid.password.toString()}
                />
              </label>
                <ThemeProvider theme={customTheme}>
                  <Link to="/login">
                    <Btn 
                      color="primary" 
                      variant="contained" 
                      size="large"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Login
                    </Btn>
                  </Link>
                </ThemeProvider> 
            </Form>
              <ThemeProvider theme={customTheme}>
                <Link to="/forgot-password">
                  <Btn 
                    color="primary" 
                    variant="outlined" 
                    size="large"                  
                  >
                    Forgot password
                  </Btn>
                </Link>
              </ThemeProvider> 
            <StyledRegisterSpan>
                Don't have an account? <Link to="/register">Register</Link>
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
