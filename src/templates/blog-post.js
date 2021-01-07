import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const BlogPost = ({ data }) => (
    <Layout>
        <h3>{data.markdownRemark.frontmatter.title}</h3>
        <h4>{data.markdownRemark.frontmatter.author}</h4>
        <h5><a href={data.markdownRemark.frontmatter.origin} target="_blank">Оригинал статьи</a></h5>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
);

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        origin
      }
    }
  }
`;

export default BlogPost;
