import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { PostTitle } from '../components/PostTitle';

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => (
    <Layout>
        <SEO title="Home" />
        {edges.length > 0 && (
            edges.map(({ node }) => (
                <Link
                    key={node.id}
                    to={node.fields.slug}
                >
                    <PostTitle
                        title={node.frontmatter.title}
                        date={node.frontmatter.date}
                    />
                </Link>
            ))
        )}
    </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
