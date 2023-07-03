import { styled } from 'styled-components'
import hero_background from '../../assets/drinks.jpeg'
import React from 'react'

export const StyledMenuHero = styled.div`
  background: 
    radial-gradient(ellipse at left, rgba(0,0,0, 0.5), transparent),
    radial-gradient(ellipse at right, rgba(0,0,0, 0.5), transparent),
    radial-gradient(ellipse at bottom, rgba(0,0,0, 0.5), transparent),
    radial-gradient(ellipse at top, rgba(0,0,0, 0.5), transparent),
    url(${hero_background});
  background-repeat: no-repeat;
  background-position: 20% 85%;
  background-size: cover;
  padding: 50px 50px;
  min-height: 300px;
  text-align: center;
`

function MenuHero() {
  return (
    <StyledMenuHero>
      <h1>
        Our Menu
      </h1>
    </StyledMenuHero>
  )
}

export default MenuHero
