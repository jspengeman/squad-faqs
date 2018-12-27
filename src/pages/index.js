import React from 'react'
import { graphql } from 'gatsby'
import FAQ from '../components/FAQ'
import Header from '../components/Header'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Either } from '../utils/functions'

// TODO: Need to support autolinking headers.
// TODO: Need to support offline mode.

const graphAdapater = ({ allContentfulCategory }) => {
  return Either.fromPath(['edges', 0, 'node', 'faqs'])(
    allContentfulCategory
  ).fold(() => [], faqs => faqs)
}

const IndexPage = ({ data }) => {
  const faqs = graphAdapater(data)
  return (
    <Layout>
      <SEO title="Squad FAQs" keywords={[`squad`, `squad-faqs`]} />
      <Header />
      {faqs.map(faq => (
        <FAQ key={faq.id} faq={faq} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query AllFAQsQuery {
    allContentfulCategory {
      edges {
        node {
          id
          name
          faqs {
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
  }
`

export default IndexPage
