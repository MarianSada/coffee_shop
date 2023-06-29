import React, { useState, useEffect } from 'react'
import Navbar from '../navBar/Navbar'
import Logo from '../logo/Logo'
import { StyledHeader, StyledProfileBtnsWrapper } from './Header.styles'
import { Link } from 'react-router-dom'
import LoginAndLogoutBtn from '../loginAndLogoutBtn/LoginAndLogoutBtn'
import { FaUserCircle } from 'react-icons/fa'

function Header() {

  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("isLoggedIn")));
  }, [])

  const [isLoggedIn, setIsLoggedIn] = useState("");

  // console.log('isLoggedIn din HEADER: ', isLoggedIn)

  return (
    <StyledHeader>
      <Link to='/'>
        <Logo />
      </Link>
      <Navbar />
      <StyledProfileBtnsWrapper>
        <Link to={isLoggedIn ? "/myprofile" : "/login"}>
          <FaUserCircle size={50}/>
        </Link>
        <LoginAndLogoutBtn isLoggedIn={isLoggedIn}/>
      </StyledProfileBtnsWrapper>
    </StyledHeader>  
  )
}

export default Header
  

