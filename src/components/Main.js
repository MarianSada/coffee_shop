import React from 'react'
import { StyledSection } from './Section.styles'
import Btn from './Btn'
import { ThemeProvider } from '@mui/material/styles'
import { customTheme } from '../styles/Themes'
import MenuItem from './menuItem/MenuItem'
import { MenuItems } from './menuItem/MenuItemsContext'
import { menuProducts } from './menuItem/MenuItemsContext'
import { StyledMenuSection } from './menuItem/SpecialtyMenu.styles'
import TwoColScGradient from './twoColScGradient/TwoColScGradient'
import CarouselSlideIndex from './carousel/CarouselSlideIndex'
import { styled } from 'styled-components'
import coffeeOnTable from '../assets/coffee_on_table.jpg'

const StyledImg = styled.img`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  
`

const StyledMain = styled.main`
  background: 
    linear-gradient(to top, rgba(0,0,0, 0.9), transparent),
    linear-gradient(to bottom, rgba(0,0,0, 0.9), transparent);
`

const breakPoints = () => {
  const browserWidth = window.innerWidth;

  let slidesshown;
  browserWidth > 1024 ? (slidesshown = 3)
    : browserWidth < 756
    ? (slidesshown = 1)
    : (slidesshown = 2);

  return slidesshown;
};

function Main() {
  return (
    <StyledMain>
      {/* <Carousel /> */}
      <StyledImg src={coffeeOnTable} />
      <CarouselSlideIndex slidesshown={breakPoints()}/>
      <TwoColScGradient />
      <StyledSection className='flex-column'>
        <ThemeProvider theme={customTheme}>
          <Btn color="primary" size="large" variant="contained">Click me</Btn>
        </ThemeProvider>
        <h1>La Camionnette Specialty Menu</h1>
        <StyledMenuSection>
          <MenuItems.Provider value={menuProducts}>
            <MenuItem />
          </MenuItems.Provider>
        </StyledMenuSection>
      </StyledSection>
    </StyledMain>
  )
}

export default Main
