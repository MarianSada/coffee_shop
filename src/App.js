import React from 'react';
import GlobalStyles from './styles/globalStyles';
import Index from './screens/index/Index'
import MyProfile from './screens/myProfile/MyProfile'
import Login from './screens/login/Login'
import Register from './screens/register/Register'
import ForgotPassword from './screens/forgotPassword/ForgotPassword'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/myprofile' element={<MyProfile />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>
      </Routes>
    </>
  );
}

export default App;
