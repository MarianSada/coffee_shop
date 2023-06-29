import React from 'react'
import Btn from '../Btn'
import { ThemeProvider } from '@mui/material/styles'
import { customTheme } from '../../styles/Themes'
import { useNavigate } from 'react-router-dom'


function LoginAndLogoutBtn({isLoggedIn}) {
  const navigate = useNavigate();

  const loginStatus = {
    btnText: `${isLoggedIn ? 'Logout' : 'Login'}`,
    action: () => {
        if(isLoggedIn) { 
          localStorage.setItem("isLoggedIn", "false");
          window.location.reload();
        } else {
          navigate('/login');
        }
      }
  }

  return (
    <ThemeProvider theme={customTheme}>
        <Btn 
          color="primary" 
          size="large" 
          variant="outlined" 
          style={{display: 'block'}}
          onClick={loginStatus.action}
        >
          {loginStatus.btnText}
        </Btn>
    </ThemeProvider>    
  )
}

export default LoginAndLogoutBtn
