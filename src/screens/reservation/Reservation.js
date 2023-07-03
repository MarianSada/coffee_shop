import React, { useState, useEffect, useRef } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { FormWrapper, Form, Input } from './Reservation.styles'
import Btn from '../../components/Btn'
import { ThemeProvider } from '@mui/material/styles'
import { customTheme } from '../../styles/Themes'
import { v4 as uuidv4 } from 'uuid';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { useNavigate } from 'react-router-dom'

const fieldValidationRules = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  name: /^.{3,}$/,
  phone: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
  seats: /^(?:[1-9]|10)$/,
  date: /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/,
  hour: /^[0-2][0-3]:[0-5][0-9]$/,
}

function Reservation() {
  const navigate = useNavigate();

  const [isValid, setIsValid] = useState({
    email: false,
    name: false,
    phone: false,
    seats: false,
    date: false,
    hour: false
  });
  const [formField, setFormField] = useState({
    email: "",
    name: "",
    phone: "",
    seats: "",
    date: "",
    hour: ""
  });

  const [submitRequested, setSubmitRequested] = useState(false)

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
      alert(`Please check your email for confirmation. Your reservation ID is: ${uuid}`)
      setSubmitRequested(true);
      setTimeout(() => {
        navigate("/");
      }, 0);
    } else {
      alert("Complete all form fields") ;
    } 
    
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

    if (typeof existingData == 'object') {
      newData = {...existingData, ...data}
    } else {
      newData = [...existingData, ...data]
    }
    setToLocalStorage(key, newData)
  }

  function generateUUID(email) {
    const newId = uuidv4();
    const shortId = newId.slice(0,8)
    return `${email}-${shortId}`
  }

  const uuid = generateUUID(formField.email)

  useEffect(() => {
    if(submitRequested) {
      updateLocateStorage('reservations', { 
        [uuid]: formField
      });
    }
  }, [submitRequested]) // eslint-disable-line react-hooks/exhaustive-deps

  function handleDateValidation(selectedDate) {
      let validation = fieldValidationRules.date.test(selectedDate);
    
      setIsValid((prev) => ({
        ...prev,
        date: validation.toString(),
      }));
  }

  function handleHourValidation(selectedHour) {
    let validation = fieldValidationRules.hour.test(selectedHour);
  
    setIsValid((prev) => ({
      ...prev,
      hour: validation.toString(),
    }));
}

  const datePickerRef = useRef(null);
  const hourInputRef = useRef(null);

  useEffect(() => {
    const flatpickrInstance = flatpickr(datePickerRef.current, {
      enableTime: false,
      dateFormat: "d/m/Y",
      onChange: (selectedDates) => {
        const newSelectedDate = selectedDates[0];
        const formattedDate = newSelectedDate.toLocaleDateString('ro-RO', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }).replace(/\./g, '-');
        setFormField((prev) => ({
          ...prev,
          [datePickerRef.current.name]: formattedDate,
        }));
        handleDateValidation(formattedDate);
      },
      disableMobile: true,
    });

    const hourInputInstance = flatpickr(hourInputRef.current, {
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
      time_24hr: true,
      onChange: (selectedHours) => {
        const selectedHour = selectedHours[0];
        const formattedHour = selectedHour.toLocaleTimeString("ro-RO", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
        setFormField((prev) => ({
          ...prev,
          [hourInputRef.current.name]: formattedHour,
        }));
        handleHourValidation(formattedHour)
      },
      disableMobile: true,
    });

    return () => {
      flatpickrInstance.destroy();
      hourInputInstance.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <FormWrapper>
        <h1>Reservation Form</h1>
        <Form onSubmit={handleSubmit}>
          <Input
            name="name"
            onChange={handleInputChange}
            value={formField.name}
            placeholder='Enter your name'
            type='text'
            validation={isValid.name.toString()}
          />
          <Input
            name="phone"
            onChange={handleInputChange}
            value={formField.phone}
            placeholder='Enter your phone number'
            type='text'
            validation={isValid.phone.toString()}
          />
          <Input
            name="seats"
            onChange={handleInputChange}
            value={formField.seats}
            placeholder='Enter your seats'
            type='text'
            validation={isValid.seats.toString()}
          />
          <Input
            name="date"
            onChange={handleInputChange}
            value={formField.date}
            type='text'
            ref={datePickerRef}
            className="flatpickr"
            placeholder='Select your date'
            validation={isValid.date.toString()}
          />
          <Input
            name="hour"
            onChange={handleInputChange}
            value={formField.hour}
            placeholder='Select your hour'
            type='text'
            ref={hourInputRef}
            validation={isValid.hour.toString()}
          />
          <Input
            name="email"
            onChange={handleInputChange}
            value={formField.email}
            placeholder='Enter your email'
            type='email'
            validation={isValid.email.toString()}
          />
          <ThemeProvider theme={customTheme}>
            <Btn 
              color="primary" 
              variant="contained" 
              size="large"
              type="submit"
            >
              Send reservation
            </Btn>
          </ThemeProvider> 
        </Form>
      </FormWrapper>
      <Footer/>
    </>
  )
}

export default Reservation
