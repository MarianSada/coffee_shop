import { styled } from 'styled-components'


export const MenuItemWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid grey;
  position: relative;
  padding: 20px 20px 20px 60px;
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