import React, { useState } from 'react'
import { styled } from 'styled-components'
import InputField from '../inputField/InputField'
import HandleSubmitContext from '../inputField/HandleSubmitContext'

const Form = styled.form`

`

function LoginForm({children}) {

  const [isValid, setIsValid] = useState('false');

  const handleSubmit = (e) => {
      e.preventDefault();
      
      isValid ? alert("success") : alert("insert a valid email") ;
    }

  return (
    <HandleSubmitContext.Provider value={{isValid, setIsValid}} >
      <Form onSubmit={handleSubmit}>
        {children}
        nothing new
      </Form>
    </HandleSubmitContext.Provider>
  )
}

export default LoginForm
