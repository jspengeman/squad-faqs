import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
  }
`

export const Container = styled.section`
  margin-right: auto;
  margin-left: auto;
  padding: 15px;

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
