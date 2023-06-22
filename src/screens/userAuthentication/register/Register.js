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

const validationRules = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*\d).{8,}$/,
  retypePassword: "",
  firstName: /^.{3,}$/,
  lastName: /^.{3,}$/,
}

function Login() {
  // const navigate = useNavigate();  --->> don't forget to import useNavigate when finished

  const [isValid, setIsValid] = useState({
    email: "false",
    password: "false",
    retypePassword: "false",
    firstName: "false",
    lastName: "false",
  });
  const [formField, setFormField] = useState({
    email: '',
    password: '',
    retypePassword: '',
    firstName: '',
    lastName: '',
  });

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
      validation = validationRules[e.target.name].test(e.target.value);
    }

    setIsValid((prev=> ({
      ...prev, 
      [e.target.name]: validation.toString()})))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = Object.values(isValid).every((value) => value === "true");

    isFormValid ? alert("success") /*navigate('/')*/ : alert("Complete all form fields") ;
    
  }

  return (
    <>
      <Header />
        <Main >
          <SectionForm >
            <Form onSubmit={handleSubmit}>
              <h1>Register</h1>
              <label>
                First Name
                <Input 
                  name='firstName'
                  onChange={handleInputChange}
                  value={formField.firstName}
                  placeholder="Enter your first name" 
                  type="text"
                  validation={isValid.firstName.toString()}
                />
              </label>
              <label>
                Last Name
                <Input 
                  name='lastName'
                  onChange={handleInputChange}
                  value={formField.lastName}
                  placeholder="Enter your last name" 
                  type="text"
                  validation={isValid.lastName.toString()}
                />
              </label>
              <label>
                Email
                <Input 
                  name='email'
                  onChange={handleInputChange}
                  value={formField.email}
                  placeholder="Enter your email" 
                  type="email"
                  validation={isValid.email.toString()}
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
                  validation={isValid.password.toString()}
                />
              </label>
              <label>
                Re-type Password
                <Input
                  name='retypePassword'
                  onChange={handleInputChange}
                  value={formField.retypePassword}
                  placeholder="Re-type your password" 
                  type="password"
                  validation={isValid.retypePassword.toString()}
                  // validation={(formField.password === formField.retypePassword).toString()}
                />
              </label>
                <ThemeProvider theme={customTheme}>
                  <Btn 
                    color="primary" 
                    variant="contained" 
                    size="large"
                    type="submit"
                  >
                    Register
                  </Btn>
                </ThemeProvider> 
            </Form>
            <StyledRegisterSpan>
                Already have an account? <Link to="/login">Login</Link>
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
