import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/Home/About" 
import SubjectLinks from "../components/InfoCards/SubjectLinks" 

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <SubjectLinks />
  </Layout>
)

export default HomePage
