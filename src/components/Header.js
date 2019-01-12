import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const Container = styled.section`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 50px;
`

const Title = styled.h4`
  text-align: center;
  margin-top: 5px;
`

const Header = ({ subtitle }) => {
  return (
    <Container>
      <a href="http://joinsquad.com/">
        <Logo />
      </a>
      <Title>{subtitle}</Title>
    </Container>
  )
}

export default Header
