import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  display: flex;
  white-space: nowrap;
  height: 100%;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid rgba(0,0,0,0);
  transition: 0.3s ease-in;
  &:hover {
    background-color: #b97046;
    padding: 10px 20px; 
    border-radius: 4px; 
    transition: 0.3s ease-in;
  }
  ${({active}) =>
  active && 
    "padding: 10px 20px; border: 1px solid #b97046; border-radius: 4px; background-color: #222"
  }
`