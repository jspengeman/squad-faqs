const config = Object.assign(
  {},
  process.env,
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  }).parsed
)

module.exports = {
  siteMetadata: {
    title: `Squad FAQs`,
    description: `Community currated frequently asked questions.`,
    srcUrl: 'https://github.com/jspengeman/squad-faqs',
    chatUrl: 'https://discordapp.com/invite/aN2MtGH',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
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
    `gatsby-transformer-remark`,
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
    'gatsby-plugin-offline',
  ],
}
