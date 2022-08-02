import React from 'react';
import './Count.css';
import SingleCount from './SingleCount';

const Count = () => {
  return (
    <div className="count">
      <div className=" container count_items">
        <SingleCount count="120" text="Awsome Employees"></SingleCount>
        <SingleCount count="58" text="Pizza Types"></SingleCount>
        <SingleCount count="1468" text="Satisfied Clients"></SingleCount>
        <SingleCount count="2031" text="Delivery"></SingleCount>
      </div>
    </div>
  );
};

export default Count;
