import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem 
      slug="/slug/"
      date="date"
      title="title"
      description="description"
      category="category"
      subject="subject"
      timeToRead="timeToRead"
      image="image"
      note="note"
      />
    <Link to="/sobre/">About Page</Link> <br />
    <Link to="/">Home Page</Link>
  </Layout>
)

export default IndexPage
