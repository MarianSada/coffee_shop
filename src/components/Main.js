import React from 'react'
import { StyledSection } from './Section.styles'
import barista_bg from '../assets/barista.jpeg'
import Btn from './Btn'
import { ThemeProvider } from '@mui/material/styles'
import { customTheme } from '../styles/Themes'
import MenuItem from './menuItem/MenuItem'
import { MenuItems } from './menuItem/MenuItemsContext'
import { menuProducts } from './menuItem/MenuItemsContext'
import { StyledMenuSection } from './SpecialtyMenu.styles'
import Carousel from './carousel/Carousel'

function Main() {
  return (
    <main>
      <Carousel />
      <StyledSection className='black-bg'>
        <div className='barista padding-wrapper'>
          <h1>Do you really know how you like your coffee?</h1>
          <p>Combining passion with experience, the result can be only the best cofffee you will ever taste</p>
          <p>Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibhtincidunt.</p>
        </div>
        <div className='barista'>
          <img src={barista_bg} alt='barista'/>
        </div>
      </StyledSection>
      <StyledSection className='padding-wrapper flex-column'>
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

    </main>
  )
}

export default Main
