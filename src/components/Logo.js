import React from 'react'
import logo_dark from '../assets/logo_dark.jpeg'
import { styled } from 'styled-components'

const StyledLogoWrapper = styled.div`
  display: block;
   min-width: 100px;
   width: 100px;
   background-color: red;
`

function Logo() {
  return (
    <StyledLogoWrapper>
      <img src={logo_dark} alt='logo'/>
    </StyledLogoWrapper>
  )
}

export default Logo
