import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
      <SEO
        title="404"
        description="Pagina não encontrada"
      />

    <h1>404</h1>
    <p>Pagina não encontrada</p>
  </Layout>
)

export default NotFoundPage
