import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
    description, meta, title,
}) {
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

    console.log({
        description, meta, title, site,
    });

    const titleTemplate = title ? `${site.siteMetadata.author} | %s ` : null;
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
                {
                    name: 'twitter:card',
                    content: 'summary',
                },
                {
                    name: 'twitter:creator',
                    content: site.siteMetadata.author,
                },
                {
                    name: 'twitter:title',
                    content: title,
                },
                {
                    name: 'twitter:description',
                    content: title,
                },
            ].concat(meta)}
        />
    );
}

SEO.defaultProps = {
    meta: [],
    description: '',
};

SEO.propTypes = {
    description: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
};

export default SEO;
