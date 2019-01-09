import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import discord from '../images/discord.svg'
import github from '../images/github.svg'
import { Either, identity, value } from '../utils/functions'

const Container = styled.div`
  margin-top: 50px;
  text-align: center;
`

const Image = styled.img`
  display: inline-block;
  width: 150px;
  margin-left: 15px;
  margin-right: 15px;
`

const Disclaimer = styled.p`
  font-size: 12px;
  color: #606060;
`

const Footer = () => (
  <StaticQuery
    query={graphql`
      query socialUrls {
        site {
          siteMetadata {
            disclaimer
            srcUrl
            chatUrl
          }
        }
      }
    `}
    render={data => (
      <Container>
        <a
          href={Either.fromPath(['site', 'siteMetadata', 'srcUrl'])(data).fold(
            value(''),
            identity
          )}
        >
          <Image src={github} alt="github" />
        </a>
        <a
          href={Either.fromPath(['site', 'siteMetadata', 'chatUrl'])(data).fold(
            value(''),
            identity
          )}
        >
          <Image src={discord} alt="discord" />
        </a>
        <Disclaimer>
          {Either.fromPath(['site', 'siteMetadata', 'disclaimer'])(data).fold(
            value(''),
            identity
          )}
        </Disclaimer>
      </Container>
    )}
  />
)

export default Footer
