import React from 'react';
import { graphql, Link } from 'gatsby';
import './style.scss';
import Layout from '../Layout';
import SEO from '../seo';
import { PostTitle } from '../PostTitle';

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => (
    <Layout>
        <SEO title="Home" />
        {edges.length > 0 && (
            edges.map(({ node }) => (
                <div
                    key={node.id}
                    className="postsList"
                >
                    <Link
                        to={node.fields.slug}
                    >
                        <PostTitle
                            title={node.frontmatter.title}
                            date={node.frontmatter.date}
                        />
                    </Link>
                </div>
            ))
        )}
    </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
    ){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY", locale: "ru")
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
