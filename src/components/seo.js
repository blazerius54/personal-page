import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ title }) {
  const { site } = useStaticQuery(
    graphql`
          query {
            site {
              siteMetadata {
                title
                description
                author
              }
            }
          }
        `,
  );

  const titleTemplate = title ? `${site.siteMetadata.author} | %s ` : `${site.siteMetadata.author} | frontend blog`;

  return (
    <Helmet
      htmlAttributes={{ lang: 'ru' }}
      title={title || site.siteMetadata.title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: 'description',
          content: title,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: title,
        },
        {
          property: 'og:type',
          content: 'website',
        },
      ]}
    />
  );
}

SEO.defaultProps = {
  title: '',
};

SEO.propTypes = {
  title: PropTypes.string,
};

export default SEO;
