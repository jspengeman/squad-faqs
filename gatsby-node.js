const path = require('path')
const { Either, identity } = require('./src/utils/functions')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allContentfulSiteMetadata {
            edges {
              node {
                locales {
                  value
                  displayName
                }
              }
            }
          }
        }
      `).then(result => {
        const either = result.errors
          ? Either.Left(result.errors)
          : Either.Right(result.data)

        return either
          .chain(data =>
            Either.fromPath([
              'allContentfulSiteMetadata',
              'edges',
              0,
              'node',
              'locales',
            ])(data).fold(reject, identity)
          )
          .map(locale =>
            createPage({
              path: `/${locale.value}`,
              component: path.resolve('src/pages/index.js'),
              context: { locale: `/${locale.value}/` },
            })
          )
      })
    )
  })
}
