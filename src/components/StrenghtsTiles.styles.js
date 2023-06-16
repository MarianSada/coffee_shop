import { keyframes, styled } from 'styled-components'
import { minDevices } from './breakpoints/Breakpoints'

const animate = keyframes`
  0% { 
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const StyledStrenghtsTile = styled.div`
  min-width: calc((var(--carouselSliderWrapper-width) 
            - (var(--carouselRow-gap)
            * (${props => props.slidesshown + 1}) ))
            / (${props => props.slidesshown}));
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent);
  background-size: cover;
  aspect-ratio: 16 / 9;
  padding: 0 10px;
  box-shadow: 
    1px 1px 3px rgba(185, 112, 70, 0.5), 
    -1px -1px 3px rgba(185, 112, 70, 0.5);
  position: relative;
  overflow: hidden;
  animation-name: ${animate};
  animation-duration: 2s;
  margin-left: var(--carouselRow-gap);
  &:first-child {
    margin-left: 0;
    animation-duration: none;
  }
`

