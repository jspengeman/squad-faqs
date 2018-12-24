import React from 'react'
import { graphql } from "gatsby"
import FAQ from '../components/FAQ'
import Header from '../components/Header'
import Layout from '../components/Layout'
import SEO from '../components/seo'

// TODO: Need to determine how ordering of FAQs will be done.
// TODO: Need to determine if categories for FAQs will be needed.
// TODO: Need to support autolinking headers.
// TODO: Need to support offline mode. 

const graphAdapater = ({ allContentfulFaq }) => 
  allContentfulFaq.edges.map(faq => faq.node)

const IndexPage = ({ data }) => {
  const faqs = graphAdapater(data)
  return (
      <Layout>
        <SEO title="Squad FAQs" keywords={[`squad`, `squad-faqs`]} />
        <Header />
        {faqs.map(faq => <FAQ key={faq.id} faq={faq} />)}
      </Layout>
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