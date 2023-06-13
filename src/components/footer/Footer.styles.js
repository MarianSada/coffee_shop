import { styled } from 'styled-components'
import { maxDevices } from '../breakpoints/Breakpoints'

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding: 50px 100px;
  gap: 30px;
  align-items: center;
  background: 
    linear-gradient(to top, rgba(0,0,0, 0.9), transparent),
    linear-gradient(to bottom, rgba(0,0,0, 0.9), transparent),
    url(${props => props.bgimg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media only screen and (${maxDevices.lg}) {
    padding: 5vh 5vw;
  }
`

export const StyledFooterRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: justify;
  justify-content: space-between;
  &:last-of-type {
    border-top: 1px solid #B97046;
    padding-top: 30px;
  }
  @media only screen and (${maxDevices.lg}) {
    flex-direction: column;
    gap: 20px;
    display: ${props => props.display ? "none" : "flex"};
    &:last-child {
      flex-direction: row;
      min-width: 100%;
    }
    & input {
      min-width: 100%;
    }
  }
`

export const StyledFooterElement = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media only screen and (${maxDevices.lg}) {
    flex-direction: column;
    /* gap: 20px; */

  }
`