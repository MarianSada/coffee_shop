import React, { useState, useRef } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { ContactContainer, ContactWrapper, ContactTile, ContactInfo, Form, Input, Textarea } from './Contact.styles'
import { ThemeProvider } from '@mui/material/styles'
import { customTheme } from '../../styles/Themes'
import Btn from '../../components/Btn'
import { useNavigate } from 'react-router-dom'
import { FaRegEnvelopeOpen, FaMapMarkerAlt, FaRegClock } from "react-icons/fa"
import emailjs from '@emailjs/browser';

const fieldValidationRules = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  name: /^.{3,}$/,
  subject: /^.{3,}$/,
  message: /^.{3,}$/,
}

function Contact() {
  const navigate = useNavigate();
  const form = useRef();

  const [isValid, setIsValid] = useState({
    email: false,
    name: false,
    subject: false,
    message: false,
  });
  const [formField, setFormField] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
  
    setFormField(prev=> ({
      ...prev, 
      [e.target.name]: e.target.value}))
    
    handleValidation(e);
  }
  
  const handleValidation = (e) => {
    let validation = fieldValidationRules[e.target.name].test(e.target.value);
  
    setIsValid((prev => ({
      ...prev, 
      [e.target.name]: validation.toString()})))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = Object.values(isValid).every((value) => value === "true");
    
    if(isFormValid) {
      alert('Message sent successfully')
      sendEmail()
      setTimeout(() => {
        navigate("/");
      }, 0);
    } else {
      alert("Complete all form fields") ;
    } 

  }

  const sendEmail = () => {
    emailjs.sendForm('service_0c99h7m', 'template_dptkesg', form.current, 'BH3ACERhZ1mKWXdi2')
    .then((result) => {
        console.log(result.text);
        console.log("message SENT")
    }, (error) => {
        console.log(error.text);
        console.log("ERROR") 
    });
  }

  return (
    <>
      <Header />
      <ContactContainer>
        <ContactWrapper>
          <ContactTile>
          <FaRegEnvelopeOpen size={50}/>
          <ContactInfo>
            <h3>Contact us</h3>
            <a href="mailto:test.email@gmail.com">test.email@gmail.com</a>
            <a href="tel:0722332233">0722332233</a>
          </ContactInfo>
          </ContactTile>
          <ContactTile>
          <FaMapMarkerAlt size={50}/>
          <ContactInfo>
            <h3>Our Location</h3>
            <span>Carrefour</span>
          </ContactInfo>
          </ContactTile>
          <ContactTile>
          <FaRegClock size={50}/>
          <ContactInfo>
            <h3>Opening Hours</h3>
            <span>Mon - Sat (08:00 - 20:00)</span>
            <span>Sunday (09:00 - 18:00)</span>
          </ContactInfo>
          </ContactTile>
        </ContactWrapper>
        <h1>Contact Form</h1>
        <Form onSubmit={handleSubmit} ref={form}>
          <Input
            name="name"
            onChange={handleInputChange}
            value={formField.name}
            placeholder='Enter your name'
            type='text'
            validation={isValid.name.toString()}
          />
          <Input
            name="email"
            onChange={handleInputChange}
            value={formField.email}
            placeholder='Enter your email'
            type='email'
            validation={isValid.email.toString()}
          />
          <Input
            className='fullWidth'
            name="subject"
            onChange={handleInputChange}
            value={formField.subject}
            placeholder='Enter your subject'
            type='text'
            validation={isValid.subject.toString()}
          />
          <Textarea
            name="message"
            onChange={handleInputChange}
            value={formField.message}
            placeholder='Enter your message'
            validation={isValid.message.toString()}
          />
          <ThemeProvider theme={customTheme}>
            <Btn 
              color="primary" 
              variant="contained" 
              size="large"
              type="submit"
            >
              Send message
            </Btn>
          </ThemeProvider> 
        </Form>
      </ContactContainer>
      <Footer/>
    </>
  )
}

export default Contact
