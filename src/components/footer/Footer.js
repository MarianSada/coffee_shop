import React from 'react'
import { FaMobileAlt, FaMapMarkerAlt } from 'react-icons/fa'
import Logo from '../logo/Logo'
import Subscribe from '../subscribe/Subscribe'
import coffeeOnTable from '../../assets/coffee_on_table.jpg'
import NavBar from '../navBar/Navbar'
import Btn from '../Btn'
import { ThemeProvider } from '@mui/material/styles'
import { customTheme } from '../../styles/Themes'
import { StyledFooter, StyledFooterRow, StyledFooterElement } from './Footer.styles'
import SocialMedia from '../socialMedia/SocialMedia'

function Footer() {

  return (
    <>
    <StyledFooter bgimg={coffeeOnTable}>
      <StyledFooterRow>
        <StyledFooterElement>
          <FaMobileAlt />
          <p>PHONE: 0722332233</p>
        </StyledFooterElement>
        <StyledFooterElement>
          <FaMapMarkerAlt />
          <p>ADDRESS: Carrefour</p>
        </StyledFooterElement>
        <StyledFooterElement>
          <Subscribe />
        </StyledFooterElement>
      </StyledFooterRow>
      <StyledFooterRow display="true">
        <Logo />
      </StyledFooterRow>
      <StyledFooterRow >
        <StyledFooterRow display="true">
          <p >Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam.</p>
        </StyledFooterRow>
        <SocialMedia />
      </StyledFooterRow>
      <StyledFooterRow> 
        <NavBar/>
        <ThemeProvider theme={customTheme}>
          <Btn 
            color="primary" 
            size="large" 
            variant="outlined" 
            type='button'
            onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth' })}
          >
            GO TOP
          </Btn>
        </ThemeProvider>   
      </StyledFooterRow>
    </StyledFooter>
    </>
  )
}

export default Footer
