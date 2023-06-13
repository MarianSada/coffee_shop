import React, { useState } from 'react'
import CustomLink from '../customLink/CustomLink'
import { Squash as Hamburger } from 'hamburger-react'
import { StyledBurgerNav } from './BurgerMenu.styles'
 
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
