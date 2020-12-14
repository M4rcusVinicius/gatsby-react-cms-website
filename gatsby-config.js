module.exports = {
  siteMetadata: {
    title: `Simplesmente Estudante`,
    description: `Este é um site onde qualquer aluno pode postar seu trabalho, redação ou resumo para contribuir com outros estudantes do encino fundamental e medio, alem de poder ler ous trabalhos, resumos e redações dos outros alunos que ja publicaram, dessa forma todos podem estudar juntos !`,
    author: `Marcus Vinicius Almeida Pires`,
    company: `Maquina do Mundo`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
