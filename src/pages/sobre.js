import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const AboutPage = () => (
  <>
    <SEO title="Sobre" />
    <h1>About Page</h1>
    <ul>
      <li>
        <Link to="/" activeStyle={{ color: "red" }}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" activeStyle={{ color: "red" }}>
          About (Gatsby Link)
        </Link>
      </li>
    </ul>
  </>
)

export default AboutPage