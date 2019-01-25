import React from 'react'
import { graphql } from 'gatsby'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LanguagePicker from '../components/LanguagePicker'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Either, value, identity } from '../utils/functions'

const adapter = fields => input =>
  Object.keys(fields).reduce(
    (output, key) =>
      Object.assign(output, {
        [key]: Either.fromPath(fields[key].path)(input).fold(
          value(fields[key].undef),
          identity
        ),
      }),
    {}
  )

const IndexPage = ({ faqs, metadata, locale }) => {
  console.log({ faqs, metadata, locale })
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
      <LanguagePicker
        locales={metadata.locales}
        currentLocale={locale.replace(/\//g, '')}
      />
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

const GraphAdapter = ({ adapter, render }) => props => render(adapter(props))

export default GraphAdapter({
  adapter: adapter({
    faqs: {
      path: ['data', 'allContentfulCategory', 'edges', 0, 'node', 'faqs'],
      undef: [],
    },
    metadata: {
      path: ['data', 'allContentfulSiteMetadata', 'edges', 0, 'node'],
      undef: {},
    },
    locale: { path: ['pageContext', 'locale'], undef: 'en-US' },
  }),
  render: props => <IndexPage {...props} />,
})
