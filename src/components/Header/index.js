import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import './style.scss';

const Header = () => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
    `);

    return (
        <header>
            <h3>
                <Link to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h3>

            <Link to="/about">
                🧑‍💻
            </Link>
        </header>
    );
};

export default Header;
