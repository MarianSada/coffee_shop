import React, { useState } from 'react'
import CustomLink from '../customLink/CustomLink'
import { StyledNavbar } from './NavBar.styles'
import { Squash as Hamburger } from 'hamburger-react'
import { StyledHamburger } from './Hamburger.styles'

export default function Navbar({loginstatus}) {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <StyledHamburger >
        <Hamburger color="#B97046" onToggle={() => setOpen(prevState => !prevState)}/>
      </StyledHamburger>
      <StyledNavbar open={open}>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/menu'>Menu</CustomLink>
        <CustomLink to='/reservation'>Reservation</CustomLink>
        <CustomLink to='/shop'>Shop</CustomLink>
        <CustomLink to='/contact'>Contact</CustomLink>
        {
          open && <CustomLink to={loginstatus ? "/myprofile" : "/login"}>My Profile</CustomLink>
        }
      </StyledNavbar>
    </nav>
  )
}