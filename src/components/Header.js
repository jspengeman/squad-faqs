import React from 'react'
import Logo from './Logo'
import styled from 'styled-components'

const Container = styled.section`
  height: 80px;
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;

  @media (min-width: 456px) {
    height: 130px;
  }
  @media (min-width: 564px) {
    height: 140px;
  }
  @media (min-width: 768px) {
    height: 150px;
  }
`

const Header = () => {
  return (
    <Container>
      <a href="http://joinsquad.com/">
        <Logo />
      </a>
    </Container>
  )
}

export default Header
