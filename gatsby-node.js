

const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
  query MyQuery {
    LOLLIES {
      getAllLollies {
        lollyPath
      }
    }
  }
  `)

  console.log(data)
  data.LOLLIES.getAllLollies.forEach(({ paths }) => {
    actions.createPage({
      path: `/lollies/${paths}`,
      component: path.resolve(`./src/components/dynamicLollyPage.tsx`),
      context: {
        lollyPath: paths,
      },
    })
  })
}



