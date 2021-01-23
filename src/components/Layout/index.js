import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Header from '../Header';

const Layout = ({ children }) => (
    <div className="layoutWrapper">
        <Header />
        {children}
    </div>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
