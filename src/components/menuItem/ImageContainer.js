import React from 'react'
import { styled } from 'styled-components'
import MenuImage from './MenuImage'

const StyledImageContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -40px;
`

function ImageContainer() {
  return (
    <StyledImageContainer>
      <MenuImage />
    </StyledImageContainer>
  )
}

export default ImageContainer
