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
            <h4 className="author">
                Автор: {data.markdownRemark.frontmatter.author}
            </h4>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            <h5>
                <a href={data.markdownRemark.frontmatter.origin} target="_blank">
                    Оригинал статьи
                </a>
            </h5>
        </div>
    </Layout>
);
function foo() {
    const x = 2;
    console.log(x);
}

foo();
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
