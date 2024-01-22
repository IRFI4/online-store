import React from 'react'
import exploreNike from '../images/nike.jpg'
import exploreHoodrich from '../images/hoodrich.jpg'
import Icon from '../sprite/Icon'

const Explore = () => {
  return (
    <section className='explore-section'>
        <h2>Explore more</h2>
      <div className='explore-wrapper'>
        <div className='image-wrapper'>
          <img src={exploreNike} alt='man-wearing-nike-sportswear' />
          <div className='text-wrapper'>
            <span>Nike</span>
            <Icon id='black-line' className='line'/>
          </div>
        </div>
        <div className='image-wrapper'>
          <img src={exploreHoodrich} alt='man-wearing-hoodrich-sportswear' />
          <div className='text-wrapper'>
            <span>Hoodrich</span>
            <Icon id='black-line' className='line'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Explore