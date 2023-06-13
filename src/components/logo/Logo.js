import React from 'react'
import logo_dark from '../../assets/logo_dark.jpeg'
import { StyledLogoWrapper } from './Logo.styles'

function Logo() {
  return (
    <StyledLogoWrapper>
      <img src={logo_dark} alt='logo'/>
    </StyledLogoWrapper>
  )
}

export default Logo
