const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")


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


// ====================================================== //
//                  Get data in GraphQL                   //
// ====================================================== //

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              image
              title
              subject
              author
            }
            timeToRead
          }
        }
      }
      categoryGroup: allMarkdownRemark {
        group(field: frontmatter___category) {
          category: fieldValue
          totalCount
        }
      }

      subjectGroup: allMarkdownRemark {
        group(field: frontmatter___subject) {
          subject: fieldValue
          totalCount
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allMarkdownRemark.edges


// ====================================================== //
//                 Create the post pages                  //
// ====================================================== //

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })


// ====================================================== //
//                 Create home post List                  //
// ====================================================== //

  const postsPerPage = 1
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/` : `/page/${index + 1}`,
      component: path.resolve(`./src/templates/blog-list.js`),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1,
      },
    })
  })


// ====================================================== //
//                  Create category List                  //
// ====================================================== //

  const categories = result.data.categoryGroup.group
  console.log("\x1b[32m", "\nsuccess", "\x1b[0m", "Create category List")

  categories.forEach(cat => {

    const numCategoryPages = Math.ceil( cat.totalCount / postsPerPage)
    const category = cat.category
    
    console.info(`Number of ${category} Pages => ${numCategoryPages}`)

    Array.from({ length: numCategoryPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/${category}/` : `/${category}/page/${index + 1}`,
        component: path.resolve(`./src/templates/blog-category.js`),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numCategoryPages,
          currentPage: index + 1,
          category: category,
        },
      })
    })
  })


// ====================================================== //
//                  Create subject List                   //
// ====================================================== //

  const subjects = result.data.subjectGroup.group

  console.log("\x1b[32m", "\nsuccess", "\x1b[0m", "Create subject List")

  subjects.forEach(sub => {

    const numSubjectPages = Math.ceil( sub.totalCount / postsPerPage)
    const subject = sub.subject
    
    console.info(`Number of ${subject} Pages => ${numSubjectPages}`)

    Array.from({ length: numSubjectPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/${subject}/` : `/${subject}/page/${index + 1}`,
        component: path.resolve(`./src/templates/blog-subject.js`),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numSubjectPages,
          currentPage: index + 1,
          subject: subject,
        },
      })
    })
  })

  console.log('\n')

}