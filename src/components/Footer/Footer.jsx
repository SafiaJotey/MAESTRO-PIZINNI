import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <div>
      <div class=" footer-section">
        <div className="logo">
          <div className="col-lg-6">
            <img src="images/logo.png" alt="" />
          </div>
          <div class="col-lg-6 ">
            <div>
              <a href="">Download Now</a>
              <a href="">Licence</a>
            </div>
            <div>
              <a href="">About</a>
              <a href="">Features</a>
              <a href="">Pricing</a>
              <a href="">Career</a>
              <a href=""> Privacy Policy</a>
            </div>
          </div>
        </div>

        <div class="col-lg-6 ">
          <h6>Get the app</h6>
          <div>
            <img src="images/App Store Badge.png" alt="" />
          </div>
          <div>
            <img src="images/Google Play Badge.png" alt="" />
          </div>
        </div>
        <hr />
        <small class="text-lg-start text-center">
          {' '}
          &copy; All rights are researved 2021
        </small>
      </div>
    </div>
  );
};

export default Footer;
