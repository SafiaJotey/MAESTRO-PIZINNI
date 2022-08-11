import React from 'react';
import './QuickDelivery.css';

const QuickDelivery = () => {
  return (
    <div className="container quickDelivery">
      <div className="quickDelivery_content">
        {' '}
        <h5>Quick Delivery</h5>
        <h4>ORDER A </h4>
        <h4>PIZZA NOW</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          sequi ipsum reprehenderit aliquam maxime rem consequatur earum
          ratione?
        </p>
        <form>
          <div className="w-100 ">
            <input className="w-50 " type="text" placeholder="First Name" />
            <input className="w-50 " type="text" placeholder="Last Name" />
          </div>

          <input
            className="w-100 "
            type="text"
            placeholder="Enter Street Address"
          />

          <div className="w-100">
            <input
              className="w-50 "
              type="text"
              placeholder="Appartment/Room"
            />
            <input className="w-50 " type="text" placeholder="Phone Number" />
          </div>

          <select name="Pizza Type" className="w-100 ">
            <option value="">Select Pizza Type</option>
            <option value="Meaty Onion">Meaty Onion</option>
            <option value="Sea Fantasy">Sea Fantasy</option>
            <option value="Meat Masala">Meat Masala</option>
            <option value="Chadder Cream">Chadder Cream</option>
            <option value="Sausage Carnival">Sausage Carnival</option>
            <option value="Tender Beef">Tender Beef</option>
            <option value="Mac & Cheese">Mac & Cheese</option>
            <option value="Layer Cake">Layer Cake</option>
          </select>
          <div className="w-100">
            {' '}
            <select name="Pizza Crust" className="w-50 ">
              <option value="">Select Pizza Crust</option>
              <option value="Thin">Thin</option>
              <option value="Medium">Medium</option>
              <option value="Thick">Thick</option>
              <option value="Italian">Italian</option>
            </select>
            <select name="Pizza Size" className="w-50 ">
              <option value="">Select Pizza Size</option>
              <option value="small(7')">small(7')</option>
              <option value="Medium(9')">Medium(9')</option>
              <option value="Large(12')">Large(12')</option>
              <option value="Family Size(17')">Family Size(17')</option>
            </select>
          </div>

          <input className="w-100 btn submit" type="submit" value="Submit" />
        </form>
      </div>

      <div className="quickDelivery_image">
        <img src="/images/quickDelivery.png" alt="" />
      </div>
    </div>
  );
};

export default QuickDelivery;
