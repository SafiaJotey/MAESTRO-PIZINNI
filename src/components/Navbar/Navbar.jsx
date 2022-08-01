import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src="images/logo.png" alt="" />
      </div>
      <div>
        <ul className="navbar">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">MENU</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">SHOP</a>
          </li>
          <li>
            <a href="#">NEWS</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
