import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Simple Studant Project</h1>
    <Link to="/sobre/">About Page</Link> <br />
    <Link to="/">Home Page</Link>
  </Layout>
)

export default IndexPage