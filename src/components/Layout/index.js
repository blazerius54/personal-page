import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Header from '../Header';
import SEO from '../seo';

const Layout = ({ children }) => (
    <div className="layoutWrapper">
        <Header />
        <SEO />
        <div className="childrenWrapper">
            {children}
        </div>
        <footer>
            <a
                href="https://github.com/blazerius54?tab=repositories"
                target="_blank"
            >
                GitHub
            </a>

            <a href="mailto:vedxam@gmail.com">
                vedxam@gmail.com
            </a>
        </footer>
    </div>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
