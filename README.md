## Squad FAQs

Squad FAQs is a static site generated with GatsbyJS that uses Contentful's content management system with webhooks to trigger builds on Netlify which will result in the site being regenerated with the new content.

### Development

A `.env` file is required that defines the following variables:
`CONTENTFUL_SPACE_ID` and `CONTENTFUL_DELIVERY_TOKEN`. An example env file is provided that can be copied and replaced with actual values.

To build this site locally it would be easiest if you have access to the Contentful space since all of the schemas are defined there. If you are interested in contributing just open an issue and we will get you set up.

You can use `gatsby develop` to run a development build of the project and `gatsby build` to create a build that includes all the static content that would be deployed.
