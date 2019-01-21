import React from 'react'
import { graphql } from 'gatsby'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LanguagePicker from '../components/LanguagePicker'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Either, value, identity } from '../utils/functions'

const graphQLAdapater = props => ({
  faqs: Either.fromPath([
    'data',
    'allContentfulCategory',
    'edges',
    0,
    'node',
    'faqs',
  ])(props).fold(value([]), identity),
  metadata: Either.fromPath([
    'data',
    'allContentfulSiteMetadata',
    'edges',
    0,
    'node',
  ])(props).fold(value([]), identity),
  locale: Either.fromPath(['pageContext', 'locale'])(props)
    .map(locale => locale.replace(/\//g, ''))
    .fold(value('en-US'), identity),
})

const IndexPage = props => {
  const { faqs, metadata, locale } = graphQLAdapater(props)
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
      <LanguagePicker locales={metadata.locales} currentLocale={locale} />
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
