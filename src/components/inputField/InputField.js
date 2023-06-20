import React, { useState, useContext } from 'react'
import { Input } from './InputField.styles'
import HandleSubmitContext from '../inputField/HandleSubmitContext'

const inputFieldValidation = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: "",
  firstName: "",
  lastName: "",
  address: "",
}


function InputField( {placeholder, type}) {
  
  const [value, setValue] = useState('')
  const {isValid, setIsValid} = useContext(HandleSubmitContext)
  
  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);

    const validation = inputFieldValidation[type].test(value);
    setIsValid(validation)
  }

  return (
    <Input
      onChange={handleChange}
      value={value}
      placeholder={placeholder} 
      type={type}
      validation={isValid.toString()}
    />
  )
}

export default InputField
