import React from 'react';
import './Direction.css';

const Direction = () => {
  return (
    <div className="direction">
      <div className="overlay">
        <div className="container">
          <div className="quality">
            <div className="quality_details"></div>
            <div className="quality_image"></div>
          </div>
          <div className="address">
          <div className="address_details"></div>
          <div className="quality_adress"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Direction;
