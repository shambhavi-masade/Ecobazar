import React from 'react';
import { Banner1, Banner2, Banner3 } from '../assets/assets.js';
import '../CSS/Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
      {/* Banner Section */}
      <div className='hero-row'>
        <div className='hero-left'>
          <div className='hero-image-wrapper'>
            <img src={Banner1} alt="Organic Food" className='hero-img mb-3' />
          </div>
        </div>
        <div className='hero-right'>
          <div className="sale-box">
            <img src={Banner2} alt="Summer Sale" className="hero-img mb-2" />
          </div>
          <div className='deal-box'>
            <img src={Banner3} alt='Best Deal' className='hero-img mb-2' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
