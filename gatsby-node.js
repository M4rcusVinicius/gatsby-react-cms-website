const { createFilePath } = require(`gatsby-source-filesystem`)


// ====================================================== //
//             Create urls for Markdown pages             //
// ====================================================== //

exports.onCreateNode = ({ node, getNode, actions }) => {

  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}