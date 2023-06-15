import React, { useContext } from 'react'
// import ImageContainer from './ImageContainer'
import { MenuItems } from './MenuItemsContext'
import { MenuItemWrapper, StyledImageContainer, StyledMenuImage } from './MenuItem.styles'

function MenuItem() {
  const products = useContext(MenuItems)

  if(products) {
    return (
       products.map((item) => 
      <MenuItemWrapper key={item.name}>
        <StyledImageContainer>
          <StyledMenuImage src={item.image}/>
        </StyledImageContainer>        
        <p>
          {item.name}
        </p>
        <p>
          {item.price}
        </p>
      </MenuItemWrapper>
      )
    
    )
  }
  return
}

export default MenuItem
