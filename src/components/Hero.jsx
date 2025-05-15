import React from 'react'
import{Banner1, Banner2, Banner3 }from '../assets/assets.js'
import '../CSS/Hero.css'

function Hero() {
  return (
    <div className='container'>
        {/* Banner Section */}
        <div className='row main-banner mb-4'>
          <div className='col-md-8 banner-left p-3'>
            <div className='d-flex flex-column align-items-start justify-content-center h-100'>
              <img src={Banner1} alt="organic food" className='img-fluid mb-3' />
            </div>
          </div>
          <div className="col-md-4 banner-right p-3">
            <div className="sale-box mb-3">
              <img src={Banner2} alt="Summer Sale" className="img-fluid mb-2" />
            </div>
            <div className='deal-box'>
              <img src={Banner3} alt='best deal' className='img-fluid mb-2' />
            </div>
          </div>
        </div>
        </div>
  )
}

export default Hero
