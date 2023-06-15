import React from 'react'
import barista_bg from '../../assets/barista.jpeg'
import { StyledTwoColScGradient, StyledTextSc } from './TwoColScGradient.styles'


function TwoColScGradient() {
  return (
    <StyledTwoColScGradient >
      <StyledTextSc>
        <h1>Do you really know how you like your coffee?</h1>
        <p>Combining passion with experience, the result can be only the best cofffee you will ever taste</p>
        <p>Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibhtincidunt.</p>
      </StyledTextSc>
      <div>
        <img src={barista_bg} alt='barista'/>
      </div>
    </StyledTwoColScGradient>
  )
}

export default TwoColScGradient
