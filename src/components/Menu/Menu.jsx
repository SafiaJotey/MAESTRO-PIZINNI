import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div className="container">
      <div className=" menu">
        <div className="menu-image">
          <img src="/images/pizzaCrust.jpg" alt="" />
        </div>
        <div className="menu-content">
          <h5>The Pizza Menu</h5>
          <h4>CHICAGO</h4>
          <h4>THIN CRUST</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            sequi ipsum reprehenderit aliquam maxime rem consequatur earum
            ratione?
          </p>
          <button className="btn">VIEW MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
