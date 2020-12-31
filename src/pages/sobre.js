import React, { useEffect } from "react"
import { Link } from "gatsby"
import netlifyIdentity from "netlify-identity-widget";

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => { 
  useEffect(() => {
    netlifyIdentity.init({})
  })
  return(
    <Layout>
      <SEO title="Sobre" />
      <h1>Simple Studant Project</h1>
      <Link to="/sobre/">About Page</Link> <br />
      <Link to="/">Home Page</Link>

      <button
        onClick={() => {
          netlifyIdentity.open();
        }}
      >
        Log In
      </button>
      <button
        onClick={() => {
          console.log(netlifyIdentity)
        }}
      >
        Current User
      </button>

    </Layout>
  )
}

export default AboutPage
