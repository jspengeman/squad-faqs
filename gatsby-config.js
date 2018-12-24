// console.log(process.env.GATSBY__CONTENTFUL_SPACE_ID)
// console.log(process.env)

const config = Object.assign(
  {},
  process.env,
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
  }).parsed
)

module.exports = {
  siteMetadata: {
    title: `Squad FAQs`,
    description: `Community currated frequently asked questions.`,
    author: `@jspengeman`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: config.CONTENTFUL_SPACE_ID,
        accessToken: config.CONTENTFUL_DELIVERY_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Squad FAQs`,
        short_name: `FAQs`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#FFC40B`,
        display: `minimal-ui`,
        icon: `src/images/icon-short.png`, 
      },
    },
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
