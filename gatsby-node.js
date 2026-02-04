const path = require(`path`)

const slugify = text =>
  text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const portfolioTemplate = path.resolve(`./src/templates/portfolio-item.js`)

  const result = await graphql(`
    {
      allContentfulAliciaInterior {
        nodes {
          id
          title
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const items = result.nodes || result.data.allContentfulAliciaInterior.nodes

  items.forEach(node => {
    const slug = slugify(node.title)
    createPage({
      path: `/proyectos/${slug}`,
      component: portfolioTemplate,
      context: {
        id: node.id,
      },
    })
  })
}
