import React from 'react';
import './PizzaType.css';

const PopularPizza = (props) => {
  const { image, name, details, price } = props.singlePizza;
  return (
    <div className="singlePizza">
      <img src={image} alt="" />
      <div className="details">
        <h6>{name}</h6>
        <p>{details}</p>
      </div>
      <h4>{price}</h4>
    </div>
  );
};

export default PopularPizza;
