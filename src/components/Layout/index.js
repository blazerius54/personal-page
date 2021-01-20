import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Layout = ({ children }) => (
    <div className="layoutWrapper">
        <main>
            {children}
        </main>
    </div>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
