import { styled } from 'styled-components'
import { Link } from 'react-router-dom'


export const StyledSocialBar = styled.div`
  display: flex;
`

export const StyledSocialLink = styled(Link)` 
  font-size: 2rem;
  color: white;
  background-color: rgba(256, 256, 256, 0.1);
  padding: 5px;
  border-radius: 5px;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background-color: rgba(256, 256, 256, 0.8);
    color: #B97046
  }
`