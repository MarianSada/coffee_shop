import { styled } from 'styled-components'

export const StyledStrenghtsTile = styled.div`
  min-width: var(--strenghtsTile-size);
  background: 
    linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent);
  background-size: cover;
  aspect-ratio: 16 / 9;
  padding: 0 1vw;
  box-shadow: 
    1px 1px 3px rgba(185, 112, 70, 0.5), 
    -1px -1px 3px rgba(185, 112, 70, 0.5);
  position: relative;
  overflow: hidden;
  transform: translateX(${props => props.slide + "vw"});
  transition: 2s ease-in-out;

`
