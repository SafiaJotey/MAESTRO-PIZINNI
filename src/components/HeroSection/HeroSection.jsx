import React from 'react';
import Navbar from '../Navbar/Navbar';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="banner">
      <div className="container">
        <Navbar />
        <div className="banner-content">
          <h3>Pizza Delivery</h3>
          <h1>MAESTRO PIZINNI</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores in
            praesentium velit accusantium ab aperiam?
          </p>

          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
