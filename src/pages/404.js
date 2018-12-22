import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <h1> Page not found. </h1>
    <Link to="/"> Back to safety </Link>
  </div>
)

export default NotFoundPage
