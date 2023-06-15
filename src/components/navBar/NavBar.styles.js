import { styled } from 'styled-components'
import { maxDevices } from '../breakpoints/Breakpoints'

export const maxDevices = {
  xs: `(max-width: 320px)`,
  sm: `(max-width: 640px)`,
  md: `(max-width: 768px)`,
  lg: `(max-device-width: 1024px)`,
  xl: `(max-width: 1280px)`,
}

export const StyledNavbar = styled.ul`
  display: flex;

  @media only screen and (${maxDevices.lg}) {
    display: flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    gap: 20px;
    font-size: 1.25rem;
    background-color: black;
    height: 100%;
    padding: 20px;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 2;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
  }
`