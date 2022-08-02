import React from 'react';
import './Count.css';
const SingleCount = (props) => {
  return (
    <div className="single-count">
      <h3>{props.count}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default SingleCount;
