import { styled } from 'styled-components'

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
    linear-gradient(to bottom, rgba(0,0,0, 0.9), transparent); 
`

export const StyledFooterLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:last-of-type {
    border-top: 1px solid #B97046;
    padding-top: 30px;
  }
`

export const StyledFooterElement = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`