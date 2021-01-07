import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Index = ({ siteTitle }) => (
    <header>
        <h3>
            <Link to="/">
                {siteTitle}
            </Link>
        </h3>
    </header>
);

Index.propTypes = {
    siteTitle: PropTypes.string,
};

Index.defaultProps = {
    siteTitle: '',
};

export default Index;
