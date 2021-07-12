/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({
  actions, graphql, reporter,
}) => {
  const result = await graphql(`
    {
      allWpPost {
        nodes {
          content
          id
          uri
        }
      }
    }
  `);

  if (result.errors) {
    reporter.error('There was an error while fetching posts', result.errors);
  }

  const { allWpPost } = result.data;

  const homeTemplate = require.resolve('./src/templates/index.js');

  if (allWpPost?.nodes.length) {
    allWpPost.nodes.forEach(post => {
      actions.createPage({
        component: homeTemplate,
        context: post,
        path: post.uri,
      });
    });
  }
};

