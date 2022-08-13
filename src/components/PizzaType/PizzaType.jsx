import React, { useEffect, useState } from 'react';
import './PizzaType.css';
import PopularPizza from './PopularPizza';

const PizzaType = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/MenuPopular.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  return (
    <div className="PizzaType">
      <div className="container">
        <div className="title">
          <h6>PIZZA MENU (POPULAR)</h6>
          <h4>WELCOME TO</h4>
          <h4>MAESTRO PIZINNI</h4>
        </div>
        <div className="popular-Menu">
          {data.slice(0, 4).map((singlePizza) => (
            <PopularPizza
              key={singlePizza.name}
              singlePizza={singlePizza}
            ></PopularPizza>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PizzaType;
