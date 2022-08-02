import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div className="container">
      <div className=" menu">
        <div className="menu-image">
          <img src="/images/pizza.jpg" alt="" />
        </div>
        <div className="menu-content">
          <h5>menu Us</h5>
          <h4>WELCOME TO </h4>
          <h4>MAESTRO PIZZINI</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            sequi ipsum reprehenderit aliquam maxime rem consequatur earum
            ratione?
          </p>
          <button className="btn">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
