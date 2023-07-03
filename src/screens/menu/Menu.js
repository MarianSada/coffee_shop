import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { StyledSection } from '../../components/Section.styles'
import Btn from '../../components/Btn'
import { ThemeProvider } from '@mui/material/styles'
import { customTheme } from '../../styles/Themes'
import MenuItem from '../../components/menuItem/MenuItem'
import { MenuItems } from '../../components/menuItem/MenuItemsContext'
import { specialtyMenuProducts, coldBeverages, hotBeverages } from '../../components/menuItem/MenuItemsContext'
import { StyledMenuSection } from '../../components/menuItem/SpecialtyMenu.styles'
import { Link } from 'react-router-dom'
import MenuHero from './MenuHero'

function Menu() {
  return (
    <>
      <Header />
      <MenuHero />
        <StyledSection>
          <Link to="/shop" >
            <ThemeProvider theme={customTheme}>
              <Btn 
                color="primary" 
                size="large" 
                variant="contained"
              >
                  Order Now
              </Btn>
            </ThemeProvider>
          </Link>
          <h1>Specialty Menu</h1>
          <StyledMenuSection>
            <MenuItems.Provider value={specialtyMenuProducts}>
              <MenuItem />
            </MenuItems.Provider>
          </StyledMenuSection>
        </StyledSection>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 5" width="100%">
          <line x1="0" y1="0" x2="100" y2="0" stroke="#b97046" stroke-width="2" />
          <polygon points="50,5 45,0 55,0" fill="#b97046" />
        </svg>
        <StyledSection>
          <h1>Hot beverages</h1>
          <StyledMenuSection>
            <MenuItems.Provider value={hotBeverages}>
              <MenuItem />
            </MenuItems.Provider>
          </StyledMenuSection>
        </StyledSection>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 5" width="100%">
          <line x1="0" y1="0" x2="100" y2="0" stroke="#b97046" stroke-width="2" />
          <polygon points="50,5 45,0 55,0" fill="#b97046" />
        </svg>
        <StyledSection>
          <h1>Cold beverages</h1>
          <StyledMenuSection>
            <MenuItems.Provider value={coldBeverages}>
              <MenuItem />
            </MenuItems.Provider>
          </StyledMenuSection>
        </StyledSection>
      <Footer/>
    </>
  )
}

export default Menu
