import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'

// TODO: Should get rid of this and look into creating a global redirect.
const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <h1> Page not found. </h1>
    <Link to="/"> Back to safety </Link>
  </div>
)

export default NotFoundPage
