import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm Orçun, a full-stack developer living in beautiful Switzerland.</h2>
      <p>Need to explore frameworks? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage