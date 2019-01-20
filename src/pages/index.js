import React from 'react'
import { graphql } from 'gatsby'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LanguagePicker from '../components/LanguagePicker'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Either, value, identity } from '../utils/functions'

const graphAdapater = data => ({
  faqs: Either.fromPath(['allContentfulCategory', 'edges', 0, 'node', 'faqs'])(
    data
  ).fold(value([]), identity),
  metadata: Either.fromPath(['allContentfulSiteMetadata', 'edges', 0, 'node'])(
    data
  ).fold(value([]), identity),
})

const IndexPage = ({ data }) => {
  const { faqs, metadata } = graphAdapater(data)
  return (
    <div>
      <Layout>
        <SEO title={metadata.title} keywords={[`squad`, `squad-faqs`]} />
        <Header subtitle={metadata.subtitle} />
        {faqs.map(faq => (
          <FAQ key={faq.id} faq={faq} />
        ))}
        <Footer
          disclaimer={metadata.disclaimer}
          sourceUrl={metadata.sourceUrl}
          chatUrl={metadata.chatUrl}
        />
      </Layout>
      <LanguagePicker locales={metadata.locales} />
    </div>
  )
}

export const query = graphql`
  query AllFAQsQuery($locale: String) {
    allContentfulSiteMetadata(filter: { node_locale: { regex: $locale } }) {
      edges {
        node {
          title
          subtitle
          disclaimer
          chatUrl
          sourceUrl
          locales {
            value
            displayName
          }
        }
      }
    }

    allContentfulCategory(filter: { node_locale: { regex: $locale } }) {
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
