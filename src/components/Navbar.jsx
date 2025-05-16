import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../CSS/Navbar.css";
import { logo } from "../assets/assets.js";
import { IoMdSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
import { FaPhoneVolume } from "react-icons/fa6";

function Navbar() {
  return (
    <nav>
      <div className="containers">
        <div className="nav1">
          <div className="nav1-left">
            <CiLocationOn className="nav1-icons" />
            <p className="nav1-text">
              Store Location - Lincoln - 344, Illinois, Chicago, USA
            </p>
          </div>

          <div className="nav1-right">
            <p className="nav1-text">Eng</p>
            <RiArrowDropDownLine className="nav1-icons" />
            <p className="nav1-text">USD</p>
            <RiArrowDropDownLine className="nav1-icons" />
            <div className="sign">
              <p className="nav1-text">Sign In / Sign Up</p>
            </div>
          </div>
        </div>
      </div>
<hr className="hr"/>

      <div className="containers">
        <div className="nav2">
        <div className="nav2-logo">
          <div className="nav2-logo-icon">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav2-logo-text">
            <p>Ecobazar</p>
          </div>
        </div>

        <div className="search-wrapper">
          <IoMdSearch className="nav2-search-icon" />
          <input
            type="text"
            className="nav2-search-input"
            placeholder="Search"
          />
          <button className="nav2-search-btn">Search</button>
        </div>

        <div className="nav2-icons">
          <IoMdHeartEmpty className="nav2-icons-heart" />

          <div className="divider" />

          <div className="nav2-cart">
            <SlHandbag className="nav2-icons-cart" />
            <div className="nav2-cart-text">
              <p className="cart-label">Shopping cart:</p>
              <p className="cart-amount">$57.00</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="containers-nav3">
         <div className="nav3">
        <div className="nav3-links">
          <p className="nav3-link">
            Home <RiArrowDropDownLine className="nav3-icons" />
          </p>
          <p className="nav3-link">
            Shop <RiArrowDropDownLine className="nav3-icons" />
          </p>
          <p className="nav3-link">
            Pages <RiArrowDropDownLine className="nav3-icons" />
          </p>
          <p className="nav3-link">
            Blog <RiArrowDropDownLine className="nav3-icons" />
          </p>
          <p className="nav3-link">About Us</p>
          <p className="nav3-link">Contact Us</p>
        </div>
        <div className="nav3-phone">
          <FaPhoneVolume className="nav3-phone-icon" />
          <p>(219) 555-0114</p>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
