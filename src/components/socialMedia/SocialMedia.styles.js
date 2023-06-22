import { styled } from 'styled-components'
import { Link } from 'react-router-dom'


export const StyledSocialBar = styled.div`
  width: -webkit-fit-content;
  width: fit-content;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  background-color: rgba(256, 256, 256, 0.1);
  padding: 5px 30px;
  border-radius: 100px;
`

export const StyledSocialLink = styled(Link)` 
  font-size: 2rem;
  color: white;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: #B97046;
    transform: scale(1.5);
  }
`