import { styled } from 'styled-components'
import { Link } from 'react-router-dom'


export const StyledSocialBar = styled.div`
  display: flex;
  gap: 20px;
`

export const StyledSocialLink = styled(Link)` 
  font-size: 2rem;
  color: white;
  background-color: rgba(256, 256, 256, 0.1);
  padding: 5px;
  border-radius: 5px;
  &:hover {
    background-color: rgba(256, 256, 256, 0.8);
    color: #B97046
  }
`