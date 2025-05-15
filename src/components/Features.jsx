import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FaBoxOpen } from "react-icons/fa";

function Features() {
  return (
    <div>
      <div class="container text-center">
  <div class="row align-items-center">
    <div class="col">
      <FaTruckFast />
    </div>
    <div class="col">
      <FaHeadset />
    </div>
    <div class="col">
      <RiShoppingBag3Line />
    </div>
    <div class="col">
      <FaBoxOpen />
    </div>
  </div>
</div>
    </div>
  )
}

export default Features
