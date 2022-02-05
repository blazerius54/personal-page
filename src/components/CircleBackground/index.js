import React from 'react';
import './style.scss';
import { MainTitle } from '../MainTitle';

const CircleBackground = () => (
  <div className="circleBackground">
    <div className="bigCircle" />
    <div className="smallCircle" />
    <MainTitle />
  </div>
);

export default CircleBackground;
