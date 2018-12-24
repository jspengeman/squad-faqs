import React from 'react'
import { graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import FAQ from '../components/FAQ'
import Header from '../components/Header'
import SEO from '../components/seo'

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
  @media (min-width:  992px) {
    width: 720px;
  }
  @media (min-width: 1200px) {
    width: 720px;
  }
`

const graphAdapater = ({ allContentfulFaq }) => 
  allContentfulFaq.edges.map(faq => faq.node)

const IndexPage = ({ data }) => {
  const faqs = graphAdapater(data)
  return (
    <div>
      <GlobalStyle />
      <Container>
        <SEO title="Squad FAQs" keywords={[`squad`, `squad-faqs`]} />
        <Header />
        {faqs.map(faq => <FAQ key={faq.id} faq={faq} />)}
      </Container>
    </div>
  )
}

export const query = graphql`
  query AllFAQsQuery {    
    allContentfulFaq {
      edges {
        node {
          id
          question {
            id
            question
          }
          answer {
            id
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

export default IndexPage