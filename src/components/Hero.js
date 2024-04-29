import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='hero-wrapper'>
        <div className='hero-content-wrapper'>
          <h1 className='hero-title'><span>Step into the future</span> with our <b>sneakers</b></h1>
          <p className='hero-description'>The new era has already arrived, we are ready for everything</p>
          <Link to="/list">
            <button className='shop-btn' type='button'>Shop know</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero