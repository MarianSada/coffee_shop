import { styled } from 'styled-components'
import { minDevices } from '../breakpoints/Breakpoints'

export const StyledNavbar = styled.ul`
    display: flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    font-size: 1.25rem;
    background-color: black;
    padding: 20px;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 2;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    li {
     margin-top: 20px;
    }

  @media only screen and (${minDevices.lg}) {
    flex-direction: row;
    -webkit-flex-direction: row;
    position: relative;
    transform: none;
    background-color: inherit;
    li {
      margin-left: 20px;
      margin-top: 0;
      &:first-child {
        margin-left: -40px;
      }
    }
  }
`