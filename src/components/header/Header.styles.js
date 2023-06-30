import { styled } from 'styled-components'
import { minDevices } from '../breakpoints/Breakpoints'

export const StyledHeader = styled.header`
  height: 100px;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  padding: 0 20px;
  background-color: #050706;
  @media only screen and (${minDevices.lg}) {
    padding: 0 50px;
  }
`

export const StyledProfileBtnsWrapper = styled.div`
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  a {
      display: none;
    }

  @media only screen and (${minDevices.lg}) {
    a {
        display: flex;
        margin-right: 20px;
    }
  }
`