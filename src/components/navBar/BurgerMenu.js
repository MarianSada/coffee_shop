import React, { useState } from 'react'
import CustomLink from '../customLink/CustomLink'
import { Squash as Hamburger } from 'hamburger-react'
import { styled } from 'styled-components'
import { minDevices } from '../breakpoints/Breakpoints'

const StyledBurgerNav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1.25rem;
  background-color: black;
  height: 100vh;
  padding: 20px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.5s ease-in-out;
  @media only screen and (${minDevices.lg}) {
    display: none;
    
  }
`
 
function BurgerMenu() {

  const [open, setOpen] = useState(false)

  console.log(open)

  return (
  <>
    <nav>
      <StyledBurgerNav open={open}>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/Menu'>Menu</CustomLink>
        <CustomLink to='/reservation'>Reservation</CustomLink>
        <CustomLink to='/Shop'>Shop</CustomLink>
        <CustomLink to='/contact'>Contact</CustomLink>
        <CustomLink to='/myprofile'>My Profile</CustomLink>
      </StyledBurgerNav>
      <Hamburger color="#B97046" onToggle={() => setOpen(!open)}/>
    </nav>
  </>
  )
}

export default BurgerMenu
