import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { MenuItems } from './MenuItemsContext'

const StyledMenuImage = styled.img`
  height: 100%;
  object-fit: cover;
`

function MenuImage() {
  const sharedImages = useContext(MenuItems)

  return (
      <StyledMenuImage src={sharedImages[0].image}/>
  )
}

export default MenuImage
