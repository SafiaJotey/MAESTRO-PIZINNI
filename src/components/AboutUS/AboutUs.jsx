import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="container">
      <div className=" about">
        <div className="about-content">
          <h5>About Us</h5>
          <h4>WELCOME TO </h4>
          <h4>MAESTRO PIZZINI</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            sequi ipsum reprehenderit aliquam maxime rem consequatur earum
            ratione?
          </p>
          <button>READ MORE</button>
        </div>
        <div className="about-image">
          <img src="/images/pizza.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
