import React from 'react'
import Image from './Image'
import styled from 'styled-components'

// TODO: These media queries could probably be adjusted a bit.
const Section = styled.section`
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
    <Section>
      <a href="http://joinsquad.com/">
        <Image />
      </a>
    </Section>
  )
}

export default Header
