import React from 'react'
import newSeason from '../images/new-seasons.png'

const Slider = () => {
  return (
    <section className='slider-section'>
        <div className='slider-wrapper'>
          <div className='content-wrapper'>
            <h2><span>New</span> season treads</h2>
            <div className='image-wrapper'>
              <img src={newSeason} alt='sneakers' className='bg-image'/>
              <img src={newSeason} alt='sneakers' className='bg-img'/> 
            </div>
          </div>
          <div className='button-wrapper'>
            <button className='shop-btn'>Shop know</button></div>
        </div>
      </section>
  )
}

export default Slider