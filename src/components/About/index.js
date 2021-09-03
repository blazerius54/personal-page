import React from 'react';
import Layout from '../Layout';
import './style.scss';

const About = () => (
    <Layout>
        <div className="postsWrapper">
            <div className="aboutWrapper">
                <div className="avatar" />
                <div>
                    <div className="aboutMeContent">
                        Занимаюсь фронт-энд разработкой с 2018 года. В основном работаю с React, Redux стэком.
                        На данный момент являюсь разработчиком в Sber`е. Ранее работал в компании Epam.
                        В 2019 году по программе релокации со своей семьёй переехал в Москву
                        <span role="img" aria-label="family">👨👩😸</span>.

                        Люблю хороший код, помогаю другим разработчикам писать понятный код.
                    </div>
                    <figure>
                        <blockquote>
                            The guru writes code for an audience of people rather than machines.
                        </blockquote>
                        <figcaption>
                            Steve McConnell. "Code Complete".
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </Layout>
);

export default About;
