import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from './Image'
import styled from 'styled-components'
import discord from '../images/discord.png'
import github from '../images/github.png'
import { Either, identity, value } from '../utils/functions'

const SocialLinks = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`

const Icon = styled.img`
  height: 24px;
  width: 24px;
  margin-right: 10px;

  @media (max-width: 564px) {
    height: 16px;
    width: 16px;
  }
`

const Social = () => (
  <StaticQuery
    query={graphql`
      query socialUrls {
        site {
          siteMetadata {
            srcUrl
            chatUrl
          }
        }
      }
    `}
    render={data => (
      <SocialLinks>
        <a
          href={Either.fromPath(['site', 'siteMetadata', 'srcUrl'])(data).fold(
            value(''),
            identity
          )}
        >
          <Icon src={github} alt="github" />
        </a>
        <a
          href={Either.fromPath(['site', 'siteMetadata', 'chatUrl'])(data).fold(
            value(''),
            identity
          )}
        >
          <Icon src={discord} alt="discord" />
        </a>
      </SocialLinks>
    )}
  />
)

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
    <div>
      <Social />
      <Container>
        <a href="http://joinsquad.com/">
          <Image />
        </a>
      </Container>
    </div>
  )
}

export default Header
