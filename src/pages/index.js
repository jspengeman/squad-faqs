import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'

const IndexPage = () => (
  <div>
    <SEO title="Squad FAQs" keywords={[`squad`, `squad-faqs`]} />
    <h1>Squad FAQs</h1>
    <Link to="/blah/">Go to blah</Link>
  </div>
)

export default IndexPage