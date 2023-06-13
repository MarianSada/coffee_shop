import { styled } from 'styled-components'
import hero_background from '../../assets/wide_iced_coffee.jpg'
import { maxDevices } from '../breakpoints/Breakpoints'

export const StyledHero = styled.div`
  background: 
    radial-gradient(ellipse at left, rgba(0,0,0, 0.8), transparent),
    radial-gradient(ellipse at right, rgba(0,0,0, 0.5), transparent),
    radial-gradient(ellipse at bottom, rgba(0,0,0, 0.5), transparent),
    url(${hero_background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 5vh 5vw;
  min-height: 80vh;
  text-align: center;
  @media only screen and (${maxDevices.lg}) {
    min-height: 50vh;
  }
`