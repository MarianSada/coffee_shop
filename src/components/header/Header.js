import React, {useState} from 'react'
import Navbar from '../navBar/Navbar'
import Logo from '../Logo'
import { StyledHeader } from './Header.styles'
import { Link } from 'react-router-dom'
import LoginAndProfileBtn from '../loginAndProfileBtn/LoginAndProfileBtn'
import Btn from '../Btn'


function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const isLoggedIn = true;

  return (
    <StyledHeader>
      <Link to='/'>
        <Logo />
      </Link>
      <Navbar />
      <Btn onClick={()=> setIsLoggedIn((prev) => !prev)}>NEW BTN</Btn>
      <LoginAndProfileBtn isLoggedIn={isLoggedIn}/>
    </StyledHeader>  
  )
}

export default Header
  

