import { styled } from 'styled-components'
import hero_background from '../../assets/wide_iced_coffee.jpg'
import { minDevices } from '../breakpoints/Breakpoints'

export const StyledHero = styled.div`
  background: 
    radial-gradient(ellipse at left, rgba(0,0,0, 0.8), transparent),
    radial-gradient(ellipse at right, rgba(0,0,0, 0.5), transparent),
    radial-gradient(ellipse at bottom, rgba(0,0,0, 0.5), transparent),
    url(${hero_background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 50px 50px;
  min-height: 300px;
  text-align: center;
  @media only screen and (${minDevices.lg}) {
    min-height: 600px;
  }
`