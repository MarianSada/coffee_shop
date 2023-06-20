import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import LoginForm from '../../components/login/LoginForm'
import InputField from '../../components/inputField/InputField'


function Login() {
  return (
    <>
      <Header />
        <LoginForm >
          <InputField 
            placeholder='Enter your email' 
            type='email'
          />
        </LoginForm>
      <Footer/>
    </>
  )
}

export default Login
