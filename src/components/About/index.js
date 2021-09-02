import React from 'react';
import Layout from '../Layout';
import './style.scss';

const About = () => (
    <Layout>
        {/* TODO check why is postsWrapper working */}
        <div className="postsWrapper">
            <div className="aboutWrapper">
                <div className="avatar" />
                <div>
                    its about me
                </div>
            </div>
        </div>
    </Layout>
);

export default About;
