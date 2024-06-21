import React from 'react'
import Icon from './Icon'
import Heading from "../components/Heading"
import Image from './Image'

const Explore = () => {
  return (
    <section className='explore-section'>
      <Heading title={'Explore more'} />
      <div className='explore-wrapper'>
        <div className='image-wrapper'>
          <Image url={'/assets/explore-nike.jpg'} alt={'test'} />
          <div className='text-wrapper'>
            <span>Nike</span>
            <Icon id='black-line' className='line' />
          </div>
        </div>
        <div className='image-wrapper'>
          <Image url={'/assets/explore-hoodrich.jpg'} alt={'test'} />
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