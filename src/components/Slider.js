import React from 'react'
import { Link } from 'react-router-dom'
import Image from './Image'

const Slider = () => {
  return (
    <section className='slider-section'>
      <div className='slider-wrapper'>
        <div className='content-wrapper'>
          <h2><span>New</span> season treads</h2>
          <div className='image-wrapper'>
            <Image url={'/assets/new-seasons.png'} alt={'sneakers'} className='bg-image' />
            <Image url={'/assets/new-seasons.png'} alt={'sneakers'} className='bg-img' />
          </div>
        </div>
        <div className='button-wrapper'>
          <Link to="/list">
            <button className='shop-btn'>Shop know</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Slider