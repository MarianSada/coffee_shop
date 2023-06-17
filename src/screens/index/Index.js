import React from 'react'
import Header from '../../components//header/Header'
import Hero from '../../components/hero/Hero'
import Main from '../../components/Main'
import Footer from '../../components/footer/Footer'
import { styled } from 'styled-components'
import coffeeOnTable from '../../assets/beans.jpeg'

const StyledDiv = styled.div`
  background: 
    linear-gradient(to right, rgba(0,0,0, 0.9), rgba(0,0,0, 0.9)),
    url(${coffeeOnTable});
  /* height: 100vh;
  width: 100vw; */
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* position: fixed; */
  /* top: 0; */
  /* left: 0; */
  z-index: -2;
`

function Index() {
  return (
    <StyledDiv>
      <Header />
      <Hero />
      <Main/>
      <Footer/>
    </StyledDiv>
  )
}

export default Index
