import { styled } from 'styled-components'
import { minDevices } from '../breakpoints/Breakpoints'

export const MenuItemWrapper = styled.div`
  display: flex;
  width: 100%;
  text-align: start;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  border: 1px solid grey;
  position: relative;
  padding: 20px 20px 20px 60px;
  margin-top: 30px;
  @media only screen and (${minDevices.lg}) {
    width: 45%;
  }
`

export const StyledImageContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -40px;
`

export const StyledMenuImage = styled.img`
height: 100%;
object-fit: cover;
`