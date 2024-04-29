import React from 'react'
import exploreNike from '../images/explore-nike.jpg'
import exploreHoodrich from '../images/explore-hoodrich.jpg'
import Icon from '../sprite/Icon'
import Heading from "../components/Heading"

const Explore = () => {
  return (
    <section className='explore-section'>
      <Heading title={'Explore more'} />
      <div className='explore-wrapper'>
        <div className='image-wrapper'>
          <img src={exploreNike} alt='man-wearing-nike-sportswear' />
          <div className='text-wrapper'>
            <span>Nike</span>
            <Icon id='black-line' className='line' />
          </div>
        </div>
        <div className='image-wrapper'>
          <img src={exploreHoodrich} alt='man-wearing-hoodrich-sportswear' />
          <div className='text-wrapper'>
            <span>Hoodrich</span>
            <Icon id='black-line' className='line' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Explore