import React from 'react';
import './style.scss';

export const PostTitle = ({ title, date }) => (
  <div className="postTitleWrapper">
    <h2>
      {title}
    </h2>
    <p>
      {date}
    </p>
  </div>
);
