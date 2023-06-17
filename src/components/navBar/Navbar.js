import React, { useState } from 'react'
import CustomLink from '../customLink/CustomLink'
import { StyledNavbar } from './NavBar.styles'
import { Squash as Hamburger } from 'hamburger-react'
import { StyledHamburger } from './Hamburger.styles'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <StyledHamburger >
        <Hamburger color="#B97046" onToggle={() => setOpen(prevState => !prevState)}/>
      </StyledHamburger>
      <StyledNavbar open={open}>
        <CustomLink to='/coffee_shop/'>Home</CustomLink>
        <CustomLink to='/coffee_shop/Menu'>Menu</CustomLink>
        <CustomLink to='/coffee_shop/reservation'>Reservation</CustomLink>
        <CustomLink to='/coffee_shop/Shop'>Shop</CustomLink>
        <CustomLink to='/coffee_shop/contact'>Contact</CustomLink>
      </StyledNavbar>
    </nav>
  )
}
