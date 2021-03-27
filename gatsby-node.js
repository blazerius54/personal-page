const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {
        createNodeField({
            node,
            name: 'slug',
            value: createFilePath({ node, getNode, basePath: 'pages' }),
        });
    }
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/pages/"}}
    ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/blog-post.js'),
            context: {
                slug: node.fields.slug,
            },
        });
    });

    createPage({
        path: '/',
        component: path.resolve('./src/components/RootPage/index.js'),
    });

    createPage({
      path: '/about',
      component: path.resolve('./src/components/About/index.js'),
    });
};
