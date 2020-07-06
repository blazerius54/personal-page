import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const BlogPost = ({ data }) => (
    <Layout>
        <h3>{data.markdownRemark.frontmatter.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>

);

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default BlogPost;
