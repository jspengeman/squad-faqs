import React from 'react'
import styled from 'styled-components'
import discord from '../images/discord.svg'
import github from '../images/github.svg'

const Container = styled.section`
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
  color: #a9a9a9;
`

const Footer = ({ disclaimer, sourceUrl, chatUrl }) => (
  <Container>
    <a href={sourceUrl}>
      <Image src={github} alt="github" />
    </a>
    <a href={chatUrl}>
      <Image src={discord} alt="discord" />
    </a>
    <Disclaimer>{disclaimer}</Disclaimer>
  </Container>
)

export default Footer
