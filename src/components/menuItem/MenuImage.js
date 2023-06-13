import React, { useContext } from 'react'
import { MenuItems } from './MenuItemsContext'
import { StyledMenuImage } from './MenuItem.styles'



function MenuImage() {
  const sharedImages = useContext(MenuItems)

  return (
      <StyledMenuImage src={sharedImages[0].image}/>
  )
}

export default MenuImage
