require("dotenv").config()
const queries = require("./src/utils/algolia_queries")

module.exports = {
  siteMetadata: {
    title: `Simplesmente Estudante`,
    description: `Este é um site onde qualquer aluno pode postar seu trabalho, redação ou resumo para contribuir com outros estudantes do encino fundamental e medio, alem de poder ler ous trabalhos, resumos e redações dos outros alunos que ja publicaram, dessa forma todos podem estudar juntos !`,
    author: `Marcus Vinicius Almeida Pires`,
    company: `Maquina do Mundo`,
    siteUrl: `https://https://simple-studant.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    // needs to be the first to work with gatsby-remark-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true,
      },
    },    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Simplesmente Estudante`,
        short_name: `Simplesmente Estudante`,
        start_url: `/`,
        background_color: `#F8F8F8`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-light.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-lazy-load`,
          `gatsby-plugin-netlify-cms`,
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
}
