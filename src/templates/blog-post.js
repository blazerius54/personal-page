import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import '../styles/global.scss';
import SEO from '../components/seo';
import arrow from '../assets/backward-arrow.svg';

const BlogPost = ({ data }) => (
  <Layout>
    <SEO title={data.markdownRemark.frontmatter.title} />
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
      <div className="home">
        <Link to={`/#${data.markdownRemark.id}`}>
          <img alt="arrow" src={arrow} />
        </Link>
      </div>
    </div>
  </Layout>
);

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        title
        author
        origin
      }
    }
  }
`;

export default BlogPost;
