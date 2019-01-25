import React from 'react'
import { darken } from 'polished'
import styled, { createGlobalStyle } from 'styled-components'
import { PRIMARY_COLOR } from '../utils/theme'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
  }

  a {
    color: ${PRIMARY_COLOR};
  }

  a:hover {
    color: ${darken(0.1, PRIMARY_COLOR)};
  }
`

export const Container = styled.section`
  margin-right: auto;
  margin-left: auto;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 768px) {
    width: 720px;
  }
  @media (min-width: 992px) {
    width: 720px;
  }
  @media (min-width: 1200px) {
    width: 720px;
  }
`

export const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <Container>{children}</Container>
  </div>
)

export default Layout
