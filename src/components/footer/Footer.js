import React from 'react'
import { FaMobileAlt, FaMapMarkerAlt } from 'react-icons/fa'
import Logo from '../Logo'
import Subscribe from '../Subscribe'
import coffeeOnTable from '../../assets/coffee_on_table.jpg'
import NavBar from '../navBar/Navbar'
import { StyledBgImg } from '../BgImg.styles'
import Btn from '../Btn'
import { ThemeProvider } from '@mui/material/styles'
import { customTheme } from '../../styles/Themes'
import { StyledFooter, StyledFooterLine, StyledFooterElement } from './Footer.styles'
import StyledSocialBar from '../socialMedia/SocialMedia'

function Footer() {

  return (
    <>
    <StyledFooter>
      <StyledBgImg src={coffeeOnTable} />
      <StyledFooterLine>
        <StyledFooterElement>
          <FaMobileAlt />
          <p>PHONE: 0722332233</p>
        </StyledFooterElement>
        <StyledFooterElement>
          <FaMapMarkerAlt />
          ADDRESS: Carrefour
        </StyledFooterElement>
        <StyledFooterElement>
          <Subscribe />
        </StyledFooterElement>
      </StyledFooterLine>
      <StyledFooterLine>
        <Logo />
      </StyledFooterLine>
      <StyledFooterLine>
        <div>
          <p>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam.</p>
        </div>
        <StyledSocialBar />
      </StyledFooterLine>
      <StyledFooterLine>
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
      </StyledFooterLine>
    </StyledFooter>
    </>
  )
}

export default Footer
