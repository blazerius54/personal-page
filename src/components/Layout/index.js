import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Header from '../Header';

const Layout = ({ children }) => (
    <div className="layoutWrapper">
        <Header />
        {children}
        <footer>
            <a href="mailto:vedxam@gmail.com">vedxam@gmail.com</a>
        </footer>
    </div>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
