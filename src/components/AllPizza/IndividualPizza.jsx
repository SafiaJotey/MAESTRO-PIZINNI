import React from 'react';

const IndividualPizza = (props) => {
  const { image, name, details, price } = props.individualPizza;

  return (
    <div className="individualPizza ">
      <img src={image} alt="" />
      <div className="details">
        <h6>{name}</h6>
        <p>{details}</p>
      </div>
      <h4>{price}</h4>
    </div>
  );
};

export default IndividualPizza;
