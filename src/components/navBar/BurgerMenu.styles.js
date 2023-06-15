import { styled } from 'styled-components'
import { minDevices } from '../breakpoints/Breakpoints'

export const StyledBurgerNav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1.25rem;
  background-color: black;
  height: 100vh;
  padding: 20px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.5s ease-in-out;
  @media only screen and (${minDevices.lg}) {
    display: none;
  }
`