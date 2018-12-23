import React from "react"
import Image from "./Image"
import styled from "styled-components"

// TODO: This size will need to be dynamic based on screen size.
// Maybe that should be done with the graphql query?
const Section = styled.section`
  height: 200px;
  width: 300px;
  margin: 0 auto;
`

const Header = () => {
  return (
    <Section>
      <Image />
    </Section>
  )
}

export default Header