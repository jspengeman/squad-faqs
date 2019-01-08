import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import discord from '../images/discord.svg'
import github from '../images/github.svg'
import { Either, identity, value } from '../utils/functions'

const SocialLinks = styled.div`
  margin-top: 50px;
  text-align: center;
`

const Icon = styled.img`
  display: inline-block;
  width: 150px;
  margin-left: 15px;
  margin-right: 15px;
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

const Footer = () => <Social />

export default Footer
