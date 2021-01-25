import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import '../styles/global.scss';

const BlogPost = ({ data }) => (
    <Layout>
        <div className="postsWrapper">
            <h2 className="postTitle">
                {data.markdownRemark.frontmatter.title}
            </h2>
            <div className="originHeaderWrapper">
                <h4 className="author">
                    Автор: {data.markdownRemark.frontmatter.author}
                </h4>
                <h5>
                    <a href={data.markdownRemark.frontmatter.origin} target="_blank">
                        Оригинал статьи
                    </a>
                </h5>
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </div>
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
