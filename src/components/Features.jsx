import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FaBoxOpen } from "react-icons/fa";
import "../CSS/Features.css";

function Features() {
  return (
    <div className="features">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col">
            <FaTruckFast className="Icons" />
            <div className="feat-text">
              <h5>Free Shipping</h5>
              <p>Free Shipping on all your Orders</p>
            </div>
          </div>

          <div className="col">
            <FaHeadset className="Icons" />
            <div className="feat-text">
              <h5>Customer Support 24/7</h5>
              <p>Instant access to support</p>
            </div>
          </div>

          <div className="col">
            <RiShoppingBag3Line className="Icons" />
            <div className="feat-text">
              <h5>100% Secure Payment</h5>
              <p>We ensure your money is safe</p>
            </div>
          </div>

          <div className="col">
            <FaBoxOpen className="Icons" />
            <div className="feat-text">
              <h5>Money-Back Guarantee</h5>
              <p>30 Days Money-Back Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
