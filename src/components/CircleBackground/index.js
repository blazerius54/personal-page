import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import './style.scss';
import { MainTitle } from '../MainTitle';
import { postListWrapper } from '../../utils/consts';

const CircleBackground = () => {
  const scrollToPosts = () => scrollTo(`#${postListWrapper}`);

  return (
    <div className="circleBackground">
      <div className="bigCircle" />
      <div className="smallCircle" />
      <MainTitle />
      <button
        type="button"
        className="nextButton"
        onClick={scrollToPosts}
      >
        далее
      </button>
    </div>
  );
};

export default CircleBackground;
