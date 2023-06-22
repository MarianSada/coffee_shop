import React from 'react'
import Navbar from '../navBar/Navbar'
import Logo from '../logo/Logo'
import { StyledHeader } from './Header.styles'
import { Link } from 'react-router-dom'
import LoginAndLogoutBtn from '../loginAndLogoutBtn/LoginAndLogoutBtn'
import { FaUserCircle } from 'react-icons/fa'
import { styled } from 'styled-components'

const StyledProfileBtnsWrapper = styled.div`
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  a {
    &:first-child {
      margin-right: 20px;
    }
  }
`

function Header() {

  // const [isLoggedIn, setIsLoggedIn] = useState(false); ------>>>> import useState if needed again
  const isLoggedIn = false;

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
        {/* <Btn onClick={()=> setIsLoggedIn((prev) => !prev)}>NEW BTN</Btn> ------>>>> import it if needed again*/}
        <LoginAndLogoutBtn isLoggedIn={isLoggedIn}/>
      </StyledProfileBtnsWrapper>
    </StyledHeader>  
  )
}

export default Header
  

