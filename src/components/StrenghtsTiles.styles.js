import { styled } from 'styled-components'

export const StyledStrenghtsTile = styled.div`
  min-width: 24vw;
  background: 
    linear-gradient(to right, rgba(0, 0, 0, 0.7), transparent),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent);
  background-size: cover;
  aspect-ratio: 16 / 9;
  padding: 0 1rem;
  box-shadow: 
    1px 1px 3px rgba(185, 112, 70, 0.5), 
    -1px -1px 3px rgba(185, 112, 70, 0.5);
  position: relative;
  overflow: hidden;
  transform: translateX(${props => props.slide + "vw"});
  transition: 2s ease-in-out;
    &::after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      height: 4px;
      width: 0%;
      background: #B97046;
      transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
      z-index: 2;
    }
    &:hover::after{
      width: 100%;
      right: auto;
      left: 0;
    }
`
