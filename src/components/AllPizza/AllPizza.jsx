import React, { useEffect, useState } from 'react';
import './AllPizza.css';
import IndividualPizza from './IndividualPizza';
const AllPizza = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/MenuPopular.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  });
  return (
    <div className="allPizza">
      <div className="container">
        <div className="title">
          <h6>DELICIOUS PIZZAS </h6>
          <h4>WELCOME TO</h4>
          <h4>MAESTRO PIZINNI</h4>
        </div>
        <div className="all-Menu">
          {data.map((individualPizza) => (
            <IndividualPizza
              key={individualPizza.name}
              individualPizza={individualPizza}
            ></IndividualPizza>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPizza;
