import React, { useState, useEffect } from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import { SectionForm, Form, Input, StyledRegisterSpan, Main, StyledSectionWelcome, WelcomeCard } from '../UserAuthentication.styles'
import Btn from '../../../components/Btn'
import { ThemeProvider } from '@mui/material/styles'
import { customTheme } from '../../../styles/Themes'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import CoffeVan from '../../../assets/coffee_van.jpeg'
import SocialMedia from '../../../components/socialMedia/SocialMedia'

const fieldValidationRules = {
  password: /^(?=.*\d).{8,}$/,
  retypePassword: "",
}

function CreateNewpassword() {
  const navigate = useNavigate();
  const location = useLocation();

  const { email } = location.state || {};
  const emailValue = email ? email.email : '';

  const [isValid, setIsValid] = useState({
    password: "false",
    retypePassword: "false",
  });
  const [formField, setFormField] = useState({
    password: '',
    retypePassword: '',
  });

  // const [storedUserData, setStoredUserData] = useState({})

  // useEffect(() => {
  //   setStoredUserData(JSON.parse(localStorage.getItem("users")));
  // }, [])

  const handleInputChange = (e) => {

    setFormField(prev=> ({
      ...prev, 
      [e.target.name]: e.target.value}))
    
    handleValidation(e);
  }

  const handleValidation = (e) => {
    let validation;

    if (e.target.name === "retypePassword") {
      validation = formField.password === e.target.value;
    } else {
      validation = fieldValidationRules[e.target.name].test(e.target.value);
    }

    setIsValid((prev => ({
      ...prev, 
      [e.target.name]: validation.toString()})))
  }

  function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
  }

  function setToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  function updateLocateStorage(key, data) {
    let existingData = getFromLocalStorage(key) || {};
    let newData = null;

    existingData[emailValue].password = formField.password

    if (typeof existingData == 'object') {
      newData = {...existingData}
    } else {
      newData = [...existingData]
    }
    setToLocalStorage(key, newData)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(isValid) {
      updateLocateStorage('users');
      alert("success")
      navigate('/login')
      
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
              <h1>Create new password</h1>
              <label>
                Email
                <Input 
                  name='email'
                  value={emailValue}
                  type="email"
                  disabled
                />
              </label>
              <label>
                New Password
                <Input
                  name='password'
                  onChange={handleInputChange}
                  value={formField.password}
                  placeholder="Enter your new password" 
                  type="password"
                  validation={isValid.password.toString()}
                />
              </label>
              <label>
                Re-type New Password
                <Input
                  name='retypePassword'
                  onChange={handleInputChange}
                  value={formField.retypePassword}
                  placeholder="Re-type your password" 
                  type="password"
                  validation={isValid.retypePassword.toString()}
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

export default CreateNewpassword
