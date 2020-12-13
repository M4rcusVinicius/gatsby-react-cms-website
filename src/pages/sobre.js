import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <SEO title="Sobre" />
    <h1>About Page</h1>
    <ul>
      <li>
        <Link to="/" activeStyle={{ color: "red" }}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/sobre" activeStyle={{ color: "red" }}>
          About (Gatsby Link)
        </Link>
      </li>
    </ul>
  </Layout>
)

export default AboutPage