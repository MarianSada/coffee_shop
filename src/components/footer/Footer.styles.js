import { styled } from 'styled-components'
import { minDevices } from '../breakpoints/Breakpoints'

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  position: relative;
  overflow: hidden;
  gap: 30px;
  align-items: center;
  -webkit-align-items: center;
  background: 
    linear-gradient(to top, rgba(0,0,0, 0.9), transparent),
    linear-gradient(to bottom, rgba(0,0,0, 0.9), transparent),
    url(${props => props.bgimg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 20px;
  @media only screen and (${minDevices.lg}) {
    padding: 50px 100px;
  }
`

export const StyledFooterRow = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    align-items: center;
    -webkit-align-items: center;
    text-align: justify;
    gap: 20px;
    display: ${props => props.display ? "none" : "flex"};
    &:last-of-type {
      border-top: 1px solid #B97046;
      padding-top: 30px;
      flex-direction: row;
      -webkit-flex-direction: row;
      min-width: 100%;
    }
    & input {
      min-width: 100%;
    }
  @media only screen and (${minDevices.lg}) {
    display: flex;
    flex-direction: row;
    -webkit-flex-direction: row;
    width: 100%; 
  }
  & input {
      min-width: 300px;
    }
`

export const StyledFooterElement = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  gap: 20px;
  align-items: center;
  -webkit-align-items: center;
  @media only screen and (${minDevices.lg}) {
    flex-direction: row;
    -webkit-flex-direction: row;
  }
`