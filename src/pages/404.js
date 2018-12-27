import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../utils/theme'

const Container = styled.div`
  text-align: center;
`

const Message = styled.h1`
  color: ${SECONDARY_COLOR};
`

const FancyLink = styled(Link)`
  color: ${PRIMARY_COLOR};
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header />
    <Container>
      <Message> 404 - Battle Buddy Not Found </Message>
      <FancyLink to="/"> Back to safety </FancyLink>
    </Container>
  </Layout>
)

export default NotFoundPage
