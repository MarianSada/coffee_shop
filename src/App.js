import React from 'react';
import GlobalStyles from './styles/globalStyles';
import Index from './screens/index/Index'
import MyProfile from './screens/myProfile/MyProfile'
import Login from './screens/userAuthentication/login/Login'
import Register from './screens/userAuthentication/register/Register'
import ForgotPassword from './screens/userAuthentication/forgotPassword/ForgotPassword'
import { Routes, Route } from 'react-router-dom'
import Menu from './screens/menu/Menu'
import Reservation from './screens/reservation/Reservation'
import Shop from './screens/shop/Shop'
import Contact from './screens/contact/Contact'

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/reservation' element={<Reservation />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/myprofile' element={<MyProfile />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>
      </Routes>
    </>
  );
}

export default App;
