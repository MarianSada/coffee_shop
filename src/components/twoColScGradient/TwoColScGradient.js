import React from 'react'
import barista_bg from '../../assets/barista.jpeg'
import { GradientStyledSection, TextStyledArea } from './TwoColScGradient.styles'


function TwoColScGradient() {
  return (
    <GradientStyledSection >
      <TextStyledArea>
        <h1 className='title'>Do you really know how you like your coffee?</h1>
        <p>Combining passion with experience, the result can be only the best cofffee you will ever taste</p>
        <p>Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibhtincidunt.</p>
      </TextStyledArea>
      <div>
        <img src={barista_bg} alt='barista'/>
      </div>
    </GradientStyledSection>
  )
}

export default TwoColScGradient
