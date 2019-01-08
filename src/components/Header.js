import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Either, identity, value } from '../utils/functions'
import Logo from './Logo'

const Container = styled.section`
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 50px;
`

const Title = styled.h4`
  text-align: center;
  margin-top: 5px;
`

const FancyTitle = () => (
  <StaticQuery
    query={graphql`
      query siteTitle {
        site {
          siteMetadata {
            description
          }
        }
      }
    `}
    render={data => (
      <Title>
        {Either.fromPath(['site', 'siteMetadata', 'description'])(data).fold(
          value(''),
          identity
        )}
      </Title>
    )}
  />
)

const Header = () => {
  return (
    <div>
      <Container>
        <a href="http://joinsquad.com/">
          <Logo />
        </a>
        <FancyTitle>Community currated frequently asked questions.</FancyTitle>
      </Container>
    </div>
  )
}

export default Header
