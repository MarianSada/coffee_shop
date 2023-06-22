import React from 'react'
import Btn from '../Btn'
import { ThemeProvider } from '@mui/material/styles'
import { customTheme } from '../../styles/Themes'
import { Link } from 'react-router-dom'


function LoginAndLogoutBtn({isLoggedIn}) {

  let loginStatus = {
    conditionalPath: isLoggedIn ? '/' : '/login',
    btnText: `${isLoggedIn ? 'Logout' : 'Login'}`,
  }

  return (
    <ThemeProvider theme={customTheme}>
      <Link to={loginStatus.conditionalPath}>
        <Btn 
          color="primary" 
          size="large" 
          variant="outlined" 
          style={{display: 'block'}}
        >
          {loginStatus.btnText}
        </Btn>
      </Link>
    </ThemeProvider>    
  )
}

export default LoginAndLogoutBtn
